/* =========================================================================
 * VỤ ÁN 6 — ĐÊM TRƯỚC LỄ HỘI HÓA TRANG (KHÁCH SẠN MẶT NẠ)
 * Phỏng theo マスカレード・ホテル (Masquerade Hotel, 2011) — Series Nitta Kosuke
 * Lời thoại & cách dàn dựng manh mối được viết mới cho game; các mảnh ghép
 * tại khách sạn Cortesia Tokyo được cô đọng thành một hồ sơ điều tra thống nhất.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'masquerade-hotel',
  order: 6,
  title: 'Khách Sạn Mặt Nạ',
  original: 'マスカレード・ホテル · 2011 · Series Nitta Kosuke',
  kanji: '仮',
  theme: { a: '#1f1924', b: '#6b2d5c', accent: '#e9c46a' },
  difficulty: 4,
  par: 30,
  tagline: 'Mỗi vị khách bước qua sảnh đều đeo một chiếc mặt nạ. Nhiệm vụ của lễ tân là bảo vệ chiếc mặt nạ đó — còn nhiệm vụ của cảnh sát là lột nó ra.',
  playerRole: 'Bạn là thanh tra Nitta Kosuke thuộc Sở Cảnh sát Tokyo, đang nằm vùng trong vai nhân viên lễ tân tại khách sạn hạng sang Cortesia Tokyo.',
  partner: {
    name: 'Yamagishi Naomi',
    title: 'Nhân viên lễ tân kỳ cựu — người hướng dẫn của Nitta tại Cortesia Tokyo',
    avatar: '山',
    color: '#6b2d5c'
  },
  briefing: [
    'Ba vụ án mạng liên tiếp xảy ra ở Tokyo mà giữa các nạn nhân không hề có mối liên hệ rõ ràng. Điểm chung duy nhất: tại mỗi hiện trường đều để lại một dãy số mã hóa tọa độ nơi xảy ra vụ án tiếp theo.',
    'Giải mã mảnh giấy ở vụ thứ ba, cảnh sát xác định mục tiêu thứ tư nằm ngay trong khách sạn năm sao Cortesia Tokyo vào đêm giao thừa. Thanh tra Nitta Kosuke được cài vào quầy lễ tân dưới sự kèm cặp nghiêm khắc của nữ lễ tân trưởng ca Yamagishi Naomi.',
    'Nhưng tối nay, một vị khách VIP — nam diễn viên kiêm đạo diễn sân khấu Kurihara Kenji — lại gục chết trong phòng Suite 1204 vì sốc phản vệ do độc tố ong bắp cầy tiêm qua đầu kim cực nhỏ trên nút bấm chuông cửa nội bộ. Hiện trường cũng xuất hiện một mảnh giấy ghi tọa độ tiếp theo.',
    'Yamagishi nói khẽ với bạn sau quầy lễ tân: “Ở khách sạn này, ai cũng có lý do để nói dối. Nhưng một vị khách thật sự và một kẻ đóng kịch luôn khác nhau ở những thói quen nhỏ nhất.”'
  ],
  clues: {
    c_suite_body: { title: 'Hiện trường phòng Suite 1204', icon: '🛎️', type: 'evidence',
      desc: 'Kurihara Kenji (44 tuổi) tử vong ngay sau ngưỡng cửa phòng 1204 lúc khoảng 21:00. Ngón trỏ tay phải có vết kim đâm siêu nhỏ chứa nọc độc gây sốc phản vệ cấp tính.' },
    c_chime_needle: { title: 'Cơ cấu kim độc trên nút chuông', icon: '📌', type: 'evidence',
      desc: 'Một đầu kim lò xo siêu mảnh được gắn ngụy trang vào bảng nút bấm “Không làm phiền / Gọi phục vụ” ngay cạnh cửa bên trong phòng 1204. Chỉ người từng vào trong phòng trước đó mới lắp được.' },
    c_cipher_note: { title: 'Mảnh giấy mật mã thứ tư', icon: '🔢', type: 'evidence',
      desc: 'Trong túi áo nạn nhân có mảnh giấy in dãy số tọa độ giống hệt ba vụ án liên hoàn trước đó. Tuy nhiên, loại giấy in nhiệt này lại lấy từ máy fax ở trung tâm dịch vụ doanh nhân ngay trong khách sạn.' },
    c_serial_pattern: { title: 'Hồ sơ 3 vụ án liên hoàn trước', icon: '📁', type: 'evidence',
      desc: 'Ở cả ba vụ trước, hung thủ đều dùng giấy in chuyên dụng mang từ bên ngoài và cắt mép bằng dao rọc giấy cỡ lớn — không vụ nào in trực tiếp tại hiện trường như vụ ở phòng 1204.' },
    c_blind_woman: { title: 'Nữ khách khiếm thị ở phòng 1206', icon: '🕶️', type: 'testimony',
      desc: 'Bà Kataoka Yoko (phòng 1206, đối diện chéo 1204) đeo kính đen, chống gậy trắng, khai rằng mình bị mù hoàn toàn nên không nhìn thấy ai ra vào phòng 1204 tối đó.' },
    c_welcome_card: { title: 'Tấm thiệp chào mừng viết tay', icon: '✉️', type: 'evidence',
      desc: 'Yamagishi nhận xét: trên bàn phòng 1206, tấm thiệp chào mừng chữ viết tay thông thường (không phải chữ nổi Braille) đã được mở ra và đặt ngay ngắn cạnh lọ hoa theo đúng chiều đọc.' },
    c_buffet_gloves: { title: 'Quan sát ở quầy buffet tối', icon: '🍽️', type: 'testimony',
      desc: 'Nhân viên nhà hàng nhớ lại: bà khách phòng 1206 nói cần người dẫn đường, nhưng khi nhân viên quay đi một giây, bà lại tự tránh được chiếc xe đẩy thức ăn vừa dừng đột ngột mà không chạm gậy vào.' },
    c_wedding_list: { title: 'Danh sách khách mời tiệc cưới sảnh lớn', icon: '💒', type: 'evidence',
      desc: 'Cũng trong tối đó tại khách sạn có đám cưới của bác sĩ Morimoto. Một vị khách tên Takayama đã yêu cầu đổi chỗ ngồi vào phút chót để ngồi gần cửa ra thang máy lên tầng 12.' },
    c_takayama_alibi: { title: 'Camera hành lang thang máy', icon: '📹', type: 'evidence',
      desc: 'Camera ghi nhận ông Takayama chỉ lên tầng 12 đúng 3 phút lúc 20:30 để chụp lén hành lang phòng ông Kurihara rồi xuống ngay — ông ta là phóng viên tạp chí lá cải đang săn tin ngoại tình, không vào phòng 1204.' },
    c_cleaning_cart: { title: 'Thẻ từ buồng phòng bị mượn', icon: '🧹', type: 'testimony',
      desc: 'Nhân viên dọn phòng tầng 12 khai: lúc 19:40, khi xe đẩy dọn phòng dựng trước phòng 1206, bà khách khiếm thị đã làm đổ khay tách trà ngoài hành lang khiến nhân viên phải cúi xuống nhặt giúp suốt hai phút.' },
    c_robe_button: { title: 'Khuy áo choàng tắm đặc biệt', icon: '🧥', type: 'evidence',
      desc: 'Yamagishi phát hiện: bà khách phòng 1206 gọi lễ tân báo “áo choàng tắm bị đứt khuy màu xanh đen” ngay khi vừa nhận phòng mà chưa bật đèn phòng tắm.' },
    c_actress_past: { title: 'Vụ tai nạn sân khấu 3 năm trước', icon: '🎭', type: 'evidence',
      desc: 'Ba năm trước, nữ diễn viên kịch Nagakura Hiroko bị ngã chấn thương cột sống trong buổi tổng duyệt của đạo diễn Kurihara Kenji. Kurihara đã đổ lỗi cho cô và xóa tên cô khỏi giới sân khấu.' },
    c_hospital_allergy: { title: 'Hồ sơ dị ứng của nạn nhân', icon: '💉', type: 'evidence',
      desc: 'Chỉ những thành viên nòng cốt từng lưu diễn vùng núi cùng đoàn kịch của Kurihara ba năm trước mới biết ông ta bị dị ứng nặng với nọc ong bắp cầy.' },

    i_copycat_murder: { title: 'Vụ án ngụy trang thành giết người hàng loạt', icon: '🧩', type: 'insight',
      desc: 'Mảnh giấy tọa độ ở phòng 1204 được in vội tại khách sạn, khác hẳn quy chuẩn của 3 vụ trước. Hung thủ đã lợi dụng tin đồn về kẻ giết người liên hoàn để che giấu một vụ trả thù cá nhân nhắm riêng vào Kurihara.' },
    i_fake_blindness: { title: 'Chiếc mặt nạ của vị khách khiếm thị', icon: '🧩', type: 'insight',
      desc: 'Từ việc đọc thiệp chữ thường, tránh xe đẩy cho đến nhận biết màu khuy áo trong bóng tối: vị khách phòng 1206 hoàn toàn không bị mù. Đôi kính đen và cây gậy trắng chỉ là lớp hóa trang.' },
    i_master_key_theft: { title: 'Hai phút đánh cắp thẻ vạn năng', icon: '🧩', type: 'insight',
      desc: 'Màn kịch làm đổ khay trà lúc 19:40 trước phòng 1206 được dàn dựng để đánh lạc hướng nhân viên buồng phòng, tạo cơ hội lấy thẻ từ mở cửa phòng 1204 và gắn kim độc.' },
    i_hiroko_identity: { title: 'Người đứng sau tên Kataoka Yoko', icon: '🧩', type: 'insight',
      desc: 'Kẻ giả mù ở phòng 1206 chính là cựu diễn viên Nagakura Hiroko — người vừa có kỹ năng hóa trang sân khấu, vừa biết rõ chứng dị ứng nọc ong của đạo diễn Kurihara để trả thù cho sự nghiệp bị hủy hoại.' }
  },
  locations: [
    { id: 'suite1204', name: 'Phòng Suite 1204 (Hiện trường)', icon: '🚪',
      desc: 'Căn phòng hạng sang trên tầng 12 của khách sạn Cortesia Tokyo.',
      points: [
        { id: 'p_body_1204', name: 'Khám nghiệm thi thể Kurihara', clue: 'c_suite_body',
          text: 'Nạn nhân gục ngay gần cửa ra vào. Pháp y chỉ vào chấm đỏ nhỏ xíu ở đầu ngón trỏ: “Sốc phản vệ cấp tính do độc tố tiêm trực tiếp.”' },
        { id: 'p_switch', name: 'Bảng điều khiển điện cạnh cửa', clue: 'c_chime_needle',
          text: 'Tháo mặt ốp nút bấm nội bộ, bạn phát hiện một cơ cấu lò xo giữ đầu kim siêu nhỏ tẩm độc.' },
        { id: 'p_pocket', name: 'Mảnh giấy trong túi áo khoác', clue: 'c_cipher_note',
          text: 'Mảnh giấy in dãy số mật mã. Nhưng khi sờ chất giấy, Nitta nhíu mày: đây là giấy in nhiệt lấy từ máy fax của chính khách sạn.' }
      ] },
    { id: 'lobby', name: 'Quầy Lễ Tân & Nhà Hàng Cortesia', icon: '🏨',
      desc: 'Nơi Yamagishi Naomi quan sát từng cử chỉ nhỏ nhất của mọi vị khách.',
      points: [
        { id: 'p_yamagishi_note', name: 'Trao đổi với Yamagishi về phòng 1206', clue: 'c_welcome_card',
          text: 'Yamagishi nói nhỏ: “Khi mang hành lý vào phòng 1206 cho bà Kataoka, tôi thấy bà ấy mở tấm thiệp chào mừng viết chữ thường ra xem rồi đặt ngay ngắn lên bàn.”' },
        { id: 'p_robe_call', name: 'Nhật ký cuộc gọi bàn lễ tân', clue: 'c_robe_button',
          text: 'Yamagishi mở sổ trực: “Vừa nhận phòng được hai phút, bà Kataoka đã gọi báo chiếc áo choàng tắm bị sứt chiếc khuy màu xanh đen — dù một người khiếm thị hoàn toàn không thể phân biệt màu sắc đó.”' },
        { id: 'p_buffet', name: 'Hỏi nhân viên phục vụ nhà hàng', clue: 'c_buffet_gloves',
          text: '“Bà khách đeo kính đen đi rất chậm, nhưng lúc xe đẩy súp nóng bất ngờ lùi lại, bà ấy tự nghiêng người né tránh trước cả khi nhân viên kịp lên tiếng cảnh báo.”' },
        { id: 'p_wedding', name: 'Kiểm tra danh sách tiệc cưới', clue: 'c_wedding_list',
          text: 'Một vị khách tên Takayama ở sảnh tiệc cưới liên tục hỏi giờ check-in của đạo diễn Kurihara.' }
      ] },
    { id: 'floor12', name: 'Hành Lang & Phòng Trực Tầng 12', icon: '🧹',
      desc: 'Khu vực thang máy VIP và phòng trực buồng phòng.',
      points: [
        { id: 'p_maid', name: 'Hỏi nhân viên dọn phòng tầng 12', clue: 'c_cleaning_cart',
          text: '“Khoảng 19:40, bà khách phòng 1206 bước ra vô tình gạt đổ khay ấm chén trên xe đẩy của cháu. Cháu cúi xuống thu dọn mảnh vỡ mất khoảng hai phút, thẻ từ tổng lúc đó vẫn để trên mặt xe.”' },
        { id: 'p_cctv', name: 'Trích xuất camera sảnh thang máy', clue: 'c_takayama_alibi',
          text: 'Ông Takayama bước ra thang máy lúc 20:30, giơ máy ảnh chụp nhanh biển số phòng 1204 từ xa rồi lập tức quay vào thang máy đi xuống.' }
      ] },
    { id: 'hq_desk', name: 'Tổ Chuyên Án Đặt Tại Phòng Họp Ngầm', icon: '🗂️', requires: ['c_cipher_note'],
      desc: 'Nơi đội cảnh sát đối chiếu hồ sơ ba vụ án trước và lý lịch nạn nhân.',
      points: [
        { id: 'p_serial', name: 'So sánh mảnh giấy mật mã với 3 vụ trước', clue: 'c_serial_pattern',
          text: 'Giám định viên lắc đầu: “Ba vụ trước dùng giấy định lượng 120gsm cắt sẵn từ bên ngoài. Mảnh giấy ở phòng 1204 là hàng bắt chước được in ngay tại khách sạn tối nay!”' },
        { id: 'p_theater', name: 'Lục hồ sơ đoàn kịch của Kurihara', clue: 'c_actress_past',
          text: 'Ba năm trước, nữ diễn viên chính Nagakura Hiroko gặp tai nạn trên sân khấu do đạo cụ lỗi của Kurihara, nhưng ông ta lại đổ hết trách nhiệm cho cô.' },
        { id: 'p_medical', name: 'Hồ sơ y tế của nạn nhân', clue: 'c_hospital_allergy',
          text: 'Kurihara từng nhập viện cấp cứu vì ong bắp cầy đốt trong đợt tập huấn kín cùng đoàn kịch của Nagakura Hiroko.' }
      ] }
  ],
  suspects: [
    { id: 'kataoka', name: 'Kataoka Yoko', age: 36, avatar: '片', color: '#6b2d5c',
      role: 'Khách lưu trú phòng 1206 · tự nhận là người khiếm thị',
      bio: 'Đặt phòng đối diện chéo với phòng Suite 1204. Luôn đeo kính râm bản lớn, nói giọng trầm khàn và di chuyển cùng gậy trắng.',
      intro: 'Bà Kataoka ngồi ngay ngắn trên ghế bành, gương mặt hướng thẳng về phía trước. “Có chuyện gì ồn ào ngoài hành lang vậy, anh lễ tân?”',
      topics: [
        { id: 't_evening_k', label: 'Tối nay bà có nghe thấy gì ở phòng 1204 không?', clue: 'c_blind_woman', lines: [
          ['me', 'Khoảng từ 19:30 đến 21:00 tối nay, bà có nhận thấy điều gì bất thường quanh phòng 1204 không ạ?'],
          ['them', 'Đôi mắt tôi không nhìn thấy ánh sáng đã nhiều năm rồi. Tôi chỉ ở trong phòng nghe đài, ngoại trừ lúc bước ra hành lang vô ý làm đổ khay trà của cô dọn phòng.'] ] },
        { id: 't_kurihara_k', label: 'Bà có biết đạo diễn Kurihara Kenji không?', lines: [
          ['them', 'Kurihara… Kenji? Tôi không xem kịch nên không biết cái tên đó.'] ] }
      ],
      presents: {
        c_robe_button: { lines: [
          ['me', 'Khi vừa nhận phòng, bà đã gọi báo chiếc áo choàng tắm bị đứt khuy màu xanh đen.'],
          ['partner', 'Thưa quý khách, tất cả áo choàng của Cortesia đều màu trắng, chỉ riêng đường chỉ đính khuy dự phòng ở mặt trong mới có màu xanh đen. Một người không nhìn thấy sẽ không thể biết màu của nó.'],
          ['narr', 'Bàn tay đang đặt trên đầu gậy trắng của người phụ nữ khẽ siết chặt.'],
          ['them', '…Cô lễ tân này có đôi mắt tinh tường thật đấy.'] ] },
        c_actress_past: { lines: [
          ['me', 'Cô không phải Kataoka Yoko. Cô là nữ diễn viên kịch Nagakura Hiroko.'],
          ['them', 'Nagakura Hiroko đã chết trên sân khấu ba năm trước, vào cái ngày Kurihara đẩy hết tội lỗi xuống đầu cô ấy rồi.'] ] }
      },
      defaultPresent: 'Kataoka giữ gương mặt bất động sau cặp kính đen. “Tôi không nhìn thấy thứ anh đang cầm đâu.”'
    },
    { id: 'takayama', name: 'Takayama Daiki', age: 39, avatar: '高', color: '#457b9d',
      role: 'Khách dự tiệc cưới · phóng viên tạp chí tuần san',
      bio: 'Lẻn lên tầng 12 trong lúc diễn ra tiệc cưới dưới sảnh.',
      intro: 'Takayama giấu vội chiếc máy ảnh nhỏ vào túi áo vest. “Này, tôi là khách đàng hoàng nhé!”',
      topics: [
        { id: 't_floor12', label: 'Tại sao anh lên tầng 12 lúc 20:30?', lines: [
          ['them', 'Tôi nghe tin mật báo đạo diễn Kurihara hẹn gặp một nữ diễn viên trẻ ở phòng 1204 tối nay nên lên rình chụp ảnh độc quyền thôi!'],
          ['them', 'Chẳng thấy ai ra vào cả nên 3 phút sau tôi xuống sảnh luôn, camera thang máy ghi rõ mà!'] ] }
      ],
      presents: {
        c_takayama_alibi: { lines: [
          ['them', 'Đấy, tôi đã bảo tôi chỉ đứng từ xa chụp tấm biển phòng rồi rút lui ngay mà! Tôi làm báo lá cải chứ có đi giết người đâu!'] ] }
      },
      defaultPresent: 'Takayama xua tay. “Chuyện đó không nằm trong bài viết của tôi.”'
    }
  ],
  combos: [
    { a: 'c_cipher_note', b: 'c_serial_pattern', result: 'i_copycat_murder' },
    { a: 'c_welcome_card', b: 'c_robe_button', result: 'i_fake_blindness' },
    { a: 'c_buffet_gloves', b: 'c_robe_button', result: 'i_fake_blindness' },
    { a: 'i_fake_blindness', b: 'c_cleaning_cart', result: 'i_master_key_theft' },
    { a: 'i_master_key_theft', b: 'c_chime_needle', result: 'i_hiroko_identity' },
    { a: 'c_actress_past', b: 'c_hospital_allergy', result: 'i_hiroko_identity' }
  ],
  hints: [
    { until: 'i_copycat_murder', text: 'Hãy kiểm tra mảnh giấy mật mã ở phòng 1204 và đối chiếu nó với hồ sơ 3 vụ án liên hoàn trước đó tại Phòng họp ngầm.' },
    { until: 'i_fake_blindness', text: 'Hãy hỏi Yamagishi ở quầy lễ tân về những chi tiết nhỏ bất thường của vị khách khiếm thị phòng 1206.' },
    { until: 'i_master_key_theft', text: 'Nếu vị khách phòng 1206 không bị mù, tại sao bà ta lại làm đổ khay trà trên xe đẩy buồng phòng lúc 19:40?' },
    { until: 'i_hiroko_identity', text: 'Kết hợp hồ sơ vụ tai nạn sân khấu 3 năm trước với hồ sơ dị ứng nọc ong của nạn nhân để xác định danh tính thật của hung thủ.' }
  ],
  finalHint: 'Chiếc mặt nạ của vị khách phòng 1206 đã rơi xuống. Hãy đến Bảng suy luận cùng Yamagishi.',
  questions: [
    { id: 'q1', q: 'Bản chất thực sự của vụ án tại phòng Suite 1204 là gì?',
      options: ['Vụ án thứ tư của tên sát nhân hàng loạt', 'Một vụ trả thù cá nhân ngụy trang thành án mạng liên hoàn bằng mảnh giấy mật mã in tại khách sạn', 'Một vụ tai nạn do côn trùng đốt', 'Vụ tống tiền của phóng viên Takayama'],
      answer: 1, support: ['i_copycat_murder', 'c_cipher_note', 'c_serial_pattern'] },
    { id: 'q2', q: 'Chi tiết nào do lễ tân Yamagishi phát hiện đã vạch trần việc vị khách phòng 1206 giả mù?',
      options: ['Bà ta đi giày cao gót', 'Bà ta đọc thiệp chữ thường và gọi báo chính xác màu xanh đen của chiếc khuy áo choàng tắm ngay trong bóng tối', 'Bà ta ký tên bằng tay trái', 'Bà ta tự bấm nút thang máy'],
      answer: 1, support: ['i_fake_blindness', 'c_robe_button', 'c_welcome_card'] },
    { id: 'q3', q: 'Hung thủ đã đột nhập vào phòng 1204 để cài kim độc bằng cách nào?',
      options: ['Trèo qua ban công tầng 12', 'Cố ý làm đổ khay trà ngoài hành lang lúc 19:40 để lấy trộm thẻ từ vạn năng trên xe đẩy buồng phòng', 'Mua chuộc nhân viên bảo vệ', 'Dùng chìa khóa cơ tự chế'],
      answer: 1, support: ['i_master_key_theft', 'c_cleaning_cart', 'c_chime_needle'] },
    { id: 'q4', q: 'Danh tính thật và động cơ của “Kataoka Yoko” là gì?',
      options: ['Vợ cũ của bác sĩ Morimoto', 'Nữ diễn viên Nagakura Hiroko — trả thù đạo diễn Kurihara vì đã đổ lỗi vụ tai nạn sân khấu 3 năm trước và hủy hoại sự nghiệp của cô', 'Đối thủ kinh doanh của khách sạn Cortesia', 'Một sát thủ chuyên nghiệp được thuê'],
      answer: 1, support: ['i_hiroko_identity', 'c_actress_past', 'c_hospital_allergy'] }
  ],
  truth: [
    'Nữ diễn viên kịch Nagakura Hiroko từng dành cả thanh xuân cho sân khấu, nhưng một tai nạn đạo cụ do sự tắc trách của đạo diễn Kurihara Kenji ba năm trước đã cướp đi khả năng biểu diễn của cô. Tệ hơn, Kurihara còn đổ hết lỗi cho cô trước truyền thông.',
    'Khi đọc báo về chuỗi án mạng để lại mật mã tọa độ ở Tokyo, Hiroko nảy ra kế hoạch mượn danh kẻ sát nhân hàng loạt để xóa dấu vết động cơ cá nhân. Cô hóa trang thành một phụ nữ khiếm thị dưới cái tên Kataoka Yoko và đặt phòng 1206 gần phòng của Kurihara tại khách sạn Cortesia.',
    'Tối hôm đó, cô giả vờ va vào xe đẩy buồng phòng để lấy cắp thẻ từ tổng trong hai phút, lẻn vào phòng 1204 gắn chiếc kim tẩm nọc ong bắp cầy — thứ độc tố mà cô biết rõ Kurihara bị dị ứng chí mạng — cùng mảnh giấy mật mã vừa in từ máy fax của khách sạn.',
    'Cô đã đánh lừa được ống kính camera và cả cảnh sát hình sự, nhưng lại không qua mắt được nữ lễ tân Yamagishi Naomi: bởi một vị khách khiếm thị thật sự sẽ không bao giờ biết được màu sắc của chiếc khuy dự phòng ẩn bên trong áo choàng tắm.'
  ],
  sourceNote: 'Phỏng theo tinh thần tiểu thuyết “Khách sạn Mặt nạ” (マスカレード・ホテル, 2011) của Higashino Keigo — mở đầu series kết hợp giữa thanh tra Nitta Kosuke và nữ lễ tân Yamagishi Naomi.'
});
