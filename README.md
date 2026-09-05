# MaikaDex Client

*(Bản tiếng Việt ở bên dưới - Vietnamese version below)*

MaikaDex Client is a web application for reading manga, built on top of the [MangaDex API](https://api.mangadex.org/docs/). This client allows users to search, filter, and read manga seamlessly with a modern and intuitive user interface.

## Table of Contents
- [Getting Started](#getting-started)
- [Usage Instructions](#usage-instructions)
- [MangaDex API Terms of Use](#mangadex-api-terms-of-use)
- [Tiếng Việt](#tiếng-việt)

## Getting Started

### Prerequisites
- Node.js (v18.0 or newer recommended)
- npm or yarn

### Installation
1. Clone the repository and navigate to the client folder:
   ```bash
   cd maikaDexClient
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage Instructions
- **Home Page**: Browse the latest updates and featured manga.
- **Advanced Search**: Use the advanced search feature to filter manga by tags (Genres, Themes, Formats), publication demographic, status, and content rating. 
- **Reading**: Click on any manga to view its details. From the chapter list, you can toggle between different translated languages (e.g., English and Vietnamese) and start reading. Use the `Next` and `Prev` buttons to navigate between chapters.
- **Authentication**: You can register and log in to manage your profile and preferences.

## MangaDex API Terms of Use

This application acts as a third-party client and strictly utilizes the public **MangaDex API**. By using or modifying this project, you must adhere to MangaDex's Acceptable Use Policy:

1. **Non-Commercial Use**: This application is open-source and must remain completely free. You **cannot** use the MangaDex API for commercial purposes, monetize the app, run ads, or lock features behind a paywall.
2. **Rate Limiting**: Do not abuse the API. Ensure your requests stay within the allowed rate limits (typically 5 requests per second). Do not aggressively scrape or attempt to download the entire database.
3. **Attribution**: The source of the content (MangaDex) and the scanlation groups who translated the manga must be properly credited in the UI.
4. **Content Rules**: Adhere to MangaDex's content policies. Be aware that filtering by `contentRating` (safe, suggestive, erotica, pornographic) is required by the API to fetch specific types of manga.
5. **No Direct Scraping**: Always use the official REST API endpoints. Do not scrape HTML pages from the MangaDex website.

For full terms and conditions, please refer to the official [MangaDex API Documentation](https://api.mangadex.org/docs/).

---

# Tiếng Việt

MaikaDex Client là một ứng dụng web đọc truyện tranh được xây dựng dựa trên [API của MangaDex](https://api.mangadex.org/docs/). Ứng dụng cung cấp giao diện hiện đại, giúp người dùng dễ dàng tìm kiếm, lọc và đọc truyện tranh một cách mượt mà.

## Bắt đầu nhanh

### Yêu cầu hệ thống
- Node.js (Khuyên dùng bản v18.0 trở lên)
- npm hoặc yarn

### Cài đặt
1. Mở terminal và di chuyển vào thư mục client:
   ```bash
   cd maikaDexClient
   ```
2. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```

### Chạy ứng dụng
Để khởi động server ở chế độ phát triển:
```bash
npm run dev
```
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn để trải nghiệm.

## Hướng dẫn sử dụng
- **Trang chủ**: Xem các truyện mới cập nhật và truyện đề xuất.
- **Tìm kiếm nâng cao (Advanced Search)**: Sử dụng bộ lọc đa dạng để tìm truyện theo thể loại (Genres), chủ đề (Themes), định dạng (Formats), đối tượng độc giả, trạng thái xuất bản và giới hạn độ tuổi (Content Rating).
- **Đọc truyện**: Bấm vào một truyện bất kỳ để xem chi tiết và mô tả. Trong danh sách chương, bạn có thể dễ dàng chuyển đổi qua lại giữa các ngôn ngữ dịch (ví dụ: Tiếng Anh và Tiếng Việt). Sử dụng nút `Trước` và `Sau` để chuyển chương khi đang đọc.
- **Tài khoản**: Đăng ký và đăng nhập để lưu trữ thông tin cá nhân.

## Điều khoản sử dụng API của MangaDex

Ứng dụng này là một client bên thứ ba và sử dụng hoàn toàn **MangaDex API** công khai. Khi sử dụng mã nguồn này, **bắt buộc** phải tuân thủ các quy định của MangaDex:

1. **Phi thương mại (Non-Commercial)**: Ứng dụng này phải hoàn toàn miễn phí. Bạn **không được phép** sử dụng API của MangaDex để kiếm tiền, chạy quảng cáo, thương mại hóa, hay khóa tính năng để bắt người dùng trả phí (paywall).
2. **Giới hạn truy cập (Rate Limiting)**: Không được lạm dụng API. Đảm bảo số lượng request luôn nằm trong giới hạn cho phép (thường là 5 requests/giây). Tuyệt đối không được cào dữ liệu (scrape) một cách ồ ạt hoặc cố gắng tải toàn bộ cơ sở dữ liệu của MangaDex về máy.
3. **Ghi rõ nguồn gốc (Attribution)**: Giao diện ứng dụng phải hiển thị rõ nguồn truyện lấy từ MangaDex cũng như tôn trọng công sức và hiển thị tên của các nhóm dịch (Scanlation Groups).
4. **Quy định về nội dung**: Tuân thủ chính sách nội dung của MangaDex. Hãy lưu ý API bắt buộc phải truyền tham số giới hạn độ tuổi (`contentRating`) nếu muốn lấy các truyện có nhãn nhạy cảm/18+.
5. **Tuyệt đối không cào HTML**: Chỉ được phép sử dụng các endpoint REST API chính thức. Không được cào (scrape) giao diện web của MangaDex.

Để đọc chi tiết toàn bộ các điều khoản, vui lòng xem tại [Tài liệu API chính thức của MangaDex](https://api.mangadex.org/docs/).
