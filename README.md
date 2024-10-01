# Tên Dự Án

Mô tả ngắn gọn về dự án của bạn và mục đích của nó.

## Nội Dung

- [Giới thiệu](#giới-thiệu)
- [Cài đặt](#cài-đặt)
- [Sử dụng](#sử-dụng)
- [API](#api)
- [Đóng góp](#đóng-góp)
- [Giấy phép](#giấy-phép)

## Giới thiệu

Cung cấp thông tin chi tiết về dự án, bao gồm các tính năng chính và lý do tại sao nó hữu ích.

## Cài đặt

Hướng dẫn cách cài đặt dự án. Ví dụ:
bash
git clone https://github.com/username/repo.git
cd repo
npm install

## Sử dụng

Hướng dẫn cách sử dụng dự án. Cung cấp ví dụ mã nguồn nếu cần thiết.
javascript
import ProxyHubSdk from 'proxy-hub-sdk';
const sdk = new ProxyHubSdk('YOUR_API_KEY');
sdk.getProvinces().then(provinces => {
console.log(provinces);
});

## API

Mô tả các API có sẵn trong dự án, bao gồm các endpoint và cách sử dụng chúng.

### Lấy danh sách tỉnh

- **URL**: `/api/client/provinces`
- **Phương thức**: `GET`
- **Tham số**: 
  - `search_text` (tùy chọn): Từ khóa tìm kiếm.

### Mua khóa mới

- **URL**: `/api/client/key/buy`
- **Phương thức**: `POST`
- **Tham số**: 
  - `buyKeyDto`: Dữ liệu cần thiết để mua khóa.

## Đóng góp

Hướng dẫn cách đóng góp vào dự án, bao gồm quy trình gửi pull request.
# proxyhub.sdk
