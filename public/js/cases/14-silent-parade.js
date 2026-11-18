/* =========================================================================
 * VỤ ÁN 14 — CUỘC DIỄU HÀNH THẦM LẶNG
 * Phỏng theo 沈黙のパレード (Chinmoku no Parēdo, 2018) — Higashino Keigo
 * Series Galileo — Yukawa Manabu
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'silent-parade',
  order: 14,
  collection: 'keigo',
  author: 'Higashino Keigo',
  title: 'Cuộc Diễu Hành Thầm Lặng',
  original: '沈黙のパレード · 2018 · Series Galileo',
  kanji: '黙',
  theme: { a: '#1e132c', b: '#5b21b6', accent: '#c084fc' },
  difficulty: 5,
  par: 38,
  tagline: 'Khi kẻ sát nhân thoát tội nhờ quyền giữ im lặng, cả một khu phố đã đáp trả bằng sự im lặng còn đáng sợ hơn.',
  playerRole: 'Bạn là thanh tra Kusanagi Shunpei — người bị ám ảnh bởi tên tội phạm từng thoát án 20 năm trước, nay tái hợp cùng Giáo sư Yukawa Manabu tại phố Kikuno.',
  partner: {
    name: 'Yukawa Manabu',
    title: 'Giáo sư Vật lý — “Galileo”',
    avatar: '湯',
    color: '#5b21b6'
  },
  briefing: [
    'Ba năm trước, nữ ca sĩ trẻ tài năng Namiki Saori — niềm tự hào của quán ăn gia đình “Namiki-ya” và cả khu phố Kikuno (Tokyo) — đột ngột mất tích. Vài ngày trước, hài cốt bị đốt cháy của cô được tìm thấy trong căn nhà hoang ở tỉnh Shizuoka.',
    'Nghi phạm số một là Hasunuma Kanichi — kẻ từng sát hại một bé gái 20 năm trước nhưng được tuyên trắng án vì kiên quyết sử dụng “Quyền giữ im lặng” tại tòa và cảnh sát không đủ vật chứng trực tiếp. Lần này cũng vậy, Hasunuma giữ im lặng tuyệt đối, được thả tự do rồi ngang nhiên đến quán Namiki-ya cười nhạo và đòi tiền bồi thường danh dự.',
    'Thế nhưng đúng vào ngày diễn ra Lễ hội Diễu hành Hóa trang đường phố Kikuno, Hasunuma được phát hiện chết ngạt trong nhà kho chứa đạo cụ khóa kín từ bên ngoài. Khám nghiệm tử thi cho thấy hắn chết do thiếu oxy nhưng không hề có khí CO hay bất kỳ chất độc hóa học nào trong máu.',
    'Đáng sợ hơn, cả 6 người thân và hàng xóm yêu thương Saori nhất đều có bằng chứng ngoại phạm nối tiếp nhau hoàn hảo giữa hàng nghìn người dự lễ hội — và khi bị thẩm vấn, tất cả họ đều mỉm cười sử dụng “Quyền giữ im lặng”!'
  ],
  clues: {
    c_autopsy_anoxia: { title: 'Báo cáo pháp y: Ngạt thở không độc chất', icon: '🫁', type: 'evidence',
      desc: 'Hasunuma Kanichi uống rượu sake pha thuốc ngủ liều mạnh rồi tử vong trong khi ngủ do thiếu oxy cấp tính (anoxia). Xét nghiệm máu và phổi hoàn toàn KHÔNG có khí CO, xyanua hay bất kỳ hợp chất độc hại nào.' },
    c_warehouse_seal: { title: 'Nhà kho dán băng keo kín & Ống thông gió đóng băng', icon: '🏚️', type: 'evidence',
      desc: 'Yukawa soi đèn UV quanh mép cửa sắt nhà kho: có dấu keo băng dính cách nhiệt vừa bị bóc đi từ bên ngoài. Trên tường cao có lỗ ống thông gió nối ra con hẻm đỗ xe hoa, viền kim loại bị lạnh cóng đến mức nứt lớp sơn.' },
    c_parade_ln2: { title: 'Bình Nitơ lỏng (LN2) cạn sạch trên xe hoa lễ hội', icon: '❄️', type: 'evidence',
      desc: 'Xe hoa “Lâu Đài Băng Giá” của nhóm cư dân phố Kikuno trang bị 4 bình Nitơ lỏng công nghiệp để phun khói sương mù. Bình số 4 đã cạn rỗng hoàn toàn trước giờ diễu hành dù theo kịch bản chỉ cần 3 bình.' },
    c_relay_alibi: { title: 'Lịch trình ngoại phạm chéo của 6 cư dân Kikuno', icon: '⏱️', type: 'evidence',
      desc: 'Camera đường phố cho thấy ông chủ Namiki Yutaro, bạn trai Takagaki, bạn thân Tojima và nhà tài trợ Niikura đều chỉ vắng mặt đúng 5–10 phút ở các khung giờ lệch nhau. Không một ai đủ 40 phút trống để một mình gây án từ đầu đến cuối.' },
    c_mascot_swap: { title: 'Bộ đồ linh vật “Mèo Kikuno” trùm kín đầu', icon: '🎭', type: 'evidence',
      desc: 'Trong khoang thay đồ trên xe hoa có tới 3 chiếc áo thun thấm mồ hôi kích cỡ khác nhau bên cạnh bộ đồ Mascot “Mèo Kikuno” — chứng tỏ nhiều người đã thay phiên nhau chui vào bộ đồ linh vật để tạo ngoại phạm giả cho người kia rời xe!' },
    c_shizuoka_helper: { title: 'Lời khai của gã đồng phạm cũ với Hasunuma', icon: '🏚️', type: 'testimony',
      desc: 'Cảnh sát Shizuoka bắt được tên đồng phạm cũ của Hasunuma. Hắn khai một chi tiết chấn động: 3 năm trước Hasunuma chỉ được gọi tới phòng tập nhạc để NHẬN TIỀN PHI TANG XÁC, bởi khi Hasunuma tới nơi thì Saori ĐÃ CHẾT từ trước!' },
    c_blackmail_50m: { title: 'Cuộc gọi tống tiền 50 triệu yên của Hasunuma', icon: '💴', type: 'evidence',
      desc: 'Sau khi được thả tự do, Hasunuma không chỉ đến quán Namiki-ya quấy rối mà còn bí mật liên lạc với “hung thủ thật sự giết Saori 3 năm trước” để đòi 50 triệu yên tiền giữ im lặng.' },
    c_saori_guitar_sd: { title: 'Thẻ nhớ ghi âm giấu trong hộp đàn của Saori', icon: '🎸', type: 'evidence',
      desc: 'Dưới lớp nhung lót hộp đàn guitar kỷ vật của Saori mà Takagaki giữ lại, Yukawa tìm thấy chiếc thẻ nhớ máy ghi âm bỏ túi ghi lại buổi tối định mệnh 3 năm trước tại phòng tập nhạc của nhà tài trợ Niikura.' },
    c_rumi_recording: { title: 'Cuộc cãi vã chí mạng với bà Niikura Rumi', icon: '🎙️', type: 'evidence',
      desc: 'Đoạn ghi âm cho thấy vợ của nhà tài trợ là Niikura Rumi đã tới phòng tập, ghen tuông điên cuồng khi biết Saori mang thai (dù thực chất là con của Takagaki) và đẩy Saori đập đầu vào bệ đá tử vong! Chồng bà — Niikura Naoki — đã thuê Hasunuma phi tang xác để bảo vệ vợ!' },
    c_niikura_valve: { title: 'Dấu vân tay trên van xả bình Nitơ lỏng số 4', icon: '🧤', type: 'evidence',
      desc: 'Nhà tài trợ Niikura Naoki chính là người cung cấp bình Nitơ lỏng và đảm nhận khâu cuối cùng trong dây chuyền: mở van bơm khí Nitơ lỏng vào nhà kho để giết Hasunuma!' },

    i_ln2_asphyxia: { title: 'Mật thất ngạt khí bằng Nitơ lỏng (LN2)', icon: '🧩', type: 'insight',
      desc: 'Không khí tự nhiên vốn chứa 78% Nitơ. Khi bơm Nitơ lỏng từ xe hoa qua ống thông gió vào nhà kho dán kín, Nitơ hóa hơi đẩy sạch Oxy ra ngoài làm Hasunuma chết ngạt trong giấc ngủ. Khi mở cửa thông gió, khí Nitơ hòa vào khí quyển mà pháp y không thể tìm thấy bất kỳ độc chất lạ nào!' },
    i_silent_conspiracy: { title: 'Dây chuyền 6 mắt xích & Cuộc diễu hành thầm lặng', icon: '🧩', type: 'insight',
      desc: 'Cư dân phố Kikuno đã chia vụ mưu sát thành 6 công đoạn 5 phút (chuốc rượu ngủ, chở vào kho, dán băng keo, nối ống khí, xả van, thu dọn) và dùng bộ đồ Mascot để thế chỗ nhau trên xe hoa — để không ai nắm rõ toàn bộ vụ án và tất cả cùng dùng “Quyền giữ im lặng”.' },
    i_double_truth_betrayal: { title: 'Chân tướng kép: Niikura mượn tay tập thể để diệt khẩu', icon: '🧩', type: 'insight',
      desc: 'Gia đình Namiki cứ ngỡ đang cùng nhau trừng phạt kẻ giết Saori. Họ không ngờ nhà tài trợ Niikura Naoki tham gia và trực tiếp xả Nitơ lỏng giết Hasunuma là để BỊT MIỆNG kẻ đang tống tiền vợ chồng ông ta về cái chết thật sự của Saori 3 năm trước!' }
  },
  locations: [
    { id: 'warehouse', name: 'Nhà kho đạo cụ hẻm sau Kikuno', icon: '🏚️',
      desc: 'Nhà kho kín gió nằm sát điểm tập kết xe hoa — nơi phát hiện thi thể Hasunuma Kanichi.',
      points: [
        { id: 'p_body', name: 'Thi thể Hasunuma & Biên bản pháp y', clue: 'c_autopsy_anoxia',
          text: 'Bác sĩ pháp y lắc đầu: “Nạn nhân ngủ say do thuốc ngủ trong rượu rồi chết vì ngạt thở thiếu oxy. Nhưng máu và phổi hoàn toàn sạch, không có khí CO hay độc chất hóa học.”' },
        { id: 'p_seal', name: 'Khung cửa sắt & Lỗ thông gió trên tường', clue: 'c_warehouse_seal',
          text: 'Yukawa chỉ vào vệt băng keo quanh mép cửa và lỗ thông gió đóng tuyết trắng xóa: “Ai đó đã bịt kín căn phòng này như một buồng kín rồi bơm một luồng khí cực lạnh từ ngoài hẻm vào!”' },
        { id: 'p_shizuoka', name: 'Báo cáo khẩn từ Cảnh sát Shizuoka', clue: 'c_shizuoka_helper',
          text: 'Kusanagi nhận điện thoại từ đội điều tra: “Cái gì?! Gã đồng phạm khai 3 năm trước Hasunuma chỉ là kẻ nhận 5 triệu yên để đem xác Saori đi chôn, còn Saori đã chết trước khi Hasunuma tới?!”' }
      ] },
    { id: 'parade', name: 'Đoàn xe hoa Lễ hội Đường phố Kikuno', icon: '🎡',
      desc: 'Đoàn diễu hành hóa trang rực rỡ sắc màu dọc đại lộ chính của khu phố Kikuno.',
      points: [
        { id: 'p_ln2', name: 'Hệ thống phun sương lạnh trên xe hoa', clue: 'c_parade_ln2',
          text: 'Dưới gầm xe hoa “Lâu Đài Băng Giá” có 4 bình Nitơ lỏng (LN2). Bình số 4 đã cạn sạch áp suất kèm theo một đoạn ống dẫn cao su chịu nhiệt độ âm sâu.' },
        { id: 'p_alibi', name: 'Camera đường phố & Bảng phân công lễ hội', clue: 'c_relay_alibi',
          text: 'Đối chiếu thời gian: không một ai trong nhóm 6 người thân của Saori vắng mặt quá 10 phút. Mỗi người chỉ rời vị trí đúng vài phút nối tiếp nhau như một cuộc chạy tiếp sức!' },
        { id: 'p_mascot', name: 'Khoang thay đồ & Bộ Mascot “Mèo Kikuno”', clue: 'c_mascot_swap', requires: ['c_relay_alibi'],
          text: 'Bên trong xe hoa có 3 chiếc áo lót ướt đẫm mồ hôi với kích cỡ của Takagaki, ông Namiki và Tojima: họ đã luân phiên mặc bộ đồ linh vật vẫy tay trên xe để bọc lót ngoại phạm cho nhau!' },
        { id: 'p_valve', name: 'Kiểm tra van xả bình Nitơ lỏng số 4', clue: 'c_niikura_valve', requires: ['i_ln2_asphyxia'],
          text: 'Nhà tài trợ Niikura Naoki là người duy nhất giữ chìa khóa van an toàn của bình Nitơ lỏng số 4 và trực tiếp xả khí vào ống thông gió nhà kho!' }
      ] },
    { id: 'namikiya', name: 'Quán ăn Namiki-ya & Phòng tập nhạc Niikura', icon: '🏮',
      desc: 'Quán ăn truyền thống của gia đình Namiki và phòng tập thanh nhạc nơi Saori từng theo học.',
      points: [
        { id: 'p_blackmail', name: 'Sao kê cuộc gọi ẩn danh của Hasunuma', clue: 'c_blackmail_50m', requires: ['c_shizuoka_helper'],
          text: 'Ngay trước ngày lễ hội, Hasunuma đã gọi điện cho nhà tài trợ Niikura Naoki yêu cầu chuẩn bị 50 triệu yên tiền mặt nếu không muốn bí mật 3 năm trước bị phơi bày.' },
        { id: 'p_guitar', name: 'Hộp đàn Guitar kỷ vật của Saori', clue: 'c_saori_guitar_sd',
          text: 'Yukawa nhẹ nhàng gỡ lớp nhung lót dưới đáy hộp đàn của Saori và lấy ra một chiếc thẻ nhớ MicroSD dùng cho máy ghi âm luyện thanh.' },
        { id: 'p_record', name: 'Khôi phục dữ liệu âm thanh trong thẻ nhớ', clue: 'c_rumi_recording', requires: ['c_saori_guitar_sd', 'c_shizuoka_helper'],
          text: 'Giọng của bà Niikura Rumi vang lên đầy giận dữ trong đoạn băng 3 năm trước, tiếp theo là tiếng xô xát và tiếng đầu Saori đập mạnh vào cạnh bàn đá cẩm thạch!' }
      ] }
  ],
  suspects: [
    { id: 'namiki', name: 'Namiki Yutaro (Cha của Saori)', age: 58, avatar: '並', color: '#7c2d12',
      role: 'Đầu bếp chủ quán ăn Namiki-ya · Người cha mất con gái',
      bio: 'Người đầu bếp hiền lành được cả khu phố kính trọng, nhưng đã suy sụp hoàn toàn khi kẻ sát hại con gái mình nhởn nhơ ngoài vòng pháp luật.',
      intro: 'Ông Namiki lau con dao làm bếp, ánh mắt trầm tĩnh đến lạ kỳ. “Thanh tra Kusanagi, hôm nay quán chúng tôi đóng cửa nghỉ lễ.”',
      topics: [
        { id: 't_hasunuma', label: 'Về việc Hasunuma đến quán quấy rối', lines: [
          ['them', 'Hắn ngồi ngay bàn đầu tiên, nhìn lên bàn thờ con bé Saori rồi cười bảo: “Luật pháp nước này bảo vệ người biết giữ im lặng đấy ông già ạ”.'],
          ['me', 'Và vì thế mọi người trong khu phố cũng quyết định dùng chính sự im lặng để đáp trả hắn?'],
          ['them', 'Tôi không biết ngài thanh tra đang nói chuyện gì. Tôi xin phép giữ quyền im lặng.'] ] }
      ],
      presents: {
        i_silent_conspiracy: { lines: [
          ['me', 'Ông Namiki, cả 6 người đã chia vụ án thành từng công đoạn 5 phút và thay phiên nhau mặc bộ đồ Mascot trên xe hoa để tạo ngoại phạm tiếp sức!'],
          ['them', 'Dù các ông có suy luận hay đến đâu mà không chứng minh được ai là người trực tiếp gây ra cái chết, tòa án cũng không thể kết tội chúng tôi. Chính vụ án của Hasunuma đã dạy chúng tôi điều đó.'] ] },
        i_double_truth_betrayal: { lines: [
          ['partner', 'Ông Namiki, hãy nghe đoạn băng trong hộp đàn của Saori đi. Kẻ đã giết con gái ông 3 năm trước KHÔNG PHẢI là Hasunuma — mà là vợ của người đang đứng cùng chiến tuyến với ông: Niikura Rumi!'],
          ['narr', 'Ông Namiki chết sững, đôi bàn tay run rẩy đánh rơi chiếc khăn bếp xuống sàn.'],
          ['them', 'Cái gì…?! Niikura… chính vợ chồng ông đã giết con bé Saori rồi lừa chúng tôi cùng giết Hasunuma để bịt miệng ư?!'] ] }
      },
      defaultPresent: 'Ông Namiki cúi đầu im lặng, nhất quyết không trả lời.'
    },
    { id: 'takagaki', name: 'Takagaki Tomoya', age: 28, avatar: '高', color: '#1d4ed8',
      role: 'Bạn trai của Saori · Trưởng nhóm thiết kế xe hoa lễ hội',
      bio: 'Chàng thanh niên yêu Saori sâu đậm, luôn tự dằn vặt vì đã giữ bí mật chuyện hẹn hò và cái thai của hai người.',
      intro: 'Takagaki đứng bên chiếc xe hoa Lâu Đài Băng Giá đang tháo dỡ, khuôn mặt căng thẳng.',
      topics: [
        { id: 't_saori', label: 'Về ước mơ âm nhạc của Saori', lines: [
          ['them', 'Saori sắp được ra mắt chuyên nghiệp nhờ sự đỡ đầu của vợ chồng ông Niikura. Chúng tôi định đợi cô ấy đứng vững trên sân khấu rồi mới công bố chuyện kết hôn…'] ] }
      ],
      presents: {
        c_mascot_swap: { lines: [
          ['me', 'Ba chiếc áo thấm mồ hôi trong khoang xe hoa chứng minh cậu, ông Namiki và ông Tojima đã tráo người bên trong bộ đồ Mèo Kikuno.'],
          ['them', 'Tôi không có gì để khai cả, thưa thanh tra.'] ] }
      },
      defaultPresent: 'Takagaki mím chặt môi giữ im lặng.'
    },
    { id: 'niikura', name: 'Niikura Naoki & Niikura Rumi', age: 49, avatar: '新', color: '#6b21a8',
      role: 'Nhà tài trợ âm nhạc giàu có & Người vợ hay ghen',
      bio: 'Cặp vợ chồng danh giá bảo trợ cho lễ hội phố Kikuno và từng đào tạo Saori tại phòng tập riêng.',
      intro: 'Niikura Naoki khoác tay vợ bước vào phòng thẩm vấn với vẻ điềm đạm của giới thượng lưu.',
      topics: [
        { id: 't_float', label: 'Về việc tài trợ bình Nitơ lỏng cho xe hoa', lines: [
          ['them', 'Tôi muốn xe hoa tưởng nhớ Saori phải lộng lẫy nhất lễ hội năm nay nên đã đặt mua hệ thống phun sương lạnh bằng Nitơ lỏng công nghiệp.'] ] }
      ],
      presents: {
        i_ln2_asphyxia: { lines: [
          ['partner', 'Nitơ lỏng khi bay hơi sẽ đẩy cạn Oxy trong nhà kho kín, giết chết Hasunuma rồi hòa tan vào bầu khí quyển vốn có 78% Nitơ. Một kế hoạch rất thông minh, ông Niikura ạ.'],
          ['them', 'Giáo sư Yukawa nói cứ như tiểu thuyết trinh thám vậy. Nhưng các ông không có bằng chứng.'] ] },
        i_double_truth_betrayal: { lines: [
          ['me', 'Đây là đoạn ghi âm trong hộp đàn của Saori đêm 3 năm trước! Vợ ông — bà Rumi — vì ghen tuông đã đẩy Saori đập đầu tử vong, còn ông thuê Hasunuma 5 triệu yên để phi tang xác ở Shizuoka!'],
          ['partner', 'Khi Hasunuma thoát tội và đòi 50 triệu yên tiền bịt miệng, ông đã lợi dụng lòng căm thù của gia đình Namiki, bày ra kế hoạch Nitơ lỏng và tự mình mở van xả khí ở khâu cuối cùng để giết Hasunuma diệt khẩu!'],
          ['narr', 'Niikura Rumi bật khóc nức nở, còn Niikura Naoki trắng bệch mặt mũi, quỳ sụp xuống trước ánh mắt căm phẫn của ông Namiki.'],
          ['them', 'Tôi… tôi xin nhận hết! Chính tôi là người đã mở van Nitơ lỏng giết Hasunuma… Ông Namiki và mọi người ở phố Kikuno chỉ bị tôi lợi dụng mà thôi!'] ] }
      },
      defaultPresent: 'Niikura Naoki giữ vẻ mặt lạnh lùng không đáp.'
    }
  ],
  combos: [
    { a: 'c_autopsy_anoxia', b: 'c_parade_ln2', result: 'i_ln2_asphyxia' },
    { a: 'c_warehouse_seal', b: 'c_parade_ln2', result: 'i_ln2_asphyxia' },
    { a: 'c_relay_alibi', b: 'c_mascot_swap', result: 'i_silent_conspiracy' },
    { a: 'c_rumi_recording', b: 'c_blackmail_50m', result: 'i_double_truth_betrayal' },
    { a: 'c_rumi_recording', b: 'c_niikura_valve', result: 'i_double_truth_betrayal' }
  ],
  hints: [
    { until: 'i_ln2_asphyxia', text: 'Hasunuma chết ngạt trong nhà kho bị dán kín nhưng phổi không có chất độc lạ. Hãy kết hợp Báo cáo pháp y (hoặc Nhà kho dán băng keo) với Bình Nitơ lỏng trên xe hoa!' },
    { until: 'i_silent_conspiracy', text: 'Làm sao 6 người dân phố Kikuno vừa thực hiện vụ án vừa có mặt trên xe hoa? Hãy ghép Lịch trình ngoại phạm chéo với Bộ đồ linh vật Mèo Kikuno.' },
    { until: 'c_rumi_recording', text: 'Sau khi nhận Báo cáo từ Shizuoka rằng Hasunuma chỉ là kẻ phi tang xác, hãy kiểm tra Hộp đàn Guitar của Saori tại quán Namiki-ya để khôi phục dữ liệu thẻ nhớ!' },
    { until: 'i_double_truth_betrayal', text: 'Ai mới là hung thủ giết Saori 3 năm trước và ai đã mượn tay tập thể để giết Hasunuma bịt đầu mối? Hãy kết hợp Đoạn ghi âm của bà Rumi với Cuộc gọi tống tiền 50 triệu yên (hoặc Van xả bình Nitơ số 4).' }
  ],
  finalHint: 'Tầng sự thật thứ hai ẩn sau Cuộc Diễu Hành Thầm Lặng đã lộ diện. Hãy mở Bảng suy luận để kết thúc vụ án.',
  questions: [
    { id: 'q1', q: 'Bằng cách nào hung thủ sát hại Hasunuma Kanichi trong nhà kho khóa kín mà khám nghiệm tử thi không tìm thấy bất kỳ độc chất hóa học nào?',
      options: [
        'Bơm khí thải xe tải (CO) vào phòng rồi dùng máy lọc không khí hút sạch',
        'Chuốc thuốc ngủ rồi bơm Nitơ lỏng (LN2) từ xe hoa lễ hội vào nhà kho dán kín để đẩy cạn Oxy gây ngạt thở; sau khi mở cửa, khí Nitơ hòa lẫn vào không khí tự nhiên (vốn chứa 78% Nitơ) không để lại dấu vết',
        'Dùng đá khô (CO2) đặt quanh miệng nạn nhân',
        'Dùng túi nilon trùm đầu nạn nhân rồi mang túi đi đốt'
      ],
      answer: 1, support: ['i_ln2_asphyxia', 'c_autopsy_anoxia', 'c_parade_ln2'] },
    { id: 'q2', q: 'Làm thế nào nhóm cư dân phố Kikuno đều có bằng chứng ngoại phạm vững chắc trong suốt thời gian diễn ra lễ hội diễu hành?',
      options: [
        'Họ thuê một sát thủ chuyên nghiệp bên ngoài thực hiện toàn bộ',
        'Họ chỉnh đồng hồ của toàn bộ khu phố chạy sai giờ',
        'Họ chia nhỏ kế hoạch thành dây chuyền 6 công đoạn ngắn (mỗi người chỉ vắng mặt 5–10 phút) và luân phiên tráo người bên trong bộ trang phục linh vật “Mèo Kikuno” trùm kín đầu trên xe hoa',
        'Camera đường phố đã bị ghi đè bằng băng hình năm ngoái'
      ],
      answer: 2, support: ['i_silent_conspiracy', 'c_relay_alibi', 'c_mascot_swap'] },
    { id: 'q3', q: 'Sự thật chấn động về vai trò của Hasunuma Kanichi trong vụ án Namiki Saori 3 năm trước là gì?',
      options: [
        'Hasunuma là kẻ trực tiếp sát hại Saori như cảnh sát nghi ngờ ban đầu',
        'Hasunuma hoàn toàn không liên quan gì đến vụ án ở Shizuoka',
        'Khi Hasunuma tới phòng tập nhạc 3 năm trước thì Saori ĐÃ CHẾT từ trước; Hasunuma chỉ là kẻ nhận 5 triệu yên để mang xác Saori về Shizuoka phi tang rồi quay lại tống tiền hung thủ thật sự!',
        'Hasunuma là cha ruột bí mật của Saori'
      ],
      answer: 2, support: ['c_shizuoka_helper', 'c_blackmail_50m', 'c_rumi_recording'] },
    { id: 'q4', q: 'Ai mới là hung thủ thực sự đã sát hại nữ ca sĩ Namiki Saori 3 năm trước, và ai là kẻ trực tiếp mở van Nitơ lỏng giết Hasunuma để diệt khẩu?',
      options: [
        'Takagaki Tomoya giết Saori vì mâu thuẫn tình cảm rồi tự mở van Nitơ lỏng',
        'Ông chủ quán Namiki Yutaro vô tình làm chết con gái',
        'Niikura Rumi (vợ nhà tài trợ) trong cơn ghen mù quáng đã đẩy Saori tử vong 3 năm trước; chồng bà ta là Niikura Naoki đã thuê Hasunuma phi tang xác rồi 3 năm sau lợi dụng kế hoạch trả thù của phố Kikuno để trực tiếp xả Nitơ lỏng giết Hasunuma bịt miệng!',
        'Ông bạn thân Tojima gây ra cả hai vụ án'
      ],
      answer: 2, support: ['i_double_truth_betrayal', 'c_rumi_recording', 'c_niikura_valve'] }
  ],
  truth: [
    'Tất cả người dân phố Kikuno đều tin chắc rằng tên tội phạm máu lạnh Hasunuma Kanichi là kẻ đã sát hại cô ca sĩ trẻ Namiki Saori rồi thoát tội nhờ “Quyền giữ im lặng”. Trong nỗi uất hận tột cùng, họ đã cùng nhau lập nên một kế hoạch trả thù tập thể vào đúng ngày Lễ hội Diễu hành Hóa trang.',
    'Bằng cách chia nhỏ vụ án thành từng mắt xích 5 phút nối tiếp nhau — người chuốc rượu pha thuốc ngủ, người đưa Hasunuma vào kho, người dán băng keo kín phòng, người luân phiên mặc bộ đồ linh vật “Mèo Kikuno” để tạo ngoại phạm — họ dự định sẽ cùng nhau giữ im lặng trước tòa giống hệt như những gì Hasunuma đã làm.',
    'Thế nhưng Giáo sư Yukawa Manabu đã lật mở tầng sự thật thứ hai tàn nhẫn hơn gấp bội: Ba năm trước, kẻ giết Saori trong phòng tập nhạc là Niikura Rumi (vợ nhà tài trợ) do ghen tuông mù quáng! Chồng bà ta — Niikura Naoki — đã trả 5 triệu yên cho Hasunuma để mang xác Saori về Shizuoka phi tang.',
    'Khi Hasunuma được thả tự do và đòi 50 triệu yên tiền bịt miệng, Niikura Naoki đã quỷ quyệt cung cấp bình Nitơ lỏng cho xe hoa và tự mình đảm nhận khâu cuối cùng: mở van xả khí Nitơ lỏng giết chết Hasunuma, biến những người dân lương thiện phố Kikuno thành lá chắn cho tội ác của vợ chồng hắn!',
    'Khi đoạn băng ghi âm trong hộp đàn của Saori vang lên, Niikura Naoki gục đầu thú nhận toàn bộ tội giết người, giúp ông Namiki và những người dân phố Kikuno thoát khỏi bản án tử của lương tâm.'
  ],
  sourceNote: 'Phỏng theo tiểu thuyết “Cuộc Diễu Hành Thầm Lặng” (沈黙のパレード, 2018) của Higashino Keigo — một trong những kiệt tác xuất sắc nhất của dòng sách Thám tử Galileo.'
});
