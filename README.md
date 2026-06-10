# MathForge - LaTeX to SVG/PNG Math Compiler

**MathForge** là một ứng dụng web gọn nhẹ, trực quan giúp bạn biên dịch nhanh chóng các công thức toán từ mã LaTeX sang định dạng ảnh vector **SVG** hoặc **PNG** chất lượng cao để chèn vào các tài liệu thuyết trình, báo cáo nghiên cứu khoa học, tài liệu Word, hoặc slide PowerPoint.

Vì ứng dụng được xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần (không cần bất kỳ thư viện phía máy chủ nào), bạn có thể chạy ứng dụng này trực tiếp trên trình duyệt của mình mà không cần cài đặt phần mềm cồng kềnh.

---

## 🌟 Tính năng nổi bật

*   **Xem trước trực tiếp (Live Preview):** Tự động render mã LaTeX sang công thức toán học sắc nét ngay khi gõ bằng thư viện MathJax 3.
*   **Tương thích hoàn hảo với Google Docs & MS Word:**
    *   **Sao chép LaTeX (Docs/Word):** Tự động bọc mã LaTeX trong cặp ký tự `$$...$$` để dán trực tiếp vào Google Docs, sẵn sàng biên dịch hàng loạt thông qua add-on *Auto-LaTeX Equations*.
    *   **Sao chép MathML (Word):** Tạo và sao chép mã XML MathML gốc của công thức. Khi dán vào Microsoft Word, nó sẽ tự động được nhận dạng và chuyển đổi thành đối tượng **Office Equation** gốc, cho phép chỉnh sửa nội dung trực tiếp trên Word.
*   **Sao chép trực tiếp dưới dạng ảnh:**
    *   **Sao chép ảnh SVG (Vector):** Lưu blob dạng `image/svg+xml` trực tiếp vào clipboard, cho phép dán trực tiếp ảnh vector không bể vỡ vào các phần mềm đồ họa như Illustrator, Inkscape, Figma.
    *   **Sao chép ảnh PNG:** Tự động kết xuất đồ họa vector sang ảnh pixel dạng `image/png` với thuật toán siêu mẫu (4x supersampling), giúp dán ảnh sắc nét hoàn hảo vào các trình soạn thảo văn phòng như Google Docs, MS Word, PowerPoint...
*   **Tải xuống file:** Hỗ trợ lưu trữ công thức về máy dưới dạng tệp tin `.svg` hoặc `.png` nhanh chóng.
*   **Thanh công cụ ký hiệu (Snippets):** Cung cấp các nút bấm nhập nhanh các ký hiệu phổ biến như phân số, căn thức, tích phân, ma trận, giới hạn, chữ Hy Lạp...
*   **Tự do tùy chỉnh:** Cho phép thay đổi tỷ lệ phóng to (scale), chế độ (inline/display), và bảng chọn màu công thức tùy biến.
*   **Thư viện lưu trữ cục bộ:** Lưu lại các công thức toán đã biên dịch vào bộ nhớ cục bộ (`localStorage`) của máy để tái sử dụng bất cứ lúc nào.


---

## 🚀 Hướng dẫn khởi chạy ứng dụng

Bạn có thể chạy ứng dụng bằng 3 cách cực kỳ đơn giản sau:

### Cách 1: Chạy trực tiếp (Không cần cài đặt)
Chỉ cần tải thư mục này về máy, click đúp trực tiếp vào file **`index.html`** để mở ứng dụng trên bất kỳ trình duyệt nào (Chrome, Safari, Edge, Firefox).

### Cách 2: Chạy qua Local Server (Khuyên dùng)
Để các tính năng sao chép ảnh hoạt động mượt mà và bảo mật nhất, bạn nên chạy ứng dụng thông qua một máy chủ local gọn nhẹ. 
Mở Terminal tại thư mục dự án và chạy lệnh:
```bash
python3 -m http.server 8000
```
Sau đó truy cập địa chỉ: **[http://localhost:8000](http://localhost:8000)** trên trình duyệt.

### Cách 3: Chạy trực tuyến qua GitHub Pages (Miễn phí & Tiện lợi)
Bạn có thể biến repository này thành một trang web online chạy 24/7 chỉ với 2 click chuột:
1.  Truy cập vào Repository của bạn trên GitHub.
2.  Chọn **Settings** -> **Pages** (ở menu bên trái).
3.  Tại mục **Build and deployment** -> **Branch**, chọn nhánh **`main`** và thư mục **`/ (root)`**, sau đó nhấn **Save**.
4.  Chờ khoảng 1-2 phút, GitHub sẽ cung cấp cho bạn một đường link trực tuyến công khai (ví dụ: `https://<ten-user>.github.io/MathForge/`) để sử dụng mọi lúc mọi nơi.
