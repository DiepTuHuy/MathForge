# MathForge - LaTeX to SVG/PNG Math Compiler

**MathForge** là một ứng dụng web Single-Page App (SPA) gọn nhẹ, trực quan và hiện đại, giúp biên dịch nhanh chóng các công thức toán học từ mã LaTeX sang định dạng ảnh vector **SVG** hoặc raster **PNG** chất lượng cao. Ảnh xuất ra có thể chèn trực tiếp vào các tài liệu thuyết trình (Slide), báo cáo nghiên cứu khoa học, tài liệu Word, hoặc slide PowerPoint.

👉 **Trải nghiệm trực tuyến**: [GitHub Pages Demo](https://dieptuhuy.github.io/MathForge/)

---

## ✨ Tính năng nổi bật

### 1. Xem trước thời gian thực (Live Preview)
*   Tự động biên dịch mã LaTeX sang công thức toán học sắc nét ngay khi gõ bằng thư viện `MathJax 3`.
*   Tùy biến nền xem trước: Nền caro (trong suốt), nền tối (Dark mode) hoặc nền sáng (Light mode) để phù hợp với ngữ cảnh chèn tài liệu của bạn.

### 2. Định dạng sao chép đa dạng (Tương thích cao với Office)
*   **Sao chép ảnh SVG (Vector)**: Lưu blob dạng `image/svg+xml` trực tiếp vào clipboard, cho phép dán ảnh vector không bị vỡ/nhòe vào các phần mềm thiết kế đồ họa chuyên nghiệp như Figma, Adobe Illustrator, Inkscape.
*   **Sao chép ảnh PNG (Sắc nét)**: Tự động kết xuất đồ họa vector sang ảnh pixel dạng `image/png` thông qua Canvas ẩn với thuật toán siêu mẫu (4x supersampling), giúp ảnh dán sắc nét hoàn hảo trên MS Word, PowerPoint.
*   **Sao chép LaTeX (Docs/Word)**: Tự động bọc mã LaTeX trong cặp ký tự `$$...$$` để dán trực tiếp vào Google Docs, sẵn sàng biên dịch hàng loạt thông qua các add-on như *Auto-LaTeX Equations*.
*   **Sao chép MathML (Microsoft Word Equation)**: Biên dịch công thức LaTeX sang mã XML MathML gốc. Khi dán vào Microsoft Word, trình soạn thảo sẽ tự động nhận diện và chuyển đổi thành đối tượng **Office Equation** gốc, cho phép bạn chỉnh sửa nội dung toán học trực tiếp trên Word.
*   **Sao chép mã SVG**: Sao chép trực tiếp mã nguồn thẻ `<svg>` để nhúng trực tiếp vào các trang web hoặc dự án HTML/CSS.

### 3. Tự do tùy chỉnh & Tiện ích hỗ trợ
*   **Thanh công cụ ký hiệu (Snippets)**: Cung cấp các nút nhập nhanh các ký hiệu Hy Lạp ($\alpha, \beta, \theta$), các cấu trúc phổ biến (phân số, căn thức, mũ, tích phân, tổng, giới hạn) và ma trận, giúp việc soạn thảo LaTeX trở nên dễ dàng hơn.
*   **Tỷ lệ phóng to (Scale)**: Cho phép điều chỉnh độ phóng đại từ 1.0x đến 5.0x để có được kích thước xuất ảnh mong muốn.
*   **Chế độ hiển thị**: Chuyển đổi linh hoạt giữa Display Math (căn giữa, kích thước chuẩn) và Inline Math (nằm cùng dòng chữ).
*   **Bảng chọn màu sắc (Color Picker)**: Thay đổi màu sắc của công thức bằng các swatch màu có sẵn (Trắng, Đen, Xanh, Đỏ, Vàng...) hoặc chọn màu tùy chỉnh bất kỳ qua bảng màu hệ thống.

### 4. Thư viện công thức cá nhân (Local Storage)
*   Cho phép lưu lại các công thức toán đã biên dịch vào bộ nhớ cục bộ của trình duyệt (`localStorage`) dưới dạng thư viện cá nhân.
*   Bạn có thể xem lại, sao chép nhanh hoặc xóa các công thức trong thư viện bất kỳ lúc nào mà không sợ mất dữ liệu khi tắt trình duyệt.

---

## 📂 Cấu trúc mã nguồn

Dự án được xây dựng hoàn toàn trên nền tảng Frontend thuần (Vanilla HTML/CSS/JS) với giao diện tối giản, sang trọng:

*   [index.html](file:///Users/dieptuhuy/Library/CloudStorage/GoogleDrive-dieptuhuy80@gmail.com/My%20Drive/Paper%20ICLR/code/math_compiler/index.html): Định nghĩa cấu trúc ứng dụng và tích hợp bộ cấu hình MathJax 3.
*   [style.css](file:///Users/dieptuhuy/Library/CloudStorage/GoogleDrive-dieptuhuy80@gmail.com/My%20Drive/Paper%20ICLR/code/math_compiler/style.css): Thiết kế giao diện Dashboard tối với các hạt màu phát sáng (glow blobs) và hiệu ứng mờ kính (glassmorphism).
*   [app.js](file:///Users/dieptuhuy/Library/CloudStorage/GoogleDrive-dieptuhuy80@gmail.com/My%20Drive/Paper%20ICLR/code/math_compiler/app.js): Chịu trách nhiệm render MathJax, điều khiển các tùy chọn màu/kích thước, thực hiện sao chép ảnh thông qua Clipboard API và quản lý thư viện lưu trữ.

---

## 🚀 Hướng dẫn chạy cục bộ (Local Development)

Bạn có thể chạy ứng dụng trực tiếp mà không cần cài đặt phức tạp bằng các cách sau:

### Cách 1: Chạy trực tiếp qua file tĩnh
Chỉ cần tải thư mục này về máy, click đúp trực tiếp vào file **`index.html`** để mở ứng dụng trên bất kỳ trình duyệt nào.
*(Lưu ý: Một số trình duyệt có thể chặn tính năng sao chép ảnh PNG/SVG vào clipboard vì lý do bảo mật khi chạy qua giao thức `file://`)*

### Cách 2: Chạy qua Local Server (Khuyên dùng)
Để các tính năng sao chép ảnh hoạt động bảo mật và mượt mà nhất, hãy chạy qua một máy chủ tĩnh đơn giản.
Mở Terminal tại thư mục dự án và chạy:
```bash
python3 -m http.server 8000
```
Sau đó truy cập địa chỉ: **[http://localhost:8000](http://localhost:8000)** trên trình duyệt.

---

## 📝 Giấy phép
Dự án được phân phối tự do nhằm hỗ trợ các nhà nghiên cứu, sinh viên và giáo viên soạn thảo tài liệu học thuật chuyên nghiệp một cách nhanh chóng nhất.
