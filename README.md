# 🕵️ Hồ Sơ Higashino — Tuyển Tập Game Phá Án Trinh Thám Tương Tác (Port 4150)

**Hồ Sơ Higashino (`keigo-case-files`)** là game phá án trinh thám tương tác lấy cảm hứng từ 6 kiệt tác của nhà văn **Higashino Keigo**, nơi bạn vào vai điều tra viên sát cánh cùng **Phó giáo sư Vật lý Yukawa Manabu (Galileo)**, **Thanh tra Kaga Kyoichiro**, **Lão thanh tra Sasagaki Junzo** và **Nữ lễ tân Yamagishi Naomi**.

---

## 📚 Danh Sách 6 Hồ Sơ Vụ Án

1. **Hồ sơ #01 — Phía Sau Nghi Can X** (*容疑者Xの献身 · 2005 · Series Galileo*)
   - **Cộng sự**: Phó giáo sư Yukawa Manabu ("Galileo")
   - **Tâm điểm**: Một bằng chứng ngoại phạm hoàn hảo tối 10/3, một thiên tài toán học sống sát vách, và một bài toán hình học được ngụy trang thành đại số.
2. **Hồ sơ #02 — Sự Cứu Rỗi Của Thánh Nữ** (*聖女の救済 · 2008 · Series Galileo*)
   - **Cộng sự**: Phó giáo sư Yukawa Manabu ("Galileo")
   - **Tâm điểm**: Người vợ ở cách xa cả ngàn cây số tại Sapporo khi chồng gục chết bên cốc cà phê chứa thạch tín — một "nghiệm ảo" được chuẩn bị suốt 365 ngày.
3. **Hồ sơ #03 — Ác Ý** (*悪意 · 1996 · Series Kaga Kyoichiro*)
   - **Cộng sự**: Thanh tra Kaga Kyoichiro
   - **Tâm điểm**: Hung thủ sớm nhận tội sau khi vỡ ngoại phạm, nhưng cuộc điều tra thực sự chỉ mới bắt đầu: Không phải *"Ai giết?"* mà là *"Vì sao lại muốn giết cả danh tiếng của nạn nhân sau khi chết?"*.
4. **Hồ sơ #04 — Người Mới Đến Ở Ningyocho** (*新参者 · 2009 · Series Kaga Kyoichiro*)
   - **Cộng sự**: Thanh tra Kaga Kyoichiro
   - **Tâm điểm**: Một chiếc bánh nướng *ningyo-yaki* nhân mù tạt wasabi, một chiếc kéo bếp mua thừa, và những lời nói dối hiền lành giữa phố cổ Tokyo.
5. **Hồ sơ #05 — Bạch Dạ Hành** (*白夜行 · 1999 · Thanh tra Sasagaki Junzo*)
   - **Cộng sự**: Thanh tra Sasagaki Junzo
   - **Tâm điểm**: Vụ án mạng trong căn phòng khóa kín tại tòa nhà bỏ hoang ở Osaka năm 1973 và mối quan hệ cộng sinh kéo dài 15 năm giữa hai linh hồn bước đi dưới "mặt trời ban đêm".
6. **Hồ sơ #06 — Khách Sạn Mặt Nạ** (*マスカレード・ホテル · 2011 · Series Nitta Kosuke*)
   - **Cộng sự**: Nữ lễ tân Yamagishi Naomi
   - **Tâm điểm**: Một vụ án ngụy trang thành giết người hàng loạt bằng mật mã tọa độ ngay trong khách sạn 5 sao Cortesia Tokyo, bị vạch trần từ chiếc khuy áo choàng tắm màu xanh đen.

---

## 🎮 Cơ Chế Gameplay (5 Bước Phá Án)

1. **📋 Hồ Sơ & Gợi Ý Cộng Sự**: Đọc tóm tắt vụ án và tham vấn cộng sự bất cứ lúc nào khi gặp điểm mù suy luận.
2. **🗺️ Khám Nghiệm Hiện Trường**: Khảo sát các địa điểm và điểm thu thập chứng cứ (`🔎 Vật chứng`). Một số địa điểm và điểm khám xét ẩn sẽ tự động mở khóa khi bạn có đủ manh mối tiền đề.
3. **🗣️ Thẩm Vấn & Đưa Bằng Chứng Đối Chất**: Đặt câu hỏi theo chủ đề (`🗣️ Lời khai`) và **đưa trực tiếp vật chứng / suy luận trong sổ tay** ra trước mặt nghi phạm để bẻ gãy lời nói dối.
4. **🧩 Bàn Kết Nối Suy Luận (Logic Synthesis)**: Chọn 2 manh mối có quan hệ nhân quả hoặc mâu thuẫn trên bàn ghép để mở khóa **Suy luận mới (`🧩 Insight`)**.
5. **⚖️ Bảng Suy Luận & Chân Tướng**: Trả lời bộ câu hỏi trọng tâm kèm **chứng cứ bảo chứng từ sổ tay** để đóng dấu khép hồ sơ (xếp hạng `S / A / B`) và mở khóa chương **Chân Tướng Sự Thật**.

---

## 🚀 Khởi Chạy & Kiểm Thử

```bash
# Kiểm tra tính toàn vẹn đồ thị manh mối & độ khả giải 100% của cả 6 vụ án
npm test

# Khởi chạy máy chủ tại http://localhost:4150
npm start
```
