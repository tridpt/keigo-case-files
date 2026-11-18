/* =========================================================================
 * VỤ ÁN 1 — PHÍA SAU NGHI CAN X
 * Phỏng theo 容疑者Xの献身 (Yōgisha X no Kenshin, 2005) — Series Galileo
 * Lời thoại & cách dàn dựng manh mối được viết mới cho game; một số tình tiết
 * đã được giản lược hoặc điều chỉnh để phù hợp lối chơi.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'suspect-x',
  order: 1,
  title: 'Phía Sau Nghi Can X',
  original: '容疑者Xの献身 · 2005 · Series Galileo',
  kanji: 'X',
  theme: { a: '#1d2b3a', b: '#3d5a80', accent: '#e0b354' },
  difficulty: 4,
  par: 34,
  tagline: 'Một bằng chứng ngoại phạm hoàn hảo. Một thiên tài toán học. Và một bài toán được ngụy trang.',
  playerRole: 'Bạn là thanh tra tổ trọng án Sở Cảnh sát Tokyo, làm việc cùng thanh tra Kusanagi Shunpei.',
  partner: {
    name: 'Yukawa Manabu',
    title: 'Phó giáo sư Vật lý — biệt danh “Galileo”',
    avatar: '湯',
    color: '#3d5a80'
  },
  briefing: [
    'Sáng ngày 11 tháng 3, một thi thể nam giới được phát hiện bên bờ sông Kyu-Edogawa. Khuôn mặt nạn nhân bị đập nát, mười đầu ngón tay bị đốt cháy — kẻ giết người rõ ràng không muốn ai nhận ra ông ta.',
    'Dù vậy, chỉ sau vài ngày, cảnh sát đã xác định được danh tính: Togashi Shinji, một gã đàn ông vô công rỗi nghề, nổi tiếng vũ phu. Người đầu tiên bị chú ý là vợ cũ của hắn — Hanaoka Yasuko, hiện làm ở tiệm cơm hộp Benten-tei và sống cùng con gái Misato.',
    'Vấn đề là: hai mẹ con có bằng chứng ngoại phạm cho tối 10/3. Và người hàng xóm sát vách của họ — thầy giáo toán Ishigami Tetsuya — lại chính là bạn đại học của Yukawa, người mà Yukawa gọi là “thiên tài duy nhất tôi từng thua”.',
    'Nhiệm vụ của bạn: điều tra hiện trường, thẩm vấn các nhân vật, kết nối manh mối trong sổ tay và trả lời các câu hỏi trên Bảng suy luận.'
  ],
  clues: {
    c_body: { title: 'Thi thể bờ sông', icon: '🧍', type: 'evidence',
      desc: 'Nam giới khoảng 40 tuổi, bị siết cổ bằng dây. Mặt bị đập nát, mười đầu ngón tay bị đốt. Thời điểm tử vong: trong ngày 10/3 — trời lạnh khiến sai số khá lớn, nhưng tổ điều tra mặc định là buổi tối.' },
    c_clothes: { title: 'Quần áo đốt dở', icon: '🔥', type: 'evidence',
      desc: 'Cách thi thể vài chục mét là đống quần áo bị đốt, nhưng chỉ cháy một phần. Kích cỡ vừa với nạn nhân. Kẻ cẩn thận đến mức đốt cả vân tay lại bỏ dở việc đốt quần áo?' },
    c_bike: { title: 'Chiếc xe đạp bỏ lại', icon: '🚲', type: 'evidence',
      desc: 'Xe đạp dựng gần hiện trường, bị báo mất trộm tại bãi xe ga Shinozaki sáng 10/3. Vân tay trên ghi-đông trùng với vân tay thu ở phòng trọ Togashi đã thuê.' },
    c_missing_homeless: { title: 'Người vô gia cư mất tích', icon: '⛺', type: 'testimony',
      desc: 'Dưới chân cầu, những người vô gia cư kể về một người mới đến, trạc 40 tuổi, được gọi là “ông Kỹ sư”. Từ khoảng ngày 10/3, không ai còn thấy ông ta. Và sẽ chẳng ai đi báo mất tích một người vô gia cư.' },
    c_inn_room: { title: 'Phòng trọ Ogiya', icon: '🏨', type: 'evidence',
      desc: 'Togashi thuê phòng từ ngày 9/3, trả tiền đến hết ngày 10/3 rồi không quay lại. Tóc trong phòng trùng ADN với thi thể; vân tay trong phòng trùng với vân tay trên xe đạp.' },
    c_inn_staff: { title: 'Lời khai nhân viên nhà trọ', icon: '🛎️', type: 'testimony',
      desc: 'Nhân viên không nhớ rõ mặt vị khách phòng đó: “Ông ấy đội mũ, ít nói, cứ cúi gằm mặt.” Không ai khẳng định chắc chắn đó là người trong ảnh Togashi.' },
    c_togashi_visit: { title: 'Vị khách ngày 9/3', icon: '🍱', type: 'testimony',
      desc: 'Chiều 9/3, một người đàn ông đến Benten-tei tìm Yasuko. Đồng nghiệp nhận ra đó là Togashi qua ảnh. Yasuko tái mặt, vội kéo ông ta ra ngoài.' },
    c_bento_daily: { title: 'Vị khách quen mỗi sáng', icon: '🧑‍🏫', type: 'testimony',
      desc: 'Thầy Ishigami sáng nào cũng ghé Benten-tei mua một hộp cơm, chỉ khi Yasuko đứng quầy. Ông hầu như không nói gì ngoài tên món. Bà chủ cười: “Ai cũng biết thầy ấy để ý Yasuko.”' },
    c_kudo: { title: 'Kudo Kuniaki', icon: '🖨️', type: 'testimony',
      desc: 'Chủ một xưởng in, khách quen của Yasuko từ thời cô làm ở quán bar. Gần đây hai người bắt đầu hẹn hò trở lại.' },
    c_alibi_story: { title: 'Ngoại phạm tối 10/3', icon: '🎬', type: 'testimony',
      desc: 'Lời Yasuko: tối 10/3 hai mẹ con đi xem phim ở Kinshicho, ăn mì ramen rồi hát karaoke đến gần nửa đêm.' },
    c_movie_stubs: { title: 'Cuống vé xem phim', icon: '🎟️', type: 'evidence',
      desc: 'Hai cuống vé suất chiếu tối 10/3, được kẹp phẳng phiu trong cuốn tờ rơi giới thiệu phim — như thể được giữ sẵn để trình cho cảnh sát.' },
    c_karaoke: { title: 'Xác nhận của quán karaoke', icon: '🎤', type: 'evidence',
      desc: 'Nhân viên karaoke xác nhận hai mẹ con có mặt từ 21:40 đến gần nửa đêm ngày 10/3, còn nhớ cả bài Misato hát. Bằng chứng ngoại phạm này là THẬT.' },
    c_kotatsu: { title: 'Dây điện bàn sưởi', icon: '🔌', type: 'evidence',
      desc: 'Dây điện của bàn sưởi kotatsu trong căn hộ còn mới tinh; vỏ hộp vẫn nằm trong tủ. Yasuko nói dây cũ bị chập. Hóa đơn mua dây: ngày 10/3.' },
    c_ishigami_leave: { title: 'Buổi sáng vắng mặt', icon: '📋', type: 'evidence',
      desc: 'Sổ trực của trường ghi Ishigami xin nghỉ buổi sáng ngày 10/3 — lần đầu tiên trong nhiều năm người thầy này vắng mặt.' },
    c_exam: { title: 'Đề kiểm tra của Ishigami', icon: '📐', type: 'evidence',
      desc: 'Ishigami ra cho học sinh một bài toán trông như đại số nhưng thực chất là hình học. Ghi chú bên lề: “Các em thua vì định kiến, không phải vì thiếu kiến thức.”' },
    c_blind_spot: { title: 'Điểm mù của định kiến', icon: '🧠', type: 'testimony',
      desc: 'Ishigami: “Người ta luôn cố giải bài toán mà họ TƯỞNG mình đang gặp, chứ không phải bài toán thật sự nằm trên giấy.”' },
    c_ishigami_route: { title: 'Lộ trình mỗi sáng', icon: '🚶', type: 'testimony',
      desc: 'Mỗi sáng Ishigami đi bộ đến trường dọc bờ sông, ngang qua khu lều của người vô gia cư. Ông mô tả họ là “những chiếc đồng hồ sống”.' },
    c_phone_log: { title: 'Nhật ký cuộc gọi', icon: '☎️', type: 'evidence',
      desc: 'Điện thoại nhà Yasuko nhận nhiều cuộc gọi ngắn từ các bốt điện thoại công cộng khác nhau, bắt đầu từ tối 9/3 và lặp lại gần như mỗi tối sau đó.' },
    c_ishigami_neighbor: { title: 'Bức tường mỏng', icon: '🧱', type: 'testimony',
      desc: 'Ishigami sống sát vách, tường mỏng đến mức gõ nhẹ cũng nghe thấy. Vậy mà ông khẳng định tối 9/3 “không nghe thấy gì cả”.' },
    c_yasuko_lie: { title: 'Lời nói dối của Yasuko', icon: '🎭', type: 'testimony',
      desc: 'Ban đầu Yasuko nói không gặp Togashi. Khi bị đối chất, cô thừa nhận ông ta đến tiệm ngày 9/3, “nhưng tôi đã đuổi ông ta đi”.' },
    c_too_perfect: { title: 'Một lời kể quá trơn tru', icon: '📜', type: 'testimony',
      desc: 'Yasuko kể lại suất phim tối 10/3 trôi chảy đến từng chi tiết — giờ chiếu, chỗ ngồi, cảnh kết — như bài đã học thuộc.' },
    c_misato_nervous: { title: 'Phản ứng của Misato', icon: '😰', type: 'testimony',
      desc: 'Khi nhìn thấy dây bàn sưởi, Misato cứng người, siết chặt mép váy và không nói được câu nào.' },
    c_threat_letters: { title: 'Thư nặc danh', icon: '✉️', type: 'evidence',
      desc: 'Kudo nhận được thư nặc danh cảnh cáo tránh xa Yasuko, kèm ảnh chụp lén hai người. Văn phong lạnh lùng, chính xác như một bản chứng minh.' },

    i_staged_identity: { title: 'Danh tính được bày sẵn', icon: '🧩', type: 'insight',
      desc: 'Hung thủ xóa mặt và vân tay, nhưng lại để lại xe đạp có vân tay và quần áo cháy dở. Hắn KHÔNG muốn che giấu danh tính — hắn muốn cảnh sát tìm ra danh tính chậm rãi, theo đúng lộ trình hắn vạch sẵn.' },
    i_body_doubt: { title: '“Người ở phòng trọ” ≠ Togashi?', icon: '🧩', type: 'insight',
      desc: 'Tóc và vân tay chỉ chứng minh: người từng ở phòng trọ chính là người chết. Không có gì chứng minh người đó là Togashi — nhân viên còn không nhận ra mặt khách.' },
    i_real_victim: { title: 'Nạn nhân thật sự', icon: '🧩', type: 'insight',
      desc: 'Thi thể bờ sông là “ông Kỹ sư” — người vô gia cư không ai tìm kiếm. Ông ta được đưa vào phòng trọ của Togashi để để lại tóc và vân tay, rồi bị giết.' },
    i_killed_9th: { title: 'Cái chết ngày 9/3', icon: '🧩', type: 'insight',
      desc: 'Togashi tìm đến Yasuko chiều 9/3; ngay hôm sau cô mua dây bàn sưởi mới. Togashi rất có thể đã chết tối 9/3 tại căn hộ nhà Hanaoka — siết cổ bằng dây kotatsu.' },
    i_ishigami_helper: { title: 'Người dẫn đường', icon: '🧩', type: 'insight',
      desc: 'Từ tối 9/3, có người gọi cho Yasuko mỗi tối từ bốt điện thoại — để không lưu dấu vết. Người hàng xóm “không nghe thấy gì” chính là người chỉ dẫn hai mẹ con từng bước.' },
    i_alibi_trap: { title: 'Bài toán ngụy trang', icon: '🧩', type: 'insight',
      desc: 'Đừng cố phá bằng chứng ngoại phạm — nó là thật. Cảnh sát đang giải sai bài toán: cái chết của Togashi không nằm trong tối 10/3. Ngày 10/3 chỉ là ngày của một vụ án KHÁC.' },
    i_ishigami_10th: { title: 'Buổi sáng của vụ án thứ hai', icon: '🧩', type: 'insight',
      desc: 'Ishigami nghỉ buổi sáng 10/3 — đúng ngày “ông Kỹ sư” biến mất, đúng sáng chiếc xe đạp bị lấy cắp. Ông ta có thời gian và có lộ trình quen thuộc ngang qua khu lều.' }
  },
  locations: [
    { id: 'river', name: 'Bờ sông Kyu-Edogawa', icon: '🌊',
      desc: 'Gió tháng Ba lạnh buốt. Băng vàng của cảnh sát vẫn còn quấn quanh bãi cỏ ven sông.',
      points: [
        { id: 'p_body', name: 'Vị trí thi thể', clue: 'c_body',
          text: 'Pháp y lật tấm bạt. Khuôn mặt nạn nhân đã không còn nhận ra được, các đầu ngón tay cháy sém. Vết hằn trên cổ cho thấy bị siết bằng dây.' },
        { id: 'p_clothes', name: 'Đống tro cạnh lối mòn', clue: 'c_clothes',
          text: 'Áo khoác, quần, áo len — cháy loang lổ rồi tắt. Một kẻ cẩn thận đến đáng sợ lại bỏ dở một việc đơn giản như thế?' },
        { id: 'p_bike', name: 'Chiếc xe đạp dựng ở bụi cây', clue: 'c_bike',
          text: 'Một chiếc xe đạp nữ màu bạc, lốp xẹp. Giám định viên phủi bột: “Có vân tay rõ ràng đây.”' },
        { id: 'p_bridge', name: 'Khu lều bạt dưới chân cầu', clue: 'c_missing_homeless',
          text: 'Những túp lều xanh xếp thẳng hàng. Một ông lão đang ép vỏ lon: “Ông Kỹ sư á? Mới đến được vài tuần. Từ hôm mồng 10 chẳng thấy đâu nữa. Người như bọn tôi biến mất thì ai mà để ý.”' }
      ] },
    { id: 'inn', name: 'Nhà trọ Ogiya', icon: '🏨',
      desc: 'Một nhà trọ rẻ tiền gần ga, khách chủ yếu trả theo ngày.',
      points: [
        { id: 'p_room', name: 'Phòng Togashi đã thuê', clue: 'c_inn_room',
          text: 'Căn phòng sáu chiếu. Tổ giám định thu được vài sợi tóc trên gối và vân tay trên cốc nước.' },
        { id: 'p_staff', name: 'Hỏi nhân viên lễ tân', clue: 'c_inn_staff',
          text: 'Cậu nhân viên gãi đầu: “Khách ở đây ai cũng đội mũ, cúi mặt… Em không dám chắc đâu.”' }
      ] },
    { id: 'bento', name: 'Tiệm cơm hộp Benten-tei', icon: '🍱',
      desc: 'Mùi cơm mới nấu, tiếng máy tính tiền lách cách. Yasuko hôm nay nghỉ làm.',
      points: [
        { id: 'p_coworker', name: 'Hỏi đồng nghiệp của Yasuko', clue: 'c_togashi_visit',
          text: 'Cô nhân viên nhìn tấm ảnh rồi gật mạnh: “Đúng ông này! Chiều mồng 9 ông ta đến hỏi chị Yasuko. Mặt chị ấy trắng bệch luôn.”' },
        { id: 'p_regular', name: 'Hỏi về khách quen', clue: 'c_bento_daily',
          text: 'Bà chủ tiệm cười: “Thầy Ishigami ấy à? Sáng nào cũng đến, chỉ mua khi Yasuko đứng quầy thôi.”' },
        { id: 'p_owner', name: 'Hỏi bà chủ về bạn bè của Yasuko', clue: 'c_kudo',
          text: '“Có ông Kudo, chủ xưởng in, quen Yasuko từ hồi cô ấy còn làm quán bar. Dạo này hai người hay đi ăn với nhau.”' }
      ] },
    { id: 'apartment', name: 'Căn hộ nhà Hanaoka', icon: '🏠',
      desc: 'Căn hộ nhỏ, gọn gàng đến mức gần như không có hơi người.',
      points: [
        { id: 'p_living', name: 'Bàn sưởi kotatsu', clue: 'c_kotatsu',
          text: 'Chiếc kotatsu cũ nhưng sợi dây điện thì mới tinh, còn nếp gấp của bao bì. Trong tủ có hóa đơn: ngày 10/3.' },
        { id: 'p_drawer', name: 'Ngăn kéo tủ đầu giường', clue: 'c_movie_stubs',
          text: 'Yasuko chủ động mở ngăn kéo: “Đây, vé xem phim tối hôm đó.” Hai cuống vé được kẹp ngay ngắn trong tờ rơi.' },
        { id: 'p_wall', name: 'Bức tường giáp nhà bên',
          text: 'Bạn gõ nhẹ lên tường. Âm thanh vọng sang rất rõ. Phía bên kia là căn hộ của thầy giáo Ishigami.' }
      ] },
    { id: 'school', name: 'Trường trung học tư thục', icon: '🏫',
      desc: 'Ishigami dạy toán ở đây. Đồng nghiệp gọi ông là “Đức Phật đá”.',
      points: [
        { id: 'p_staffroom', name: 'Sổ trực phòng giáo viên', clue: 'c_ishigami_leave',
          text: 'Thầy hiệu phó lật sổ: “Thầy Ishigami xin nghỉ buổi sáng ngày 10. Lạ thật, mười mấy năm nay thầy ấy chưa nghỉ buổi nào.”' },
        { id: 'p_exam', name: 'Bàn làm việc của Ishigami', clue: 'c_exam',
          text: 'Một tập đề kiểm tra vừa chấm xong. Bài cuối gần như cả lớp sai — một bài “đại số” mà lời giải lại là hình học.' }
      ] },
    { id: 'kinshicho', name: 'Rạp phim & quán karaoke Kinshicho', icon: '🎤',
      desc: 'Khu giải trí đông đúc. Nếu hai mẹ con nói thật, họ đã ở đây tối 10/3.',
      points: [
        { id: 'p_karaoke', name: 'Quầy lễ tân quán karaoke', clue: 'c_karaoke',
          text: 'Nhân viên lục lại sổ: “Phòng số 6, hai người, vào lúc 21 giờ 40. Cô bé hát hay lắm, em nhớ mà.”' },
        { id: 'p_cinema', name: 'Rạp chiếu phim',
          text: 'Rạp không có camera ở lối vào phòng chiếu, và không ai nhớ nổi khuôn mặt khán giả của một suất phim thường ngày.' }
      ] },
    { id: 'hq', name: 'Phòng kỹ thuật — Sở Cảnh sát', icon: '🗂️',
      desc: 'Nơi tổng hợp các báo cáo giám định và dữ liệu viễn thông.',
      requires: ['c_alibi_story'],
      points: [
        { id: 'p_phone', name: 'Dữ liệu cuộc gọi nhà Hanaoka', clue: 'c_phone_log',
          text: 'Một loạt cuộc gọi đến, mỗi cuộc chỉ vài phút, từ những bốt điện thoại công cộng khác nhau. Cuộc đầu tiên: khoảng 20 giờ tối 9/3.' },
        { id: 'p_autopsy', name: 'Báo cáo khám nghiệm bổ sung',
          text: 'Không có dấu hiệu chống cự mạnh. Nạn nhân có vẻ suy dinh dưỡng nhẹ và da tay thô ráp — không giống lắm một kẻ ăn bám sống nhờ cờ bạc.' }
      ] }
  ],
  suspects: [
    { id: 'yasuko', name: 'Hanaoka Yasuko', age: 37, avatar: '靖', color: '#b5838d',
      role: 'Vợ cũ của Togashi · nhân viên tiệm Benten-tei',
      bio: 'Từng làm hostess ở một quán bar, ly hôn với Togashi sau nhiều năm bị bạo hành. Bình thản, lễ phép — có lẽ hơi quá bình thản.',
      intro: 'Yasuko cúi chào, hai tay đặt ngay ngắn trên đùi. “Tôi sẽ trả lời mọi điều các anh cần.”',
      topics: [
        { id: 't_alibi', label: 'Tối 10/3 chị ở đâu?', clue: 'c_alibi_story', lines: [
          ['me', 'Tối ngày 10 tháng 3, chị ở đâu?'],
          ['them', 'Tôi và Misato đi xem phim ở Kinshicho. Sau đó ăn mì ramen, rồi đi hát karaoke. Về nhà chắc gần nửa đêm.'] ] },
        { id: 't_togashi', label: 'Quan hệ với Togashi', lines: [
          ['me', 'Chị và Togashi ly hôn bao lâu rồi?'],
          ['them', 'Năm năm. Anh ta… đánh tôi. Tôi đã chuyển nhà nhiều lần để anh ta không tìm thấy.'],
          ['them', 'Chuyện anh ta chết… nói thật, tôi không thấy buồn. Nhưng tôi không làm gì cả.'] ] },
        { id: 't_day9', label: 'Ngày 9/3 có gì đặc biệt?', lines: [
          ['me', 'Còn ngày 9 thì sao?'],
          ['them', 'Ngày 9 ư? Tôi đi làm rồi về nhà nấu cơm. Không có gì đặc biệt.'],
          ['narr', 'Câu trả lời đến hơi nhanh.'] ] },
        { id: 't_ishigami', label: 'Về người hàng xóm Ishigami', lines: [
          ['me', 'Chị có thân với thầy Ishigami bên cạnh không?'],
          ['them', 'Thầy ấy là khách quen ở tiệm. Gặp nhau thì chào hỏi thôi ạ.'],
          ['narr', 'Ánh mắt cô thoáng liếc về phía bức tường.'] ] }
      ],
      presents: {
        c_togashi_visit: { clue: 'c_yasuko_lie', lines: [
          ['me', 'Đồng nghiệp chị nói Togashi đã đến tiệm tìm chị chiều 9/3.'],
          ['them', '…'],
          ['them', 'Vâng. Anh ta đến xin tiền. Tôi đưa cho anh ta ít tiền rồi đuổi đi. Tôi không muốn nhắc lại chuyện đó, nên mới nói dối. Xin lỗi.'] ] },
        c_movie_stubs: { clue: 'c_too_perfect', lines: [
          ['me', 'Chị kể lại bộ phim hôm đó được không?'],
          ['them', 'Suất 19 giờ, hàng G, ghế 11 và 12. Phim kết thúc khi nhân vật chính lên chuyến tàu cuối… Misato khóc ở đoạn đó.'],
          ['narr', 'Từng chi tiết khớp như một chiếc đồng hồ. Quá khớp.'] ] },
        c_kotatsu: { lines: [
          ['me', 'Dây bàn sưởi nhà chị mới mua?'],
          ['them', 'Dây cũ bị chập điện, tôi sợ cháy nên thay. Có vấn đề gì sao ạ?'] ] },
        c_phone_log: { lines: [
          ['me', 'Tối nào cũng có người gọi cho chị từ bốt điện thoại công cộng. Là ai?'],
          ['them', 'Tôi… không nhớ. Có lẽ là gọi nhầm số.'] ] },
        c_threat_letters: { lines: [
          ['me', 'Anh Kudo nhận được thư nặc danh dọa anh ấy tránh xa chị.'],
          ['them', 'Sao… sao lại có người làm thế?'],
          ['narr', 'Lần này, nỗi sợ trên mặt cô là thật.'] ] }
      },
      defaultPresent: 'Yasuko nhìn món đồ, rồi nhìn bạn. “Tôi không hiểu cái này liên quan gì đến tôi.”'
    },
    { id: 'misato', name: 'Hanaoka Misato', age: 14, avatar: '美', color: '#9a8c98',
      role: 'Con gái Yasuko · học sinh cấp hai',
      bio: 'Ít nói, ngoan ngoãn. Thành viên câu lạc bộ cầu lông. Không phải con ruột của Togashi.',
      intro: 'Misato ngồi sát mép ghế, mắt nhìn xuống sàn.',
      topics: [
        { id: 't_movie', label: 'Bộ phim tối 10/3', lines: [
          ['me', 'Em kể về bộ phim tối hôm đó đi.'],
          ['them', 'Dạ… phim hay ạ. Đoạn cuối buồn lắm.'],
          ['them', 'Rồi mẹ con em đi ăn ramen, rồi hát karaoke.'],
          ['narr', 'Cô bé nói như đọc lại một đoạn văn.'] ] },
        { id: 't_togashi_m', label: 'Về ông Togashi', lines: [
          ['me', 'Em có biết ông Togashi không?'],
          ['them', 'Ông ta không phải bố em.'],
          ['narr', 'Giọng cô bé lạnh hẳn đi.'] ] },
        { id: 't_school_m', label: 'Chuyện ở trường', lines: [
          ['me', 'Dạo này ở trường thế nào?'],
          ['them', 'Bình thường ạ. Em vẫn đi tập cầu lông.'] ] }
      ],
      presents: {
        c_kotatsu: { clue: 'c_misato_nervous', lines: [
          ['me', 'Bàn sưởi nhà em mới thay dây điện à?'],
          ['narr', 'Misato cứng đờ. Hai bàn tay siết chặt mép váy.'],
          ['them', 'Em… em không biết. Mẹ em thay.'] ] },
        c_movie_stubs: { lines: [
          ['them', 'Vé của mẹ con em ạ. Mẹ bảo giữ lại làm kỷ niệm.'] ] }
      },
      defaultPresent: 'Misato lắc đầu khe khẽ. “Em không biết ạ.”'
    },
    { id: 'ishigami', name: 'Ishigami Tetsuya', age: 43, avatar: '石', color: '#4a4e69',
      role: 'Giáo viên toán · hàng xóm sát vách nhà Hanaoka',
      bio: 'Từng được coi là thiên tài toán học trẻ nhất khóa ở Đại học Teito. Vì hoàn cảnh gia đình, ông từ bỏ con đường nghiên cứu để đi dạy trung học.',
      intro: 'Ishigami ngồi thẳng lưng, gương mặt bất động. “Tôi có hai mươi phút trước tiết dạy.”',
      topics: [
        { id: 't_neighbor', label: 'Tối 9/3 anh có nghe thấy gì?', clue: 'c_ishigami_neighbor', lines: [
          ['me', 'Tối 9/3, anh có nghe thấy tiếng động gì từ nhà bên không?'],
          ['them', 'Không. Tôi giải toán đến khuya. Khi tập trung, tôi không nghe thấy gì cả.'] ] },
        { id: 't_night10', label: 'Tối 10/3 anh làm gì?', lines: [
          ['me', 'Còn tối 10/3?'],
          ['them', 'Ở nhà. Một mình. Tôi hiểu đó không phải bằng chứng ngoại phạm tốt.'] ] },
        { id: 't_yukawa', label: 'Về Yukawa', lines: [
          ['me', 'Anh và Yukawa là bạn học?'],
          ['them', 'Cậu ấy học vật lý, tôi học toán. Chúng tôi là hai người duy nhất trong khoa không thấy chán khi nói chuyện với nhau.'] ] },
        { id: 't_math', label: 'Một câu hỏi toán học', lines: [
          ['them', 'Cho tôi hỏi anh một câu. Tự nghĩ ra một bài toán mà không ai giải được, và giải một bài toán như thế — việc nào khó hơn?'],
          ['me', '…Tôi không biết.'],
          ['them', 'Yukawa sẽ biết.'] ] }
      ],
      presents: {
        c_exam: { clue: 'c_blind_spot', lines: [
          ['me', 'Đề kiểm tra này, gần như cả lớp làm sai.'],
          ['them', 'Vì chúng nhìn thấy ký hiệu đại số và lập tức tin đó là bài đại số.'],
          ['them', 'Người ta luôn cố giải bài toán mà họ TƯỞNG mình đang gặp, chứ không phải bài toán thật sự nằm trên giấy.'] ] },
        c_missing_homeless: { clue: 'c_ishigami_route', lines: [
          ['me', 'Anh có hay đi ngang khu lều dưới chân cầu không?'],
          ['them', 'Mỗi sáng. Họ sống rất đều đặn — thức dậy, gom lon, phơi chăn đúng giờ. Như những chiếc đồng hồ sống.'],
          ['narr', 'Ông nói điều đó bằng giọng của một người quan sát rất, rất kỹ.'] ] },
        c_ishigami_leave: { lines: [
          ['me', 'Sáng 10/3 anh xin nghỉ.'],
          ['them', 'Tôi bị đau đầu. Ở tuổi này chuyện đó bình thường.'] ] },
        c_phone_log: { lines: [
          ['them', 'Ở khu này nhiều người không có điện thoại di động. Bốt điện thoại công cộng vẫn được dùng thường xuyên.'] ] },
        c_threat_letters: { lines: [
          ['them', 'Văn phong của người viết rất mạch lạc. Hắn hẳn là người có học.'],
          ['narr', 'Một nụ cười rất mỏng thoáng qua rồi biến mất.'] ] }
      },
      defaultPresent: 'Ishigami liếc qua. “Dữ kiện đó không đủ để đi đến kết luận nào.”'
    },
    { id: 'kudo', name: 'Kudo Kuniaki', age: 45, avatar: '工', color: '#6d6875',
      role: 'Chủ xưởng in · người đang hẹn hò với Yasuko',
      bio: 'Lịch thiệp, vợ mất vài năm trước. Quen Yasuko từ thời cô làm ở quán bar.',
      intro: 'Kudo chỉnh lại cà vạt. “Nếu là chuyện của Yasuko, tôi sẵn sàng giúp.”',
      topics: [
        { id: 't_relation_k', label: 'Quan hệ với Yasuko', lines: [
          ['them', 'Chúng tôi mới gặp lại nhau. Cô ấy đã khổ quá nhiều, tôi chỉ muốn cô ấy được bình yên.'] ] },
        { id: 't_alibi_k', label: 'Tối 10/3 anh ở đâu?', lines: [
          ['them', 'Ở xưởng in đến 23 giờ để kịp đơn hàng. Có bốn nhân viên làm cùng.'],
          ['narr', 'Bằng chứng ngoại phạm của Kudo được xác minh nhanh chóng.'] ] },
        { id: 't_letters', label: 'Có gì bất thường gần đây?', clue: 'c_threat_letters', lines: [
          ['them', 'Thật ra… tôi nhận được mấy lá thư nặc danh. Bảo tôi tránh xa Yasuko, kèm ảnh chụp lén.'],
          ['them', 'Ai đó đã theo dõi chúng tôi.'] ] }
      ],
      presents: {
        c_bento_daily: { lines: [
          ['them', 'Ông thầy giáo đó à? Tôi từng thấy ông ta đứng ở cầu thang nhìn theo Yasuko. Hơi rợn người.'] ] }
      },
      defaultPresent: 'Kudo cau mày. “Xin lỗi, tôi không giúp được gì về chuyện này.”'
    }
  ],
  combos: [
    { a: 'c_body', b: 'c_bike', result: 'i_staged_identity' },
    { a: 'c_body', b: 'c_clothes', result: 'i_staged_identity' },
    { a: 'c_inn_room', b: 'i_staged_identity', result: 'i_body_doubt' },
    { a: 'c_inn_staff', b: 'i_staged_identity', result: 'i_body_doubt' },
    { a: 'c_missing_homeless', b: 'i_body_doubt', result: 'i_real_victim' },
    { a: 'c_togashi_visit', b: 'c_kotatsu', result: 'i_killed_9th' },
    { a: 'c_yasuko_lie', b: 'c_kotatsu', result: 'i_killed_9th' },
    { a: 'c_phone_log', b: 'c_ishigami_neighbor', result: 'i_ishigami_helper' },
    { a: 'c_too_perfect', b: 'c_blind_spot', result: 'i_alibi_trap' },
    { a: 'c_karaoke', b: 'c_blind_spot', result: 'i_alibi_trap' },
    { a: 'c_ishigami_leave', b: 'i_real_victim', result: 'i_ishigami_10th' }
  ],
  hints: [
    { until: 'i_staged_identity', text: 'Hung thủ đập nát mặt, đốt vân tay… nhưng lại để lại một chiếc xe đạp đầy vân tay. Hãy đặt hai sự thật đó cạnh nhau trong sổ tay.' },
    { until: 'c_inn_room', text: 'Vân tay trên xe đạp được đối chiếu với một căn phòng trọ. Cậu đã đến đó chưa?' },
    { until: 'i_body_doubt', text: 'Mẫu tóc trong phòng trọ khớp với thi thể. Câu hỏi là: nó chứng minh điều gì — và KHÔNG chứng minh điều gì?' },
    { until: 'c_missing_homeless', text: 'Ở bờ sông có những người mà xã hội không bao giờ đếm. Đã ai hỏi họ chưa?' },
    { until: 'i_real_victim', text: 'Nếu người chết không phải Togashi, thì ai là người có thể biến mất mà không ai báo cảnh sát?' },
    { until: 'i_killed_9th', text: 'Mọi người đều hỏi về ngày 10. Togashi lần cuối được nhìn thấy khi nào, ở đâu? Và căn hộ kia có thứ gì vừa được thay mới?' },
    { until: 'c_blind_spot', text: 'Ishigami là người ra đề. Hãy hỏi ông ta về chính đề kiểm tra của mình.' },
    { until: 'i_alibi_trap', text: 'Một bài toán hình học ngụy trang thành đại số. Nếu bằng chứng ngoại phạm là thật thì sao — cậu đang giải đúng bài toán chứ?' },
    { until: 'i_ishigami_helper', text: 'Cuộc gọi từ bốt điện thoại bắt đầu đúng tối 9/3. Ai ở gần đến mức biết chuyện ngay đêm đó?' },
    { until: 'i_ishigami_10th', text: 'Sáng 10/3, có một người lần đầu tiên sau nhiều năm vắng mặt ở nơi làm việc.' }
  ],
  finalHint: 'Cậu đã có đủ dữ kiện. Một bài toán đẹp luôn có lời giải duy nhất — hãy đến Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Thi thể ở bờ sông Kyu-Edogawa thực sự là ai?',
      options: ['Togashi Shinji', 'Người vô gia cư được gọi là “ông Kỹ sư”', 'Kudo Kuniaki', 'Một vị khách lạ ở nhà trọ Ogiya'],
      answer: 1, support: ['i_real_victim', 'c_missing_homeless', 'i_body_doubt'] },
    { id: 'q2', q: 'Togashi Shinji thực sự chết khi nào và ở đâu?',
      options: ['Tối 10/3, tại bờ sông', 'Tối 9/3, tại căn hộ nhà Hanaoka', 'Sáng 10/3, tại nhà trọ Ogiya', 'Hắn vẫn còn sống và đang lẩn trốn'],
      answer: 1, support: ['i_killed_9th', 'c_togashi_visit', 'c_kotatsu', 'c_yasuko_lie'] },
    { id: 'q3', q: 'Ai đã gây ra cái chết của Togashi?',
      options: ['Ishigami Tetsuya', 'Hanaoka Yasuko và con gái Misato', 'Kudo Kuniaki', 'Togashi tự tử'],
      answer: 1, support: ['i_killed_9th', 'c_misato_nervous', 'c_kotatsu'] },
    { id: 'q4', q: 'Ai đã giết người đàn ông ở bờ sông?',
      options: ['Hanaoka Yasuko', 'Hanaoka Misato', 'Ishigami Tetsuya', 'Kudo Kuniaki'],
      answer: 2, support: ['i_ishigami_10th', 'c_ishigami_leave', 'c_ishigami_route'] },
    { id: 'q5', q: 'Vì sao bằng chứng ngoại phạm tối 10/3 của hai mẹ con hoàn hảo?',
      options: ['Họ mua chuộc nhân viên karaoke', 'Ishigami làm giả cuống vé và lời khai', 'Vì nó là thật — vụ án ngày 10/3 là vụ án thứ hai do Ishigami thực hiện, khiến cảnh sát đặt sai thời điểm chết của Togashi', 'Rạp phim chiếu nhầm giờ hôm đó'],
      answer: 2, support: ['i_alibi_trap', 'c_karaoke', 'c_blind_spot'] },
    { id: 'q6', q: 'Động cơ của Ishigami là gì?',
      options: ['Tiền bảo hiểm của Togashi', 'Ghen tuông với Kudo', 'Một tình yêu thầm lặng, tuyệt đối — sự tận hiến cho hai mẹ con đã vô tình kéo ông khỏi ý định tự tử', 'Bị Togashi tống tiền'],
      answer: 2, support: ['c_bento_daily', 'i_ishigami_helper'] }
  ],
  truth: [
    'Chiều 9/3, Togashi tìm đến Benten-tei rồi theo Yasuko về căn hộ, đòi tiền và đe dọa. Khi hắn quay sang Misato, cô bé dùng bình hoa đánh vào đầu hắn; trong cơn hoảng loạn, Yasuko siết cổ hắn bằng dây bàn sưởi kotatsu. Togashi chết ngay trong căn hộ.',
    'Ishigami ở sát vách nghe thấy tất cả. Ông gõ cửa và đề nghị giúp đỡ — rồi biến vụ án thành một bài toán. Từ đêm đó, ông chỉ dẫn hai mẹ con qua những cuộc gọi từ bốt điện thoại công cộng, không để lại liên hệ nào giữa họ.',
    'Ông không giấu xác Togashi theo cách thông thường. Ông tạo ra một “Togashi” thứ hai. Sáng 10/3, Ishigami xin nghỉ dạy, tiếp cận “ông Kỹ sư” — người vô gia cư mới đến mà không ai tìm kiếm — cho ông ta ở phòng trọ Togashi đã thuê để để lại tóc và vân tay, rồi giết ông ta ở bờ sông. Ông đập nát mặt, đốt vân tay, nhưng cố tình bỏ lại xe đạp và quần áo cháy dở để cảnh sát nhận diện được “Togashi”.',
    'Thi thể thật của Togashi bị ông xử lý kín đáo. Cảnh sát vì thế tin Togashi chết ngày 10/3 — chính ngày Ishigami dặn hai mẹ con đi xem phim, ăn mì, hát karaoke và giữ lại cuống vé. Bằng chứng ngoại phạm là thật. Cảnh sát chỉ đang giải sai bài toán: một bài hình học được ngụy trang thành bài đại số.',
    'Khi Yukawa tiến sát sự thật, Ishigami tự thú — nhận mình là kẻ đeo bám Yasuko và đã một mình giết “Togashi”, dùng những lá thư nặc danh gửi Kudo làm bằng chứng. Ông sẵn sàng vào tù vì một vụ án mà sự thật của nó sẽ chẳng ai biết đến.',
    'Lý do? Một năm trước, khi Ishigami đã chuẩn bị sẵn sợi dây thừng để kết thúc cuộc đời mình, tiếng chuông cửa của hai mẹ con vừa chuyển đến chào hỏi đã kéo ông trở lại. Với ông, họ là lời giải đẹp nhất của cuộc sống. Sự tận hiến ấy là bài toán mà ông tin rằng không ai giải được — cho đến khi gặp lại Yukawa.'
  ],
  sourceNote: 'Tiểu thuyết đoạt Giải Naoki lần thứ 134 và được xem là đỉnh cao của series Galileo. Đã được chuyển thể thành phim tại Nhật Bản (2008), Hàn Quốc và Trung Quốc. Bản tiếng Việt: “Phía sau nghi can X”.'
});
