// App State and DOM Elements
const state = {
  latex: '',
  displayMode: 'display',
  scale: 2.0,
  color: '#ffffff',
  bgMode: 'checkered',
  library: JSON.parse(localStorage.getItem('mathforge_library') || '[]')
};

const elements = {
  latexInput: document.getElementById('latex-input'),
  mathOutput: document.getElementById('math-output'),
  previewBox: document.getElementById('preview-box'),
  displayMode: document.getElementById('display-mode'),
  scaleSlider: document.getElementById('scale-slider'),
  scaleValue: document.getElementById('scale-value'),
  customColor: document.getElementById('custom-color-picker'),
  colorSwatches: document.querySelectorAll('.color-swatch'),
  bgToggleBtns: document.querySelectorAll('.bg-toggle-btn'),
  btnCopySvg: document.getElementById('btn-copy-svg'),
  btnCopyPng: document.getElementById('btn-copy-png'),
  btnCopyCode: document.getElementById('btn-copy-code'),
  btnDownloadSvg: document.getElementById('btn-download-svg'),
  btnDownloadPng: document.getElementById('btn-download-png'),
  btnSaveFormula: document.getElementById('btn-save-formula'),
  btnClearLibrary: document.getElementById('btn-clear-library'),
  libraryItems: document.getElementById('library-items'),
  libraryEmptyMsg: document.getElementById('library-empty-msg'),
  canvas: document.getElementById('export-canvas'),
  toastBox: document.getElementById('toast-box')
};

// Snippet toolbar click listener
document.querySelectorAll('.tool-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const snippet = btn.getAttribute('data-snippet');
    insertTextAtCursor(elements.latexInput, snippet);
    updatePreview();
  });
});

// Toast notification helper
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-exclamation';
  
  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  elements.toastBox.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'none';
    toast.offsetHeight; // Trigger reflow
    toast.style.animation = 'slideIn 0.3s reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Cursor text insertion helper
function insertTextAtCursor(textarea, text) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const currentVal = textarea.value;
  textarea.value = currentVal.substring(0, start) + text + currentVal.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
}

// Render Math Formula using MathJax 3
let renderTimeout;
function updatePreview() {
  state.latex = elements.latexInput.value.trim();
  
  // Debounce MathJax typesetting to avoid stuttering during typing
  clearTimeout(renderTimeout);
  renderTimeout = setTimeout(() => {
    if (typeof MathJax !== 'undefined' && MathJax.tex2svg) {
      try {
        elements.mathOutput.innerHTML = '';
        
        if (!state.latex) {
          elements.mathOutput.innerHTML = '<span style="color: var(--text-secondary); font-style: italic;">Công thức trống</span>';
          return;
        }

        const isDisplay = state.displayMode === 'display';
        // Create typeset element
        const svgWrapper = MathJax.tex2svg(state.latex, { display: isDisplay });
        
        // Apply customizations
        elements.mathOutput.appendChild(svgWrapper);
        
        // Update color and scale style
        elements.mathOutput.style.color = state.color;
        
        const svg = elements.mathOutput.querySelector('svg');
        if (svg) {
          svg.style.fontSize = `${state.scale}rem`;
          svg.style.transition = 'font-size 0.2s ease';
        }
      } catch (err) {
        console.error('MathJax rendering error:', err);
        elements.mathOutput.innerHTML = `<span style="color: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> Lỗi cú pháp LaTeX</span>`;
      }
    } else {
      // Retry in 100ms if MathJax is still loading
      setTimeout(updatePreview, 100);
    }
  }, 100);
}

// Get clean SVG Element string for exporting
function getExportSvgString() {
  const svg = elements.mathOutput.querySelector('svg');
  if (!svg) {
    showToast('Chưa có công thức hợp lệ để xuất!', 'error');
    return null;
  }
  
  // Clone to avoid modifying active preview
  const svgClone = svg.cloneNode(true);
  
  // Remove font-size style and make it explicit in attributes
  svgClone.removeAttribute('style');
  
  // Bake the current color and font size into the SVG so it displays properly standalone
  svgClone.setAttribute('fill', state.color);
  svgClone.setAttribute('style', `color: ${state.color};`);
  
  // Extract real pixel dimension using bounding rect
  const rect = svg.getBoundingClientRect();
  svgClone.setAttribute('width', `${rect.width}px`);
  svgClone.setAttribute('height', `${rect.height}px`);
  svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svgClone);
}

// Setup background style selector
elements.bgToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.bgToggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const bgType = btn.getAttribute('data-bg');
    state.bgMode = bgType;
    
    elements.previewBox.className = 'preview-area';
    if (bgType === 'checkered') elements.previewBox.classList.add('checkered');
    if (bgType === 'dark') elements.previewBox.classList.add('dark');
    if (bgType === 'light') elements.previewBox.classList.add('light');
  });
});

// Setup color swatches and color picker
elements.colorSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    elements.colorSwatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    
    state.color = swatch.getAttribute('data-color');
    elements.customColor.value = state.color;
    updatePreview();
  });
});

elements.customColor.addEventListener('input', (e) => {
  elements.colorSwatches.forEach(s => s.classList.remove('active'));
  state.color = e.target.value;
  updatePreview();
});

// Setup display mode dropdown
elements.displayMode.addEventListener('change', (e) => {
  state.displayMode = e.target.value;
  updatePreview();
});

// Setup scale slider
elements.scaleSlider.addEventListener('input', (e) => {
  state.scale = parseFloat(e.target.value);
  elements.scaleValue.textContent = state.scale.toFixed(1);
  const svg = elements.mathOutput.querySelector('svg');
  if (svg) {
    svg.style.fontSize = `${state.scale}rem`;
  }
});

// Copy raw SVG code
elements.btnCopyCode.addEventListener('click', async () => {
  const svgString = getExportSvgString();
  if (!svgString) return;
  
  try {
    await navigator.clipboard.writeText(svgString);
    showToast('Đã sao chép mã code SVG!', 'success');
  } catch (err) {
    showToast('Sao chép mã thất bại.', 'error');
  }
});

// Copy SVG Vector Image Blob
elements.btnCopySvg.addEventListener('click', async () => {
  const svgString = getExportSvgString();
  if (!svgString) return;
  
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  
  try {
    // Write image/svg+xml and fallback text
    await navigator.clipboard.write([
      new ClipboardItem({
        'image/svg+xml': blob,
        'text/plain': new Blob([svgString], { type: 'text/plain' })
      })
    ]);
    showToast('Đã sao chép vector SVG vào bộ nhớ tạm!', 'success');
  } catch (err) {
    // Fallback for browsers that don't support copying image/svg+xml blob directly
    try {
      await navigator.clipboard.writeText(svgString);
      showToast('Đã sao chép mã SVG (Trình duyệt không hỗ trợ dán ảnh vector).', 'success');
    } catch (e) {
      showToast('Sao chép thất bại.', 'error');
    }
  }
});

// Copy PNG Image
elements.btnCopyPng.addEventListener('click', () => {
  renderToCanvas((canvas) => {
    canvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        showToast('Đã sao chép ảnh PNG vào bộ nhớ tạm!', 'success');
      } catch (err) {
        showToast('Trình duyệt không hỗ trợ sao chép ảnh PNG trực tiếp.', 'error');
      }
    }, 'image/png');
  });
});

// Download SVG file
elements.btnDownloadSvg.addEventListener('click', () => {
  const svgString = getExportSvgString();
  if (!svgString) return;
  
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `math-${Date.now()}.svg`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Đã tải xuống file SVG!', 'success');
});

// Download PNG file
elements.btnDownloadPng.addEventListener('click', () => {
  renderToCanvas((canvas) => {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `math-${Date.now()}.png`;
    a.click();
    showToast('Đã tải xuống file PNG!', 'success');
  });
});

// Render the MathJax SVG to Canvas for exporting
function renderToCanvas(callback) {
  const svg = elements.mathOutput.querySelector('svg');
  if (!svg) {
    showToast('Chưa có công thức hợp lệ để kết xuất!', 'error');
    return;
  }
  
  const svgString = getExportSvgString();
  if (!svgString) return;
  
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const URLObj = window.URL || window.webkitURL || window;
  const blobURL = URLObj.createObjectURL(svgBlob);
  
  const image = new Image();
  image.onload = () => {
    const canvas = elements.canvas;
    const context = canvas.getContext('2d');
    
    // Scale for high resolution output (supersampling)
    const renderScale = 4; 
    
    // Get actual pixel size from the styled svg element
    const rect = svg.getBoundingClientRect();
    canvas.width = rect.width * renderScale;
    canvas.height = rect.height * renderScale;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Transparent background is kept by default
    context.scale(renderScale, renderScale);
    context.drawImage(image, 0, 0);
    
    // Trigger callback
    callback(canvas);
    URLObj.revokeObjectURL(blobURL);
  };
  
  image.onerror = (err) => {
    console.error('Image load error during canvas rendering:', err);
    showToast('Lỗi render hình ảnh.', 'error');
    URLObj.revokeObjectURL(blobURL);
  };
  
  image.src = blobURL;
}

// Local Library / History Management
function updateLibraryUI() {
  elements.libraryItems.innerHTML = '';
  
  if (state.library.length === 0) {
    elements.libraryEmptyMsg.style.display = 'block';
    return;
  }
  
  elements.libraryEmptyMsg.style.display = 'none';
  
  state.library.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'library-item';
    
    // Render item in card body
    const cardContent = document.createElement('div');
    cardContent.className = 'library-item-content';
    
    // Typeset formula using MathJax 3
    const isDisplay = item.displayMode === 'display';
    const svgNode = MathJax.tex2svg(item.latex, { display: isDisplay });
    const svg = svgNode.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', item.color);
      svg.setAttribute('style', `color: ${item.color};`);
    }
    cardContent.appendChild(svgNode);
    
    // Setup footer
    const footer = document.createElement('div');
    footer.className = 'library-item-footer';
    
    const code = document.createElement('div');
    code.className = 'library-item-code';
    code.textContent = item.latex;
    code.title = item.latex;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'library-item-delete';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.title = 'Xóa khỏi thư viện';
    
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop reload loading click
      deleteFromLibrary(index);
    });
    
    footer.appendChild(code);
    footer.appendChild(deleteBtn);
    
    card.appendChild(cardContent);
    card.appendChild(footer);
    
    // Click card to reload formula to editor
    card.addEventListener('click', () => {
      loadFormula(item);
    });
    
    elements.libraryItems.appendChild(card);
  });
}

// Save Current Formula to Library
elements.btnSaveFormula.addEventListener('click', () => {
  if (!state.latex) {
    showToast('Không thể lưu công thức trống!', 'error');
    return;
  }
  
  // Avoid duplicate exact matches
  const duplicate = state.library.find(item => item.latex === state.latex && item.color === state.color && item.displayMode === state.displayMode);
  if (duplicate) {
    showToast('Công thức này đã tồn tại trong thư viện!', 'info');
    return;
  }
  
  const newItem = {
    latex: state.latex,
    displayMode: state.displayMode,
    scale: state.scale,
    color: state.color
  };
  
  state.library.unshift(newItem); // Add to beginning
  localStorage.setItem('mathforge_library', JSON.stringify(state.library));
  updateLibraryUI();
  showToast('Đã lưu công thức vào thư viện!', 'success');
});

// Delete individual item
function deleteFromLibrary(index) {
  state.library.splice(index, 1);
  localStorage.setItem('mathforge_library', JSON.stringify(state.library));
  updateLibraryUI();
  showToast('Đã xóa công thức.', 'info');
}

// Clear all library items
elements.btnClearLibrary.addEventListener('click', () => {
  if (state.library.length === 0) return;
  
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ thư viện công thức?')) {
    state.library = [];
    localStorage.removeItem('mathforge_library');
    updateLibraryUI();
    showToast('Đã dọn sạch thư viện.', 'info');
  }
});

// Load formula from library card click
function loadFormula(item) {
  elements.latexInput.value = item.latex;
  state.displayMode = item.displayMode;
  elements.displayMode.value = item.displayMode;
  
  state.scale = item.scale;
  elements.scaleSlider.value = item.scale;
  elements.scaleValue.textContent = item.scale.toFixed(1);
  
  state.color = item.color;
  elements.customColor.value = item.color;
  
  // Highlight matching swatch if any
  elements.colorSwatches.forEach(swatch => {
    if (swatch.getAttribute('data-color') === item.color) {
      swatch.classList.add('active');
    } else {
      swatch.classList.remove('active');
    }
  });
  
  updatePreview();
  showToast('Đã tải công thức từ thư viện!', 'info');
}

// Initial Loading & Event Setup
elements.latexInput.addEventListener('input', updatePreview);

// Start app by typesetting
window.addEventListener('load', () => {
  updatePreview();
  updateLibraryUI();
});
