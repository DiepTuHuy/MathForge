# MathForge - LaTeX to SVG/PNG Math Compiler

**MathForge** là một ứng dụng máy tính trực quan, hiện đại được phát triển để giúp các nhà nghiên cứu, nhà khoa học và lập trình viên biên dịch nhanh chóng các công thức toán từ mã LaTeX sang định dạng ảnh vector **SVG** (lossless) hoặc **PNG** (sắc nét) chất lượng cao để chèn vào các tài liệu thuyết trình, báo cáo nghiên cứu khoa học, tài liệu Word, hoặc slide PowerPoint.

---

## 🌟 Tính năng nổi bật

*   **Xem trước trực tiếp (Live Preview):** Tự động render mã LaTeX sang công thức toán học sắc nét ngay khi gõ bằng thư viện MathJax 3.
*   **Sao chép trực tiếp dưới dạng ảnh:**
    *   **Sao chép ảnh SVG (Vector):** Lưu blob dạng `image/svg+xml` trực tiếp vào clipboard, cho phép dán trực tiếp ảnh vector không bể vỡ vào các phần mềm đồ họa như Illustrator, Inkscape.
    *   **Sao chép ảnh PNG:** Tự động kết xuất đồ họa vector sang ảnh pixel dạng `image/png` với thuật toán siêu mẫu (4x supersampling), giúp dán ảnh sắc nét hoàn hảo vào MS Word, PowerPoint, Google Docs...
*   **Tải xuống file:** Hỗ trợ lưu trữ công thức về máy dưới dạng tệp tin `.svg` hoặc `.png` nhanh chóng.
*   **Thanh công cụ ký hiệu (Snippets):** Cung cấp các nút bấm nhập nhanh các ký hiệu phổ biến như phân số, căn thức, tích phân, ma trận, giới hạn, chữ Hy Lạp...
*   **Tự do tùy chỉnh:** Cho phép thay đổi tỷ lệ phóng to (scale), chế độ (inline/display), và bảng chọn màu công thức tùy biến.
*   **Thư viện lưu trữ cục bộ:** Lưu lại các công thức toán đã biên dịch vào bộ nhớ cục bộ (`localStorage`) của máy để tái sử dụng bất cứ lúc nào.

---

## 🛠️ Công nghệ sử dụng

*   **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6).
*   **Math Rendering Engine:** MathJax 3.
*   **Icons:** FontAwesome 6.
*   **Desktop App Wrapper:** Electron & Electron-packager.

---

## 🚀 Hướng dẫn cài đặt & phát triển

Nếu bạn muốn chạy ứng dụng ở chế độ nhà phát triển hoặc tự tay đóng gói ứng dụng:

### Yêu cầu hệ thống
*   Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 16 trở lên).

### Chạy ứng dụng trên môi trường Local
1.  Di chuyển vào thư mục dự án:
    ```bash
    cd math_compiler
    ```
2.  Cài đặt các gói phụ thuộc:
    ```bash
    npm install
    ```
3.  Khởi chạy ứng dụng Electron:
    ```bash
    npm start
    ```
    *(Hoặc bạn có thể dùng một local server để chạy file `index.html` trực tiếp trên trình duyệt, ví dụ: `python3 -m http.server 8000`)*

### Đóng gói ứng dụng Desktop (Build App)
Bạn có thể đóng gói ứng dụng thành file chạy cục bộ trên cả macOS (`.app`) và Windows (`.exe`) ngay từ terminal:

*   **Đóng gói cho macOS:**
    ```bash
    npm run package-mac
    ```
*   **Đóng gói cho Windows (.exe):**
    ```bash
    npm run package-win
    ```
*   **Đóng gói cả hai nền tảng:**
    ```bash
    npm run package-all
    ```
Sau khi chạy xong lệnh, thư mục `dist/` sẽ xuất hiện chứa các ứng dụng đã đóng gói.

---

## 📖 Hướng dẫn sử dụng app

1.  **Nhập công thức:** Gõ hoặc copy mã LaTeX của bạn vào khung soạn thảo ở bên trái. Bạn cũng có thể click vào các nút trên thanh công cụ để chèn nhanh công thức mẫu.
2.  **Tùy chỉnh màu sắc & kích thước:** Chọn các swatch màu có sẵn hoặc chọn màu tùy ý qua thanh chọn màu. Kéo thanh trượt Tỉ lệ để phóng to/thu nhỏ ảnh.
3.  **Thay đổi nền xem trước:** Click vào các nút ở góc phải khung xem trước để đổi màu nền (caro/tối/sáng) để kiểm tra độ tương phản của công thức trên các màu nền khác nhau.
4.  **Copy/Export:**
    *   Nhấn **Sao chép ảnh SVG** hoặc **Sao chép ảnh PNG** để lưu ảnh công thức vào clipboard rồi dùng phím `Ctrl + V` (hoặc `Cmd + V`) để dán trực tiếp vào phần mềm viết tài liệu.
    *   Nhấn **Tải xuống SVG** / **Tải xuống PNG** để lưu file về máy.
5.  **Lưu thư viện:** Nhấn **Lưu vào thư viện** để lưu trữ công thức lại, danh sách công thức đã lưu sẽ hiện ở phần dưới của giao diện ứng dụng.
