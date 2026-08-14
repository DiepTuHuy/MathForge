// Database of Greek Letters
const greekLetters = [
  { char: 'α', name: 'Alpha', type: 'lowercase', latex: '\\alpha', popular: true, usage: 'Hệ số nở nhiệt, góc phẳng, hạt phóng xạ alpha' },
  { char: 'Α', name: 'Alpha', type: 'uppercase', latex: 'A', popular: false, usage: 'Chữ cái hoa Alpha' },
  { char: 'β', name: 'Beta', type: 'lowercase', latex: '\\beta', popular: true, usage: 'Góc phẳng, hạt phóng xạ beta' },
  { char: 'Β', name: 'Beta', type: 'uppercase', latex: 'B', popular: false, usage: 'Chữ cái hoa Beta' },
  { char: 'γ', name: 'Gamma', type: 'lowercase', latex: '\\gamma', popular: true, usage: 'Tỷ số nhiệt dung, tia gamma' },
  { char: 'Γ', name: 'Gamma', type: 'uppercase', latex: '\\Gamma', popular: true, usage: 'Hàm Gamma, hệ số phản xạ' },
  { char: 'δ', name: 'Delta', type: 'lowercase', latex: '\\delta', popular: true, usage: 'Độ biến thiên vô cùng nhỏ' },
  { char: 'Δ', name: 'Delta', type: 'uppercase', latex: '\\Delta', popular: true, usage: 'Độ biến thiên, sai số tuyệt đối' },
  { char: 'ε', name: 'Epsilon', type: 'lowercase', latex: '\\epsilon', popular: true, usage: 'Độ điện môi, sai số vô cùng nhỏ' },
  { char: 'Ε', name: 'Epsilon', type: 'uppercase', latex: 'E', popular: false, usage: 'Chữ cái hoa Epsilon' },
  { char: 'ζ', name: 'Zeta', type: 'lowercase', latex: '\\zeta', popular: false, usage: 'Hàm Riemann zeta' },
  { char: 'Ζ', name: 'Zeta', type: 'uppercase', latex: 'Z', popular: false, usage: 'Chữ cái hoa Zeta' },
  { char: 'η', name: 'Eta', type: 'lowercase', latex: '\\eta', popular: true, usage: 'Hiệu suất động cơ, độ nhớt' },
  { char: 'Η', name: 'Eta', type: 'uppercase', latex: 'H', popular: false, usage: 'Chữ cái hoa Eta' },
  { char: 'θ', name: 'Theta', type: 'lowercase', latex: '\\theta', popular: true, usage: 'Góc phẳng trong lượng giác' },
  { char: 'Θ', name: 'Theta', type: 'uppercase', latex: '\\Theta', popular: true, usage: 'Ký hiệu tiệm cận chặt Big Theta' },
  { char: 'ι', name: 'Iota', type: 'lowercase', latex: '\\iota', popular: false, usage: 'Chỉ số ma trận' },
  { char: 'Ι', name: 'Iota', type: 'uppercase', latex: 'I', popular: false, usage: 'Chữ cái hoa Iota' },
  { char: 'κ', name: 'Kappa', type: 'lowercase', latex: '\\kappa', popular: false, usage: 'Độ cong hình học' },
  { char: 'Κ', name: 'Kappa', type: 'uppercase', latex: 'K', popular: false, usage: 'Chữ cái hoa Kappa' },
  { char: 'λ', name: 'Lambda', type: 'lowercase', latex: '\\lambda', popular: true, usage: 'Bước sóng ánh sáng, trị riêng' },
  { char: 'Λ', name: 'Lambda', type: 'uppercase', latex: '\\Lambda', popular: true, usage: 'Hằng số vũ trụ học' },
  { char: 'μ', name: 'Mu', type: 'lowercase', latex: '\\mu', popular: true, usage: 'Độ từ thẩm, tiền tố micro' },
  { char: 'Μ', name: 'Mu', type: 'uppercase', latex: 'M', popular: false, usage: 'Chữ cái hoa Mu' },
  { char: 'ν', name: 'Nu', type: 'lowercase', latex: '\\nu', popular: true, usage: 'Tần số sóng, độ nhớt động học' },
  { char: 'Ν', name: 'Nu', type: 'uppercase', latex: 'N', popular: false, usage: 'Chữ cái hoa Nu' },
  { char: 'ξ', name: 'Xi', type: 'lowercase', latex: '\\xi', popular: false, usage: 'Biến ngẫu nhiên' },
  { char: 'Ξ', name: 'Xi', type: 'uppercase', latex: '\\Xi', popular: false, usage: 'Hạt baryon Xi' },
  { char: 'ο', name: 'Omicron', type: 'lowercase', latex: 'o', popular: false, usage: 'Ký hiệu tiệm cận nhỏ' },
  { char: 'Ο', name: 'Omicron', type: 'uppercase', latex: 'O', popular: false, usage: 'Ký hiệu tiệm cận lớn' },
  { char: 'π', name: 'Pi', type: 'lowercase', latex: '\\pi', popular: true, usage: 'Hằng số Pi (~3.14159)' },
  { char: 'Π', name: 'Pi', type: 'uppercase', latex: '\\Pi', popular: true, usage: 'Toán tử tích chuỗi' },
  { char: 'ρ', name: 'Rho', type: 'lowercase', latex: '\\rho', popular: true, usage: 'Khối lượng riêng, điện trở suất' },
  { char: 'Ρ', name: 'Rho', type: 'uppercase', latex: 'R', popular: false, usage: 'Chữ cái hoa Rho' },
  { char: 'σ', name: 'Sigma', type: 'lowercase', latex: '\\sigma', popular: true, usage: 'Độ lệch chuẩn, ứng suất kéo' },
  { char: 'Σ', name: 'Sigma', type: 'uppercase', latex: '\\Sigma', popular: true, usage: 'Toán tử tổng chuỗi' },
  { char: 'τ', name: 'Tau', type: 'lowercase', latex: '\\tau', popular: true, usage: 'Mô-men lực, hằng số thời gian' },
  { char: 'Τ', name: 'Tau', type: 'uppercase', latex: 'T', popular: false, usage: 'Chữ cái hoa Tau' },
  { char: 'υ', name: 'Upsilon', type: 'lowercase', latex: '\\upsilon', popular: false, usage: 'Tỷ lệ khối lượng trên ánh sáng' },
  { char: 'Υ', name: 'Upsilon', type: 'uppercase', latex: '\\Upsilon', popular: false, usage: 'Hạt meson Upsilon' },
  { char: 'φ', name: 'Phi', type: 'lowercase', latex: '\\phi', popular: true, usage: 'Góc pha, tỷ lệ vàng phi' },
  { char: 'Φ', name: 'Phi', type: 'uppercase', latex: '\\Phi', popular: true, usage: 'Từ thông' },
  { char: 'χ', name: 'Chi', type: 'lowercase', latex: '\\chi', popular: false, usage: 'Phân phối Chi-bình phương' },
  { char: 'Χ', name: 'Chi', type: 'uppercase', latex: 'X', popular: false, usage: 'Chữ cái hoa Chi' },
  { char: 'ψ', name: 'Psi', type: 'lowercase', latex: '\\psi', popular: true, usage: 'Hàm sóng lượng tử' },
  { char: 'Ψ', name: 'Psi', type: 'uppercase', latex: '\\Psi', popular: true, usage: 'Hàm sóng vĩ mô' },
  { char: 'ω', name: 'Omega', type: 'lowercase', latex: '\\omega', popular: true, usage: 'Tần số góc' },
  { char: 'Ω', name: 'Omega', type: 'uppercase', latex: '\\Omega', popular: true, usage: 'Đơn vị điện trở Ohm' }
];

// App State
const state = {
  latex: '',
  displayMode: 'display',
  scale: 2.0,
  color: '#1C1917', // Match new Charcoal default
  bgMode: 'light',
  library: JSON.parse(localStorage.getItem('mathforge_library') || '[]'),
  greekCategory: 'all',
  greekSearch: ''
};

// DOM Elements
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
  
  // Actions
  btnCopySvg: document.getElementById('btn-copy-svg'),
  btnCopyPng: document.getElementById('btn-copy-png'),
  btnCopyDocxLatex: document.getElementById('btn-copy-docx-latex'),
  btnCopyMathml: document.getElementById('btn-copy-mathml'),
  btnDownloadSvg: document.getElementById('btn-download-svg'),
  btnDownloadPng: document.getElementById('btn-download-png'),
  
  // Library
  btnSaveFormula: document.getElementById('btn-save-formula'),
  btnClearLibrary: document.getElementById('btn-clear-library'),
  libraryItems: document.getElementById('library-items'),
  libraryEmptyMsg: document.getElementById('library-empty-msg'),
  
  canvas: document.getElementById('export-canvas'),
  toastBox: document.getElementById('toast-box'),
  
  // Greek Modal
  btnOpenGreekModal: document.getElementById('btn-open-greek-modal'),
  btnCloseGreekModal: document.getElementById('btn-close-greek-modal'),
  greekModal: document.getElementById('greek-modal'),
  greekSearchInput: document.getElementById('greek-search-input'),
  greekFilterBtns: document.querySelectorAll('.filter-btn'),
  greekCardsGrid: document.getElementById('greek-cards-grid'),
  greekEmptyState: document.getElementById('greek-empty-state')
};

/* -----------------------------------------
   Core UI & Helpers
----------------------------------------- */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  let icon = 'info';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'alert-triangle';
  
  toast.innerHTML = `<i data-lucide="${icon}"></i><span>${message}</span>`;
  elements.toastBox.appendChild(toast);
  lucide.createIcons({ root: toast });
  
  setTimeout(() => {
    toast.style.animation = 'none';
    toast.offsetHeight;
    toast.style.animation = 'toastSlide 0.4s reverse forwards';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function insertTextAtCursor(textarea, text) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const currentVal = textarea.value;
  textarea.value = currentVal.substring(0, start) + text + currentVal.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  updatePreview();
}

/* -----------------------------------------
   MathJax Rendering
----------------------------------------- */
let renderTimeout;
function updatePreview() {
  state.latex = elements.latexInput.value.trim();
  clearTimeout(renderTimeout);
  renderTimeout = setTimeout(() => {
    if (typeof MathJax !== 'undefined' && MathJax.tex2svg) {
      try {
        elements.mathOutput.innerHTML = '';
        if (!state.latex) {
          elements.mathOutput.innerHTML = '<span style="color: var(--text-muted); font-style: italic;">Công thức trống</span>';
          return;
        }

        const isDisplay = state.displayMode === 'display';
        const svgWrapper = MathJax.tex2svg(state.latex, { display: isDisplay });
        
        elements.mathOutput.appendChild(svgWrapper);
        elements.mathOutput.style.color = state.color;
        
        const svg = elements.mathOutput.querySelector('svg');
        if (svg) {
          svg.style.fontSize = `${state.scale}rem`;
          svg.style.transition = 'font-size 0.3s cubic-bezier(0.32, 0.72, 0, 1)';
        }
      } catch (err) {
        elements.mathOutput.innerHTML = `<span style="color: #DC2626;"><i data-lucide="alert-triangle"></i> Lỗi cú pháp LaTeX</span>`;
        lucide.createIcons();
      }
    } else {
      setTimeout(updatePreview, 100);
    }
  }, 100);
}

function getExportSvgString() {
  const svg = elements.mathOutput.querySelector('svg');
  if (!svg) {
    showToast('Chưa có công thức hợp lệ để xuất!', 'error');
    return null;
  }
  
  const svgClone = svg.cloneNode(true);
  svgClone.removeAttribute('style');
  svgClone.setAttribute('fill', state.color);
  svgClone.setAttribute('style', `color: ${state.color};`);
  
  const rect = svg.getBoundingClientRect();
  svgClone.setAttribute('width', `${rect.width}px`);
  svgClone.setAttribute('height', `${rect.height}px`);
  svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svgClone);
}

/* -----------------------------------------
   Greek Letters Modal
----------------------------------------- */
function renderGreekLetters() {
  elements.greekCardsGrid.innerHTML = '';
  
  const filtered = greekLetters.filter(item => {
    if (state.greekCategory === 'lowercase' && item.type !== 'lowercase') return false;
    if (state.greekCategory === 'uppercase' && item.type !== 'uppercase') return false;
    if (state.greekCategory === 'popular' && !item.popular) return false;
    
    if (state.greekSearch) {
      const q = state.greekSearch.toLowerCase();
      return item.name.toLowerCase().includes(q) || 
             item.char.toLowerCase().includes(q) || 
             item.latex.toLowerCase().includes(q) || 
             item.usage.toLowerCase().includes(q);
    }
    return true;
  });
  
  if (filtered.length === 0) {
    elements.greekCardsGrid.style.display = 'none';
    elements.greekEmptyState.classList.remove('hidden');
  } else {
    elements.greekCardsGrid.style.display = 'grid';
    elements.greekEmptyState.classList.add('hidden');
    
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'greek-card group';
      
      let badgeClass = item.type === 'lowercase' ? 'badge-lower' : 'badge-upper';
      let badgeText = item.type === 'lowercase' ? 'Thường' : 'Hoa';
      let popBadge = item.popular ? `<span class="greek-badge badge-popular"><i data-lucide="star" style="width:10px;height:10px;fill:currentColor;"></i> Phổ biến</span>` : '';
      
      card.innerHTML = `
        <div class="greek-card-header">
          <span class="greek-badge ${badgeClass}">${badgeText}</span>
          ${popBadge}
        </div>
        <div class="greek-symbol">${item.char}</div>
        <div class="greek-name">${item.name}</div>
        <div class="greek-divider"></div>
        <div class="greek-codes">
          <div>LaTeX: <code>${item.latex}</code></div>
        </div>
        <div class="greek-usage" title="${item.usage}">${item.usage}</div>
        <div class="greek-card-overlay">
          <i data-lucide="plus" stroke-width="1.5"></i>
          <span>Chèn ký tự</span>
        </div>
      `;
      
      card.addEventListener('click', () => {
        elements.greekModal.classList.remove('active');
        insertTextAtCursor(elements.latexInput, item.latex + ' ');
        showToast(`Đã chèn ký tự ${item.name} (${item.char})`, 'success');
      });
      
      elements.greekCardsGrid.appendChild(card);
    });
    lucide.createIcons({ root: elements.greekCardsGrid });
  }
}

elements.btnOpenGreekModal.addEventListener('click', () => {
  elements.greekModal.classList.add('active');
  if (elements.greekCardsGrid.innerHTML === '') renderGreekLetters();
});

elements.btnCloseGreekModal.addEventListener('click', () => {
  elements.greekModal.classList.remove('active');
});

// Close modal when clicking outside content
elements.greekModal.addEventListener('click', (e) => {
  if (e.target === elements.greekModal) elements.greekModal.classList.remove('active');
});

elements.greekSearchInput.addEventListener('input', (e) => {
  state.greekSearch = e.target.value;
  renderGreekLetters();
});

elements.greekFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.greekFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.greekCategory = btn.getAttribute('data-category');
    renderGreekLetters();
  });
});


/* -----------------------------------------
   Event Listeners (Toolbar, Controls)
----------------------------------------- */
document.querySelectorAll('.tool-icon-btn[data-snippet], .tool-text-btn[data-snippet]').forEach(btn => {
  btn.addEventListener('click', () => {
    const snippet = btn.getAttribute('data-snippet');
    insertTextAtCursor(elements.latexInput, snippet);
  });
});

elements.bgToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.bgToggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.bgMode = btn.getAttribute('data-bg');
    elements.previewBox.className = 'preview-area';
    if (state.bgMode === 'checkered') elements.previewBox.classList.add('checkered');
    if (state.bgMode === 'dark') elements.previewBox.classList.add('dark');
    if (state.bgMode === 'light') elements.previewBox.classList.add('light');
  });
});

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

elements.displayMode.addEventListener('change', (e) => {
  state.displayMode = e.target.value;
  updatePreview();
});

elements.scaleSlider.addEventListener('input', (e) => {
  state.scale = parseFloat(e.target.value);
  elements.scaleValue.textContent = state.scale.toFixed(1);
  const svg = elements.mathOutput.querySelector('svg');
  if (svg) svg.style.fontSize = `${state.scale}rem`;
});

/* -----------------------------------------
   Export Actions
----------------------------------------- */
elements.btnCopySvg.addEventListener('click', async () => {
  const svgString = getExportSvgString();
  if (!svgString) return;
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/svg+xml': blob, 'text/plain': new Blob([svgString], { type: 'text/plain' }) })
    ]);
    showToast('Đã sao chép vector SVG!', 'success');
  } catch (err) {
    try {
      await navigator.clipboard.writeText(svgString);
      showToast('Đã sao chép mã SVG.', 'success');
    } catch (e) {
      showToast('Sao chép thất bại.', 'error');
    }
  }
});

elements.btnCopyPng.addEventListener('click', () => {
  renderToCanvas((canvas) => {
    canvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        showToast('Đã sao chép ảnh PNG!', 'success');
      } catch (err) {
        showToast('Trình duyệt không hỗ trợ sao chép PNG.', 'error');
      }
    }, 'image/png');
  });
});

elements.btnCopyDocxLatex.addEventListener('click', async () => {
  if (!state.latex) return showToast('Chưa có công thức!', 'error');
  let wrappedLatex = state.latex.trim();
  if (!wrappedLatex.startsWith('$$')) {
    if (wrappedLatex.startsWith('$')) wrappedLatex = `$$${wrappedLatex.slice(1, -1).trim()}$$`;
    else wrappedLatex = `$$${wrappedLatex}$$`;
  }
  try {
    await navigator.clipboard.writeText(wrappedLatex);
    showToast('Đã sao chép LaTeX cho Docs!', 'success');
  } catch (err) { showToast('Sao chép thất bại.', 'error'); }
});

elements.btnCopyMathml.addEventListener('click', async () => {
  if (!state.latex) return showToast('Chưa có công thức!', 'error');
  try {
    if (MathJax && MathJax.tex2mml) {
      const mmlText = MathJax.tex2mml(state.latex, { display: state.displayMode === 'display' });
      await navigator.clipboard.writeText(mmlText);
      showToast('Đã sao chép MathML!', 'success');
    }
  } catch (err) { showToast('Lỗi MathML.', 'error'); }
});

elements.btnDownloadSvg.addEventListener('click', () => {
  const svgString = getExportSvgString();
  if (!svgString) return;
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `math-${Date.now()}.svg`;
  a.click();
  showToast('Đã tải SVG!', 'success');
});

elements.btnDownloadPng.addEventListener('click', () => {
  renderToCanvas((canvas) => {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `math-${Date.now()}.png`;
    a.click();
    showToast('Đã tải PNG!', 'success');
  });
});

function renderToCanvas(callback) {
  const svgString = getExportSvgString();
  if (!svgString) return;
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const blobURL = URL.createObjectURL(svgBlob);
  const image = new Image();
  image.onload = () => {
    const canvas = elements.canvas;
    const context = canvas.getContext('2d');
    const renderScale = 4;
    const rect = elements.mathOutput.querySelector('svg').getBoundingClientRect();
    canvas.width = rect.width * renderScale;
    canvas.height = rect.height * renderScale;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(renderScale, renderScale);
    context.drawImage(image, 0, 0);
    callback(canvas);
    URL.revokeObjectURL(blobURL);
  };
  image.src = blobURL;
}

/* -----------------------------------------
   Library / History Management
----------------------------------------- */
function updateLibraryUI() {
  elements.libraryItems.innerHTML = '';
  if (state.library.length === 0) {
    elements.libraryEmptyMsg.style.display = 'flex';
    elements.libraryItems.style.display = 'none';
    return;
  }
  
  elements.libraryEmptyMsg.style.display = 'none';
  elements.libraryItems.style.display = 'grid';
  
  state.library.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'library-item';
    
    const cardContent = document.createElement('div');
    cardContent.className = 'library-item-content';
    const svgNode = MathJax.tex2svg(item.latex, { display: item.displayMode === 'display' });
    const svg = svgNode.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', item.color);
      svg.setAttribute('style', `color: ${item.color};`);
    }
    cardContent.appendChild(svgNode);
    
    const footer = document.createElement('div');
    footer.className = 'library-item-footer';
    const code = document.createElement('div');
    code.className = 'library-item-code';
    code.textContent = item.latex;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'library-item-delete';
    deleteBtn.innerHTML = '<i data-lucide="trash-2" stroke-width="1.5"></i>';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.library.splice(index, 1);
      localStorage.setItem('mathforge_library', JSON.stringify(state.library));
      updateLibraryUI();
      showToast('Đã xóa khỏi thư viện.', 'info');
    });
    
    footer.appendChild(code);
    footer.appendChild(deleteBtn);
    card.appendChild(cardContent);
    card.appendChild(footer);
    
    card.addEventListener('click', () => {
      elements.latexInput.value = item.latex;
      state.displayMode = item.displayMode;
      elements.displayMode.value = item.displayMode;
      state.scale = item.scale;
      elements.scaleSlider.value = item.scale;
      elements.scaleValue.textContent = item.scale.toFixed(1);
      state.color = item.color;
      elements.customColor.value = item.color;
      elements.colorSwatches.forEach(swatch => {
        if (swatch.getAttribute('data-color') === item.color) swatch.classList.add('active');
        else swatch.classList.remove('active');
      });
      updatePreview();
      showToast('Đã tải công thức!', 'info');
    });
    
    elements.libraryItems.appendChild(card);
  });
  lucide.createIcons({ root: elements.libraryItems });
}

elements.btnSaveFormula.addEventListener('click', () => {
  if (!state.latex) return showToast('Công thức trống!', 'error');
  const duplicate = state.library.find(item => item.latex === state.latex && item.color === state.color);
  if (duplicate) return showToast('Công thức đã tồn tại!', 'info');
  
  state.library.unshift({ latex: state.latex, displayMode: state.displayMode, scale: state.scale, color: state.color });
  localStorage.setItem('mathforge_library', JSON.stringify(state.library));
  updateLibraryUI();
  showToast('Đã lưu thành công!', 'success');
});

elements.btnClearLibrary.addEventListener('click', () => {
  if (state.library.length === 0) return;
  if (confirm('Xóa toàn bộ thư viện? Hành động này không thể hoàn tác.')) {
    state.library = [];
    localStorage.removeItem('mathforge_library');
    updateLibraryUI();
    showToast('Đã dọn sạch thư viện.', 'info');
  }
});

/* -----------------------------------------
   Init
----------------------------------------- */
elements.latexInput.addEventListener('input', updatePreview);
window.addEventListener('load', () => {
  lucide.createIcons();
  updatePreview();
  setTimeout(updateLibraryUI, 500); // give MathJax time to initialize
});
