/* =========================================================================
 * VỤ ÁN 10 — LỜI THÚ TỘI LÚC NỬA ĐÊM (CÁI CHẾT CỦA NGÀI ACKROYD)
 * Phỏng theo The Murder of Roger Ackroyd (1926) — Agatha Christie
 * Một trong những kiệt tác vĩ đại nhất lịch sử văn học trinh thám của Hercule Poirot.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'roger-ackroyd',
  order: 10,
  collection: 'world-classics',
  author: 'Agatha Christie',
  title: 'Cái Chết Của Ngài Ackroyd',
  original: 'The Murder of Roger Ackroyd · 1926 · Agatha Christie (Hercule Poirot)',
  kanji: '叙',
  theme: { a: '#1b2420', b: '#2d6a4f', accent: '#f4d35e' },
  difficulty: 5,
  par: 36,
  tagline: 'Một giọng nói phát ra từ căn phòng của người chết, một chiếc ghế bành xoay lệch 30 độ, và kẻ sát nhân viết biên bản điều tra.',
  playerRole: 'Bạn là thanh tra Raglan thuộc Sở Cảnh sát hạt, làm việc cùng vị thám tử người Bỉ vừa nghỉ hưu trồng bí ngô tại làng King’s Abbot — Hercule Poirot.',
  partner: {
    name: 'Hercule Poirot',
    title: 'Thám tử tư người Bỉ — “Những tế bào xám nhỏ bé”',
    avatar: 'P',
    color: '#2d6a4f'
  },
  briefing: [
    'Tại ngôi làng yên bình King’s Abbot, góa phụ giàu có bà Ferrars đột ngột tự sát bằng thuốc ngủ. Ngay tối hôm sau, vị hôn phu của bà — phú ông Roger Ackroyd — bị đâm chết từ phía sau bằng con dao găm Tunisia ngay trong thư phòng khóa kín tại dinh thự Fernly Park.',
    'Bác sĩ gia đình James Sheppard khai rằng lúc 20:40, ông Ackroyd đã tiết lộ bà Ferrars từng bị một kẻ tống tiền suốt một năm qua. Đúng lúc đó quản gia Parker mang thư tối vào — trong đó có bức thư màu xanh cuối cùng bà Ferrars gửi trước khi chết nêu đích danh kẻ tống tiền. Bác sĩ Sheppard rời thư phòng lúc 20:50 khi bức thư vẫn chưa được đọc hết.',
    'Kỳ lạ thay, lúc 21:30 quản gia Parker vẫn nghe thấy giọng ông Ackroyd nói vọng ra từ sau cánh cửa thư phòng khóa kín. Còn đến 22:15, bác sĩ Sheppard lại nhận được một cuộc gọi bí ẩn báo tin “Ackroyd bị ám sát”, khiến ông vội vã chạy đến dinh thự cùng Parker phá cửa — và phát hiện thi thể Ackroyd còn bức thư màu xanh đã biến mất!',
    'Poirot vuốt bộ ria mép cân đối của mình: “Mon ami, đừng nhìn vào những dấu chân ngoài bệ cửa sổ. Hãy hỏi tại sao một chiếc ghế bành lại tự dịch chuyển 30 độ!”'
  ],
  clues: {
    c_study_body: { title: 'Thi thể ngài Ackroyd & Con dao Tunisia', icon: '🗡️', type: 'evidence',
      desc: 'Roger Ackroyd bị đâm xuyên cổ khi đang ngồi trên ghế cạnh lò sưởi. Hung khí là con dao găm Tunisia vốn được trưng bày trong tủ kính phòng khách. Bức thư màu xanh của bà Ferrars đã biến mất.' },
    c_voice_2130: { title: 'Giọng nói lúc 21:30 sau cánh cửa khóa', icon: '🗣️', type: 'testimony',
      desc: 'Lúc 21:30, cô cháu gái Flora và quản gia Parker đứng trước cửa thư phòng khóa trong và nghe rất rõ giọng ông Ackroyd: “Các cuộc gọi quá nhiều khiến tôi không còn thời gian… Để sáng mai tôi xem xét.”' },
    c_sheppard_exit: { title: 'Ngoại phạm lúc 21:00 của bác sĩ Sheppard', icon: '🕘', type: 'testimony',
      desc: 'Bác sĩ Sheppard khai ông rời thư phòng lúc 20:50 và ra đến cổng dinh thự đúng 21:00 (có một người lạ hỏi đường làm chứng). Nếu Ackroyd còn sống và nói chuyện lúc 21:30, Sheppard hoàn toàn vô tội.' },
    c_armchair_moved: { title: 'Chiếc ghế bành bị xoay góc 30 độ', icon: '🪑', type: 'evidence',
      desc: 'Poirot nhận thấy khi mới phá cửa vào, chiếc ghế bành lớn bị kéo lệch ra chắn hoàn toàn tầm nhìn từ cửa chính tới chiếc bàn con góc phòng. Nhưng chỉ 10 phút sau, ai đó trong phòng đã lặng lẽ đẩy chiếc ghế về sát tường!' },
    c_dictaphone_part: { title: 'Mảnh kim loại & Chiếc máy Dictaphone', icon: '🎙️', type: 'evidence',
      desc: 'Ông Ackroyd vừa mua một chiếc máy ghi âm ống sáp Dictaphone để đọc thư từ cho thư ký. Trên chiếc bàn con từng bị ghế bành che khuất có vết chân đế cao su và một chốt hẹn giờ cơ học!' },
    c_medical_bag: { title: 'Chiếc túi đồ nghề y khoa cỡ lớn', icon: '🧰', type: 'evidence',
      desc: 'Trong số những người có mặt khi phá cửa thư phòng lúc 22:30, chỉ có duy nhất bác sĩ Sheppard mang theo chiếc túi da y khoa rộng — đủ để bỏ gọn chiếc máy Dictaphone vào trong lúc mọi người đang nhìn thi thể!' },
    c_call_2215: { title: 'Cuộc gọi báo tin lúc 22:15', icon: '☎️', type: 'evidence',
      desc: 'Bác sĩ Sheppard khai lúc 22:15 có người gọi đến nhà ông báo “Ackroyd bị sát hại”, nên ông mới chạy tới Fernly Park đòi phá cửa. Nhưng tại Fernly Park lúc 22:15, chưa một ai biết Ackroyd đã chết!' },
    c_station_booth: { title: 'Truy vết cuộc gọi từ ga tàu King’s Abbot', icon: '🚂', type: 'evidence',
      desc: 'Tổng đài xác nhận cuộc gọi lúc 22:15 đến nhà bác sĩ Sheppard được gọi từ bốt điện thoại ga tàu King’s Abbot — chỉ 4 phút trước khi chuyến tàu tốc hành 22:19 đi cảng Liverpool lăn bánh.' },
    c_steward_patient: { title: 'Bệnh nhân người Mỹ của bác sĩ Sheppard', icon: '🚢', type: 'testimony',
      desc: 'Sáng hôm đó, bác sĩ Sheppard có khám bệnh cho Charles Kent / một tiếp viên tàu biển chuẩn bị ra cảng Liverpool trên chuyến tàu 22:19 tối. Người này thừa nhận được bác sĩ thuê 5 bảng Anh để gọi đúng câu đó lúc 22:15 từ ga tàu!' },
    c_window_footprints: { title: 'Dấu giày cao su của Ralph Paton trên bệ cửa sổ', icon: '👟', type: 'evidence',
      desc: 'Trên bệ cửa sổ thư phòng có dấu đế giày cao su trùng với đôi giày của người con nuôi Ralph Paton (đang bỏ trốn ở quán trọ). Tuy nhiên, chiều hôm đó bác sĩ Sheppard đã ghé qua quán trọ và lấy đi một đôi giày của Ralph!' },
    c_wall_street_loss: { title: 'Khoản đầu tư thua lỗ của bác sĩ Sheppard', icon: '📉', type: 'evidence',
      desc: 'Kiểm tra tài khoản ngân hàng: năm ngoái bác sĩ Sheppard đột nhiên có 20.000 bảng Anh tiền mặt không rõ nguồn gốc (trùng khớp số tiền bà Ferrars bị tống tiền) và đã nướng sạch vào cổ phiếu mỏ vàng đầu cơ!' },
    c_diary_manuscript: { title: 'Tập bản thảo ghi chép vụ án của bác sĩ Sheppard', icon: '📓', type: 'evidence',
      desc: 'Bác sĩ Sheppard viết một tập ghi chép chi tiết toàn bộ cuộc điều tra của Poirot. Trong đoạn viết về khoảng thời gian từ 20:40 đến 20:50 ở thư phòng, ông ta viết: “Bức thư được mang vào lúc 20:40. Lúc 20:50 tôi rời đi, để lại bức thư vẫn chưa được đọc” — khéo léo giấu nhẹm 10 phút ở giữa!' },

    i_dictaphone_alibi: { title: 'Giọng nói lúc 21:30 là băng ghi âm hẹn giờ', icon: '🧩', type: 'insight',
      desc: 'Ackroyd đã chết trước 20:50! Giọng nói kỳ quái về “các cuộc gọi” mà quản gia Parker nghe thấy lúc 21:30 thực chất phát ra từ máy Dictaphone hẹn giờ đặt trên chiếc bàn con sau ghế bành!' },
    i_fake_2215_call: { title: 'Cuộc gọi lúc 22:15 là cái cớ để thu hồi máy ghi âm', icon: '🧩', type: 'insight',
      desc: 'Hung thủ không thể để chiếc máy Dictaphone nằm mãi trong thư phòng đến sáng hôm sau. Vì vậy hắn thuê người gọi điện lúc 22:15 để có lý do hợp pháp chạy sang phá cửa thư phòng và cất chiếc máy vào túi y khoa!' },
    i_sheppard_culprit: { title: 'Bác sĩ James Sheppard chính là hung thủ', icon: '🧩', type: 'insight',
      desc: 'Chính bác sĩ Sheppard là kẻ đã tống tiền bà Ferrars. Khi biết bức thư màu xanh sẽ vạch mặt mình, trong 10 phút từ 20:40 đến 20:50 ông ta đã đâm chết Ackroyd, lấy bức thư, cài máy Dictaphone hẹn giờ 21:30 và ngụy tạo dấu giày của Ralph Paton!' }
  },
  locations: [
    { id: 'study', name: 'Thư phòng khóa kín — Dinh thự Fernly Park', icon: '🕯️',
      desc: 'Căn phòng ấm cúng nơi phú ông Roger Ackroyd gục chết bên lò sưởi.',
      points: [
        { id: 'p_body', name: 'Thi thể ngài Ackroyd & Dao găm Tunisia', clue: 'c_study_body',
          text: 'Vết đâm chí mạng từ phía sau. Bức thư màu xanh của bà Ferrars đã bị lấy mất.' },
        { id: 'p_chair', name: 'Vị trí chiếc ghế bành lớn (Grandfather Chair)', clue: 'c_armchair_moved',
          text: 'Poirot nheo mắt: “Khi cửa vừa bật mở, chiếc ghế này nằm xoay 30 độ chắn ngang chiếc bàn con góc phòng. Ai đã lén đẩy nó về chỗ cũ?”' },
        { id: 'p_table', name: 'Chiếc bàn con góc phòng & Máy Dictaphone', clue: 'c_dictaphone_part', requires: ['c_armchair_moved'],
          text: 'Vết hằn cao su và một đinh chốt hẹn giờ rơi trên thảm: nơi đây từng đặt chiếc máy ghi âm Dictaphone!' },
        { id: 'p_window', name: 'Bệ cửa sổ & Dấu giày cao su', clue: 'c_window_footprints',
          text: 'Dấu giày của người con nuôi Ralph Paton in rõ trên bệ cửa sổ — rõ đến mức giống như được ai đó cầm chiếc giày ấn xuống!' }
      ] },
    { id: 'hall', name: 'Hành lang & Phòng khách Fernly Park', icon: '🕰️',
      desc: 'Nơi quản gia Parker và các thành viên gia đình có mặt tối hôm xảy ra án mạng.',
      points: [
        { id: 'p_parker', name: 'Lời khai của quản gia Parker & Flora', clue: 'c_voice_2130',
          text: '“Đúng 21:30 tôi và tiểu thư Flora nghe thấy tiếng ông chủ nói từ trong phòng về các cuộc gọi… Câu nói nghe cứ đều đều, ngắt quãng rất lạ.”' },
        { id: 'p_shep_time', name: 'Biên bản lời khai ban đầu của bác sĩ Sheppard', clue: 'c_sheppard_exit',
          text: 'Bác sĩ rời thư phòng lúc 20:50 và ra khỏi cổng dinh thự đúng 21:00.' },
        { id: 'p_bag', name: 'Quan sát vật dụng lúc phá cửa lúc 22:30', clue: 'c_medical_bag', requires: ['c_dictaphone_part'],
          text: 'Poirot gật gù: “Một chiếc máy Dictaphone cồng kềnh chỉ có thể biến mất khỏi thư phòng nếu nó nằm gọn trong chiếc túi da y khoa của bác sĩ!”' }
      ] },
    { id: 'village', name: 'Tổng đài điện thoại & Ga tàu King’s Abbot', icon: '🚂',
      desc: 'Truy tìm nguồn gốc cuộc gọi bí ẩn lúc 22:15 đêm.',
      points: [
        { id: 'p_call', name: 'Nghịch lý cuộc gọi lúc 22:15', clue: 'c_call_2215',
          text: 'Tại sao có người gọi báo cho bác sĩ Sheppard rằng “Ackroyd bị sát hại” vào lúc cả dinh thự Fernly Park vẫn tưởng ông đang làm việc trong phòng?' },
        { id: 'p_station', name: 'Nhật ký tổng đài & Bốt điện thoại ga tàu', clue: 'c_station_booth', requires: ['c_call_2215'],
          text: 'Cuộc gọi xuất phát từ bốt điện thoại sân ga lúc 22:15, ngay trước khi tàu tốc hành đi cảng Liverpool khởi hành lúc 22:19!' },
        { id: 'p_steward', name: 'Xác minh hành khách lên tàu ở cảng Liverpool', clue: 'c_steward_patient', requires: ['c_station_booth'],
          text: 'Nhân viên tàu biển khai nhận: chính bác sĩ Sheppard đã khám cho anh ta buổi sáng và đưa 5 bảng Anh nhờ gọi đúng câu đó lúc 22:15!' }
      ] },
    { id: 'clinic', name: 'Phòng khám & Bàn viết của Bác sĩ Sheppard', icon: '🩺', requires: ['i_dictaphone_alibi'],
      desc: 'Ngôi nhà của bác sĩ James Sheppard — người hàng xóm thân thiết của Poirot.',
      points: [
        { id: 'p_bank', name: 'Sao kê tài chính & Cổ phiếu thua lỗ', clue: 'c_wall_street_loss',
          text: 'Khoản tiền 20.000 bảng Anh trùng khớp với số tiền bà Ferrars bị tống tiền suốt năm qua!' },
        { id: 'p_manuscript', name: 'Tập bản thảo ghi chép vụ án trên bàn viết', clue: 'c_diary_manuscript',
          text: 'Poirot đọc đoạn văn viết về khung giờ 20:40–20:50: “Một bản tường thuật tuyệt vời, thưa bác sĩ — chỉ tiếc là ông đã giấu đi đúng 10 phút giữa hai dấu chấm câu!”' }
      ] }
  ],
  suspects: [
    { id: 'parker', name: 'Quản gia John Parker', age: 49, avatar: '執', color: '#52796f',
      role: 'Quản gia lâu năm tại dinh thự Fernly Park',
      bio: 'Có thói quen nghe lén ngoài cửa, nhưng trung thành và nhút nhát.',
      intro: 'Parker lau mồ hôi trán. “Thưa ngài Poirot, tôi thề là tôi chỉ đứng ngoài cửa chứ không hề bước vào thư phòng!”',
      topics: [
        { id: 't_letter_p', label: 'Lúc mang khay thư tối vào lúc 20:40', lines: [
          ['them', 'Lúc tôi mang thư vào, bác sĩ Sheppard đang ngồi bên lò sưởi còn ông chủ vừa rút bức thư màu xanh của bà Ferrars ra đọc những dòng đầu tiên.'] ] },
        { id: 't_voice_p', label: 'Về giọng nói lúc 21:30', lines: [
          ['them', 'Giọng đúng là của ông chủ, nhưng nghe hơi rè và phẳng như ông ấy đang đọc một văn bản có sẵn vậy!'] ] }
      ],
      presents: {
        c_dictaphone_part: { lines: [
          ['them', 'Phải rồi! Chính câu nói “Các cuộc gọi quá nhiều…” là đoạn văn mẫu mà ông chủ vừa đọc vào máy ghi âm Dictaphone hồi chiều hôm qua!'] ] }
      },
      defaultPresent: 'Parker cúi đầu. “Tôi không biết gì hơn thưa ngài.”'
    },
    { id: 'sheppard', name: 'Bác sĩ James Sheppard', age: 45, avatar: '医', color: '#1d3557',
      role: 'Bác sĩ gia đình · Người viết nhật ký điều tra vụ án',
      bio: 'Điềm đạm, chu đáo, được cả làng King’s Abbot kính trọng. Là người đồng hành cùng Poirot ngay từ đầu vụ án.',
      intro: 'Bác sĩ Sheppard mỉm cười hiền hậu bên ấm trà. “Ngài Poirot, những tế bào xám của ngài đã tìm ra manh mối nào mới về Ralph Paton chưa?”',
      topics: [
        { id: 't_2040', label: 'Mười phút từ 20:40 đến 20:50 trong thư phòng', lines: [
          ['them', 'Ông Ackroyd tâm sự với tôi về chuyện bà Ferrars bị tống tiền. Ông ấy bảo muốn đọc bức thư màu xanh một mình, nên tôi cáo từ lúc 20:50.'] ] },
        { id: 't_call_s', label: 'Về cuộc gọi báo tin lúc 22:15', lines: [
          ['them', 'Tôi cũng thấy kỳ lạ lắm. Ai đó gọi báo ông Ackroyd bị ám sát rồi cúp máy ngay, làm tôi phải tức tốc chạy đến Fernly Park.'] ] }
      ],
      presents: {
        c_dictaphone_part: { lines: [
          ['me', 'Ông đã đặt chiếc máy Dictaphone hẹn giờ 21:30 trên chiếc bàn con và kéo ghế bành che lại để giả giọng ông Ackroyd khi ông đã ra ngoài cổng!'],
          ['them', 'Một giả thuyết rất giàu trí tưởng tượng, nhưng nếu có chiếc máy đó thì tại sao cảnh sát không tìm thấy nó trong phòng?'],
          ['partner', 'Vì người mang chiếc túi y khoa vào phòng lúc 22:30 đã kéo chiếc ghế bành về chỗ cũ và bỏ chiếc máy vào túi của mình, thưa bác sĩ!'] ] },
        c_steward_patient: { lines: [
          ['me', 'Chính ông đã thuê bệnh nhân của mình gọi điện từ ga tàu lúc 22:15 trước khi lên tàu đi Liverpool — để ông có cớ hợp pháp chạy đến Fernly Park phá cửa và thu hồi máy Dictaphone!'],
          ['narr', 'Bàn tay cầm tách trà của bác sĩ Sheppard khựng lại giữa không trung.'],
          ['them', 'Ngài đã tra ra tận cảng Liverpool sao…'] ] },
        c_diary_manuscript: { lines: [
          ['partner', 'Trong tập bản thảo của mình, ông viết: “20:40 bức thư được mang vào. 20:50 tôi rời đi”. Ông không viết một chữ nào sai sự thật — ông chỉ lờ đi việc chính ông đã đâm chết Ackroyd trong 10 phút đó!'],
          ['them', 'Tôi hiểu rồi, Poirot. Ngày mai, chương cuối cùng của tập bản thảo này sẽ là lời thú tội trọn vẹn của tôi.'] ] }
      },
      defaultPresent: 'Bác sĩ Sheppard mỉm cười điềm tĩnh. “Một manh mối thú vị đấy.”'
    }
  ],
  combos: [
    { a: 'c_voice_2130', b: 'c_dictaphone_part', result: 'i_dictaphone_alibi' },
    { a: 'c_armchair_moved', b: 'c_dictaphone_part', result: 'i_dictaphone_alibi' },
    { a: 'c_call_2215', b: 'c_steward_patient', result: 'i_fake_2215_call' },
    { a: 'c_medical_bag', b: 'c_call_2215', result: 'i_fake_2215_call' },
    { a: 'i_dictaphone_alibi', b: 'i_fake_2215_call', result: 'i_sheppard_culprit' },
    { a: 'i_dictaphone_alibi', b: 'c_diary_manuscript', result: 'i_sheppard_culprit' }
  ],
  hints: [
    { until: 'i_dictaphone_alibi', text: 'Tại sao chiếc ghế bành trong thư phòng lại bị xoay góc 30 độ? Hãy kiểm tra chiếc bàn con góc phòng rồi kết hợp với giọng nói lúc 21:30.' },
    { until: 'i_fake_2215_call', text: 'Truy vết cuộc gọi lúc 22:15 tại ga tàu King’s Abbot và kết hợp với bệnh nhân tàu biển hoặc chiếc túi đồ nghề y khoa.' },
    { until: 'i_sheppard_culprit', text: 'Sau khi mở khóa Phòng khám của bác sĩ Sheppard, hãy kết hợp hai suy luận về máy Dictaphone và cuộc gọi 22:15 (hoặc tập bản thảo của bác sĩ)!' }
  ],
  finalHint: 'Những tế bào xám nhỏ bé đã hoàn tất công việc. Hãy đến Bảng suy luận để chỉ ra thủ phạm!',
  questions: [
    { id: 'q1', q: 'Vì sao quản gia Parker và Flora vẫn nghe thấy giọng ông Ackroyd nói chuyện trong thư phòng lúc 21:30?',
      options: ['Ông Ackroyd lúc đó vẫn còn sống', 'Hung thủ nhại giọng của ông Ackroyd', 'Hung thủ đã cài bộ hẹn giờ trên máy ghi âm ống sáp Dictaphone để tự động phát lại giọng nói của Ackroyd lúc 21:30', 'Họ nghe nhầm tiếng radio'],
      answer: 2, support: ['i_dictaphone_alibi', 'c_dictaphone_part', 'c_voice_2130'] },
    { id: 'q2', q: 'Tại sao chiếc ghế bành lớn (Grandfather Chair) lại bị kéo lệch 30 độ rồi được đẩy về chỗ cũ sau khi phá cửa?',
      options: ['Do nạn nhân giãy giụa khi bị tấn công', 'Để che khuất chiếc bàn con đặt máy ghi âm Dictaphone khi mọi người vừa phá cửa bước vào, sau đó hung thủ nhân lúc hỗn loạn cất máy vào túi và đẩy ghế về chỗ cũ', 'Do quản gia Parker vô tình va phải', 'Để chắn gió từ cửa sổ'],
      answer: 1, support: ['c_armchair_moved', 'c_medical_bag', 'i_dictaphone_alibi'] },
    { id: 'q3', q: 'Mục đích thật sự của cuộc gọi điện thoại bí ẩn lúc 22:15 báo tin “Ackroyd bị sát hại” là gì?',
      options: ['Một nhân chứng giấu mặt muốn giúp cảnh sát', 'Kẻ tống tiền gọi điện trêu ngươi', 'Do chính hung thủ thuê người gọi từ ga tàu để có lý do hợp pháp chạy đến dinh thự, đòi phá cửa thư phòng ngay trong đêm nhằm thu hồi chiếc máy Dictaphone trước sáng hôm sau', 'Tổng đài kết nối nhầm số'],
      answer: 2, support: ['i_fake_2215_call', 'c_call_2215', 'c_steward_patient'] },
    { id: 'q4', q: 'Ai là kẻ đã tống tiền bà Ferrars và sát hại ngài Roger Ackroyd?',
      options: ['Người con nuôi Ralph Paton', 'Quản gia John Parker', 'Bác sĩ James Sheppard — người viết biên bản và nhật ký vụ án', 'Cô cháu gái Flora Ackroyd'],
      answer: 2, support: ['i_sheppard_culprit', 'c_diary_manuscript', 'c_wall_street_loss'] },
    { id: 'q5', q: 'Roger Ackroyd thực sự bị sát hại vào thời điểm nào?',
      options: ['Lúc 21:35 sau khi nói chuyện xong', 'Lúc 22:00 khi kẻ đột nhập trèo qua cửa sổ', 'Trong khoảng 10 phút từ 20:40 đến 20:50, trước khi bác sĩ Sheppard rời khỏi thư phòng', 'Lúc nửa đêm'],
      answer: 2, support: ['i_sheppard_culprit', 'c_diary_manuscript', 'i_dictaphone_alibi'] },
    { id: 'q6', q: 'Dấu giày cao su của Ralph Paton trên bệ cửa sổ thư phòng thực chất từ đâu mà có?',
      options: ['Ralph Paton thực sự đã trèo vào phòng lúc 21:30', 'Bác sĩ Sheppard đã lấy trộm đôi giày của Ralph ở quán trọ hồi chiều rồi tự ấn dấu lên bệ cửa sổ để đổ tội cho Ralph', 'Cảnh sát làm giả dấu chân', 'Quản gia Parker đi giày của Ralph'],
      answer: 1, support: ['c_window_footprints', 'i_sheppard_culprit'] }
  ],
  truth: [
    'Suốt một năm trước vụ án, chính bác sĩ gia đình đáng kính James Sheppard là kẻ đã tống tiền bà Ferrars 20.000 bảng Anh vì biết bà từng đầu độc người chồng vũ phu của mình.',
    'Khi bà Ferrars tự sát và gửi bức thư màu xanh tiết lộ tên kẻ tống tiền cho vị hôn phu Roger Ackroyd vào tối hôm sau, bác sĩ Sheppard biết mình sắp bị hủy hoại. Trong 10 phút ở lại thư phòng từ 20:40 đến 20:50, Sheppard đã lấy con dao găm Tunisia đâm chết Ackroyd từ phía sau và đốt bức thư màu xanh.',
    'Để tạo bằng chứng ngoại phạm không thể chối cãi, Sheppard cài hẹn giờ cho chiếc máy ghi âm Dictaphone của Ackroyd phát lại giọng nói của nạn nhân lúc 21:30, kéo chiếc ghế bành che khuất chiếc máy, và dùng đôi giày lấy trộm của Ralph Paton in dấu lên bệ cửa sổ.',
    'Nhưng Sheppard cần phải lấy lại chiếc máy Dictaphone trước khi cảnh sát khám nghiệm vào sáng hôm sau. Ông ta thuê một bệnh nhân sắp lên tàu đi Liverpool gọi điện đến nhà mình lúc 22:15 báo tin “Ackroyd bị sát hại”, lấy cớ đó chạy sang Fernly Park phá cửa thư phòng, rồi nhân lúc mọi người vây quanh thi thể đã lặng lẽ bỏ chiếc máy Dictaphone vào túi đồ nghề y khoa và đẩy chiếc ghế bành về chỗ cũ!',
    'Táo bạo hơn cả, Sheppard còn viết toàn bộ nhật ký điều tra bên cạnh Hercule Poirot như một người trợ lý trung thực — cho đến khi Poirot chỉ ra 10 phút bị giấu nhẹm giữa hai dòng chữ.'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Vụ án mạng Roger Ackroyd” (The Murder of Roger Ackroyd, 1926) của Nữ hoàng Trinh thám Agatha Christie — cuốn tiểu thuyết được Hiệp hội Nhà văn Trinh thám Anh (CWA) bầu chọn là tiểu thuyết trinh thám xuất sắc nhất mọi thời đại.'
});
