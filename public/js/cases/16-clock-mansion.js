/* =========================================================================
 * VỤ ÁN 16 — BIỆT THỰ ĐỒNG HỒ
 * Phỏng theo 時計館の殺人 (Tokeikan no Satsujin, 1991) — Ayatsuji Yukito
 * Series Biệt Thự (Yakata) — Shimada Kiyoshi
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'clock-mansion',
  order: 16,
  collection: 'shin-honkaku',
  author: 'Ayatsuji Yukito',
  title: 'Biệt Thự Đồng Hồ',
  original: '時計館の殺人 · 1991 · Ayatsuji Yukito (Shin-Honkaku)',
  kanji: '時',
  theme: { a: '#1c1917', b: '#b45309', accent: '#fbbf24' },
  difficulty: 5,
  par: 40,
  tagline: 'Trong tòa lâu đài không một ô cửa sổ, 108 chiếc đồng hồ cổ đang âm thầm đánh cắp thời gian của bạn.',
  playerRole: 'Bạn là Kawaminami Takaaki — biên tập viên trẻ đồng hành cùng nhà nghiên cứu thám tử Shimada Kiyoshi khám phá công trình kỳ dị nhất của kiến trúc sư Nakamura Seiji.',
  partner: {
    name: 'Shimada Kiyoshi',
    title: 'Thám tử nghiệp dư — Chuyên gia giải mã kiến trúc Nakamura Seiji',
    avatar: '島',
    color: '#b45309'
  },
  briefing: [
    'Nằm sâu trong rừng rậm Kamakura là “Biệt Thự Đồng Hồ” — công trình kỳ quái do kiến trúc sư Nakamura Seiji thiết kế cho cố chủ tịch tập đoàn đồng hồ Furuhato để tưởng nhớ người con gái đoản mệnh Towa.',
    'Dinh thự được chia làm hai khu vực tách biệt: Khu Biệt Thự Mới (ở bên ngoài, có Tháp Đồng Hồ cao vút) và Khu Biệt Thự Cũ — một pháo đài đá chứa 108 chiếc đồng hồ cổ hoạt động liên tục và tuyệt đối KHÔNG CÓ MỘT Ô CỬA SỔ NÀO thông ra thế giới bên ngoài.',
    'Tám thành viên đoàn tạp chí tâm linh CHAOS và Câu lạc bộ Nghiên cứu Đại học W tự nguyện khóa chặt cửa thép từ bên trong Khu Biệt Thự Cũ suốt 3 ngày đêm để thực hiện nghi lễ gọi hồn thiếu nữ Towa. Thế nhưng một kẻ sát nhân vô hình đã lần lượt tàn sát 5 người bên trong theo đúng lời tiên tri đẫm máu.',
    'Nghịch lý lớn nhất làm đau đầu cảnh sát: Theo cuốn nhật ký của người sống sót bên trong Biệt Thự Cũ, hung thủ ra tay vào lúc “23:00 đêm ngày thứ 3” — nhưng đúng vào lúc 23:00 đêm ngày thứ 3 ấy, nghi phạm duy nhất ở bên ngoài là nữ quản gia trẻ Kazumi lại đang đứng trò chuyện trực tiếp cùng bạn và thám tử Shimada Kiyoshi ngay dưới chân Tháp Đồng Hồ!'
  ],
  clues: {
    c_windowless_old_wing: { title: 'Kiến trúc Biệt Thự Cũ: Không cửa sổ & Thu giữ đồng hồ cá nhân', icon: '🏰', type: 'evidence',
      desc: 'Toàn bộ Khu Biệt Thự Cũ hoàn toàn không có cửa sổ đón ánh mặt trời, đèn điện bật sáng 24/24. Trước khi bước vào 3 ngày cầu hồn, tất cả các vị khách đều bị yêu cầu tháo đồng hồ đeo tay cất vào hộp khóa ngoài sảnh để “tránh nhiễu từ trường tâm linh”.' },
    c_108_clocks_sync: { title: 'Trục điều tốc trung tâm của 108 chiếc đồng hồ chạy nhanh 20%', icon: '⚙️', type: 'evidence',
      desc: 'Shimada tháo mặt sau chiếc đồng hồ ông nội lớn nhất trong phòng khách Biệt Thự Cũ và phát hiện mạng lưới cáp đồng bộ ngầm trong tường: Cả 108 chiếc đồng hồ trong nhà đều được chỉnh chạy NHANH HƠN 1.2 LẦN so với giờ chuẩn (cứ 20 giờ thực tế = 24 giờ trên mặt đồng hồ)!' },
    c_12hour_gap_diary: { title: 'Độ lệch thời gian 12 tiếng giữa Trong và Ngoài sau 3 ngày', icon: '⏳', type: 'evidence',
      desc: 'Nhật ký của sinh viên Kouchi bên trong Biệt Thự Cũ ghi vụ thảm sát cuối diễn ra lúc “23:00 đêm ngày thứ 3” (tức 72 giờ trên đồng hồ trong nhà). Nhưng vì mỗi ngày trong nhà bị rút ngắn mất 4 tiếng (20 giờ thực = 1 ngày ảo), sau 3 ngày thời gian bên trong đã chạy trước bên ngoài đúng 12 TIẾNG ĐỒNG HỒ!' },
    c_secret_stream_tunnel: { title: 'Đường hầm ngầm dưới lòng suối nối hai khu biệt thự', icon: '🕳️', type: 'evidence',
      desc: 'Dưới chân chiếc đồng hồ ông nội số 13 trong Biệt Thự Cũ có một cầu thang đá bí mật dẫn xuyên qua lòng suối cạn sang tầng hầm của Tháp Đồng Hồ bên ngoài — cho phép người am hiểu dinh thự tự do ra vào mật thất!' },
    c_tower_fall_23pm: { title: 'Cái chết của Watanabe rơi từ Tháp Đồng Hồ lúc 23:00 đêm thực tế', icon: '🗼', type: 'evidence',
      desc: 'Đúng 23:00 đêm theo đồng hồ chuẩn của Shimada ở bên ngoài, thi thể nạn nhân Watanabe rơi từ đỉnh Tháp Đồng Hồ xuống đất ngay khi Kazumi đang đứng cạnh Shimada dưới sân!' },
    c_tower_minute_hand: { title: 'Sợi dây cước trên kim phút khổng lồ của Tháp Đồng Hồ', icon: '🕰️', type: 'evidence',
      desc: 'Khám xét đỉnh Tháp Đồng Hồ: Trên kim phút dài 2 mét ngoài mặt tháp có vết máu và rãnh dây cước! Watanabe đã bị đánh bất tỉnh và đặt trên bệ cửa tháp từ buổi chiều; khi đồng hồ điểm 23:00 đêm, kim phút quay tới đỉnh đã kéo căng dây đẩy thi thể rơi xuống trước mặt Shimada!' },
    c_towa_birth_record: { title: 'Bí mật thân phận thật sự giữa “Kazumi” và “Towa”', icon: '📜', type: 'evidence',
      desc: 'Hồ sơ y tế và nhật ký gia tộc Furuhato tiết lộ: Người chết vì bạo bệnh năm xưa thực chất là người chị em cùng cha khác mẹ, còn cô gái đang sống dưới thân phận “quản gia Kazumi” chính là tiểu thư Furuhato Towa thật sự!' },
    c_chaos_motive: { title: 'Mối thù với đoàn tạp chí CHAOS và bác sĩ riêng', icon: '🥀', type: 'testimony',
      desc: 'Đoàn phóng viên tạp chí CHAOS và gã bác sĩ gia đình không chỉ trục lợi trên cái chết của mẹ Towa mà còn gián tiếp gây ra vụ tai nạn cướp đi người yêu của cô — khiến Towa quyết định biến Biệt Thự Đồng Hồ thành cỗ máy hành quyết!' },

    i_20hour_day_illusion: { title: 'Vương quốc 20 giờ — Đánh cắp nhịp sinh học', icon: '🧩', type: 'insight',
      desc: 'Khi bị nhốt trong không gian không ánh mặt trời và không có đồng hồ cá nhân, con người hoàn toàn phụ thuộc vào 108 chiếc đồng hồ trên tường. Việc chỉnh toàn bộ đồng hồ chạy nhanh 20% khiến các nạn nhân sống trong “một ngày chỉ có 20 tiếng” mà không hề nhận ra!' },
    i_12hour_alibi_trick: { title: 'Khoảng trống ngoại phạm 12 tiếng (11:00 trưa vs 23:00 đêm)', icon: '🧩', type: 'insight',
      desc: 'Sau 60 giờ thực tế, đồng hồ trong Biệt Thự Cũ đã quay đủ 72 giờ (3 ngày). Lúc nhật ký bên trong ghi “23:00 đêm ngày thứ 3” thực chất ở thế giới bên ngoài mới là “11:00 TRƯA ngày thứ 3” — hung thủ đã giết xong các nạn nhân từ buổi trưa rồi đi qua hầm ngầm ra ngoài uống trà với Shimada vào buổi tối!' },
    i_kazumi_is_towa: { title: 'Kazumi (Towa) là chủ nhân cỗ máy giết người bằng thời gian', icon: '🧩', type: 'insight',
      desc: 'Furuhato Kazumi chính là tiểu thư Towa thật sự! Sau khi hoàn tất vụ thảm sát lúc 11:00 trưa nhờ quỷ kế 108 chiếc đồng hồ, cô gài bẫy cơ học trên kim phút Tháp Đồng Hồ để xác Watanabe rơi xuống lúc 23:00 đêm ngay trước mặt Shimada nhằm hoàn thiện bằng chứng ngoại phạm tuyệt đối!' }
  },
  locations: [
    { id: 'old_mansion', name: 'Khu Biệt Thự Cũ (108 Đồng Hồ Không Cửa Sổ)', icon: '🕰️',
      desc: 'Mê cung kiến trúc không một tia nắng mặt trời, nơi 108 chiếc đồng hồ cổ cùng tích tắc.',
      points: [
        { id: 'p_nowindow', name: 'Cấu trúc không cửa sổ & Tủ khóa đồng hồ cá nhân', clue: 'c_windowless_old_wing',
          text: 'Shimada gõ dọc bức tường đá: “Không một ô cửa sổ thông gió! Và cả 8 vị khách đều bị thu giữ đồng hồ đeo tay ngay từ cửa vào.”' },
        { id: 'p_sync', name: 'Hộp kỹ thuật sau chiếc Đồng Hồ Ông Nội', clue: 'c_108_clocks_sync',
          text: 'Mở tấm ốp lưng đồng hồ trung tâm, Shimada kinh ngạc: “Một mạng lưới cáp điện từ điều khiển cả 108 chiếc đồng hồ trong tòa nhà này chạy nhanh hơn chuẩn đúng 20%!”' },
        { id: 'p_diary', name: 'Cuốn nhật ký ghi giờ chết của sinh viên Kouchi', clue: 'c_12hour_gap_diary', requires: ['c_108_clocks_sync'],
          text: 'Kouchi ghi vụ tấn công cuối diễn ra lúc 23:00 đêm ngày thứ 3 theo đồng hồ trong nhà — tức là mới chỉ 11:00 trưa ngày thứ 3 ở thế giới bên ngoài!' },
        { id: 'p_tunnel', name: 'Cầu thang ngầm dưới đáy đồng hồ số 13', clue: 'c_secret_stream_tunnel',
          text: 'Xoay quả lắc đồng hồ sang vạch XIII, sàn gỗ bật mở lộ ra đường hầm xuyên qua lòng suối nối thẳng tới Tháp Đồng Hồ bên ngoài.' }
      ] },
    { id: 'clock_tower', name: 'Tháp Đồng Hồ & Khu Biệt Thự Mới', icon: '🗼',
      desc: 'Ngọn tháp đồng hồ khổng lồ bên ngoài — nơi bạn và Shimada đứng cùng Kazumi vào lúc 23:00 đêm.',
      points: [
        { id: 'p_fall', name: 'Hiện trường thi thể Watanabe rơi dưới chân tháp', clue: 'c_tower_fall_23pm',
          text: 'Đúng 23:00 đêm theo đồng hồ của Shimada, Watanabe rơi từ đỉnh tháp xuống đất ngay khi Kazumi đang đứng cạnh hai người!' },
        { id: 'p_hand', name: 'Kiểm tra kim phút khổng lồ trên đỉnh Tháp Đồng Hồ', clue: 'c_tower_minute_hand', requires: ['c_tower_fall_23pm'],
          text: 'Trên kim phút dài 2m của mặt đồng hồ tháp còn vướng đoạn dây cước dính máu: chính sức kéo của kim phút khi điểm 23:00 đã đẩy cái xác bất tỉnh từ bệ cửa rơi xuống!' }
      ] },
    { id: 'towa_room', name: 'Phòng tưởng niệm thiếu nữ Towa', icon: '🕯️',
      desc: 'Căn phòng lưu giữ di ảnh và hồ sơ gia tộc đồng hồ Furuhato.',
      points: [
        { id: 'p_birth', name: 'Hồ sơ huyết thống gia tộc Furuhato', clue: 'c_towa_birth_record',
          text: 'Những bức thư cũ của cố chủ tịch Furuhato tiết lộ: cô gái đang mang tên “quản gia Kazumi” thực chất chính là tiểu thư Furuhato Towa!' },
        { id: 'p_motive', name: 'Bài báo cũ của tạp chí CHAOS & Vụ tai nạn', clue: 'c_chaos_motive',
          text: 'Đoàn phóng viên CHAOS từng đột nhập quấy rối người mẹ đang hấp hối của Towa và gây ra vụ tai nạn cướp đi vị hôn phu của cô.' }
      ] }
  ],
  suspects: [
    { id: 'kazumi', name: 'Furuhato Kazumi (Tiểu thư Towa)', age: 23, avatar: '和', color: '#b45309',
      role: 'Người quản lý trẻ của Biệt Thự Đồng Hồ · Người thừa kế cuối cùng',
      bio: 'Vẻ ngoài dịu dàng, u buồn nhưng ẩn chứa sự căm hận sâu sắc đối với những kẻ đã chà đạp lên gia đình cô.',
      intro: 'Kazumi đứng dưới bóng Tháp Đồng Hồ, lắng nghe tiếng chuông ngân vang giữa rừng đêm Kamakura.',
      topics: [
        { id: 't_alibi_night', label: 'Về bằng chứng ngoại phạm lúc 23:00 đêm ngày thứ 3', lines: [
          ['them', 'Ngài Shimada, cuốn nhật ký bên trong Biệt Thự Cũ ghi rõ các nạn nhân bị tấn công lúc 23:00 đêm ngày thứ 3. Lúc đó tôi đang đứng trò chuyện cùng chính ngài ở ngoài sân này mà.'],
          ['partner', 'Đúng vậy, đồng hồ trên tay tôi lúc đó chỉ đúng 23:00 đêm. Nhưng đồng hồ của tôi và đồng hồ của họ không thuộc về cùng một thế giới, cô Kazumi ạ.'] ] }
      ],
      presents: {
        i_12hour_alibi_trick: { lines: [
          ['partner', 'Cô đã chỉnh hệ thống 108 chiếc đồng hồ trong khu nhà không cửa sổ chạy nhanh hơn 20% — biến mỗi ngày 24 giờ của họ thành 20 giờ thực tế!'],
          ['me', 'Sau 3 ngày (60 giờ thực = 72 giờ ảo), thời gian bên trong chạy nhanh hơn bên ngoài đúng 12 TIẾNG! Lúc họ ghi nhật ký “23:00 đêm” thực chất mới là 11:00 TRƯA ở bên ngoài — cô đã giết họ từ buổi trưa rồi đi qua hầm ngầm ra ngoài gặp chúng tôi!'],
          ['them', '…Thì ra ngài đã tìm thấy trục điều tốc phía sau chiếc đồng hồ ông nội.'] ] },
        i_kazumi_is_towa: { lines: [
          ['partner', 'Và để đánh lừa tôi rằng hung thủ vẫn đang hoạt động lúc 23:00 đêm thực tế, cô đã buộc nạn nhân cuối cùng vào kim phút trên đỉnh Tháp Đồng Hồ để kim đồng hồ tự đẩy xác xuống ngay trước mặt chúng ta, phải không tiểu thư Furuhato Towa?'],
          ['narr', 'Kazumi — hay đúng hơn là Towa — khẽ ngước nhìn mặt đồng hồ khổng lồ trên đỉnh tháp, nở nụ cười thanh thản mà bi thương.'],
          ['them', 'Trong vương quốc của 108 chiếc đồng hồ này, tôi từng nghĩ mình có thể làm chủ cả thời gian. Nhưng ngài đã đánh thức tôi khỏi giấc mộng ấy rồi, ngài Shimada ạ.'] ] }
      },
      defaultPresent: 'Kazumi khẽ lắc đầu, tiếng tích tắc của đồng hồ vang vọng quanh căn phòng.'
    },
    { id: 'kouchi', name: 'Kouchi Masaki (Sinh viên sống sót)', age: 21, avatar: '河', color: '#475569',
      role: 'Sinh viên Câu lạc bộ Nghiên cứu Tâm linh Đại học W',
      bio: 'Người duy nhất sống sót trong Khu Biệt Thự Cũ và đã ghi lại nhật ký thời gian các vụ án mạng.',
      intro: 'Kouchi ngồi trên giường cứu thương, tay vẫn ôm chặt cuốn sổ nhật ký.',
      topics: [
        { id: 't_time_feel', label: 'Cảm giác về thời gian trong 3 ngày bị nhốt', lines: [
          ['them', 'Trong căn nhà không có cửa sổ đó, chúng tôi chỉ biết nhìn 108 chiếc đồng hồ trên tường để biết sáng hay tối. Ai cũng thấy buồn ngủ rất nhanh và cảm giác ngày trôi qua vèo vèo, nhưng không ai mảy may nghi ngờ cả trăm chiếc đồng hồ cùng chạy nhanh!'] ] }
      ],
      presents: {
        i_20hour_day_illusion: { lines: [
          ['me', 'Mỗi ngày của các cậu trong đó đã bị rút ngắn mất 4 tiếng đồng hồ. Khi cậu viết nhật ký lúc 23:00 đêm thì mặt trời bên ngoài đang đứng bóng lúc 11:00 trưa!'],
          ['them', 'Trời đất ơi… thảo nào chúng tôi hoàn toàn mất cảm giác thời gian!'] ] }
      },
      defaultPresent: 'Kouchi vẫn chưa hết bàng hoàng sau 3 ngày kinh hoàng.'
    }
  ],
  combos: [
    { a: 'c_windowless_old_wing', b: 'c_108_clocks_sync', result: 'i_20hour_day_illusion' },
    { a: 'i_20hour_day_illusion', b: 'c_12hour_gap_diary', result: 'i_12hour_alibi_trick' },
    { a: 'c_12hour_gap_diary', b: 'c_secret_stream_tunnel', result: 'i_12hour_alibi_trick' },
    { a: 'i_12hour_alibi_trick', b: 'c_tower_minute_hand', result: 'i_kazumi_is_towa' },
    { a: 'c_towa_birth_record', b: 'c_tower_minute_hand', result: 'i_kazumi_is_towa' }
  ],
  hints: [
    { until: 'i_20hour_day_illusion', text: 'Tại sao các vị khách trong Biệt Thự Cũ không nhận ra thời gian bị thao túng? Hãy kết hợp Kiến trúc không cửa sổ & thu giữ đồng hồ với Trục điều tốc 108 đồng hồ chạy nhanh 20%!' },
    { until: 'i_12hour_alibi_trick', text: 'Sau 3 ngày chạy nhanh 20%, độ lệch thời gian giữa trong và ngoài là bao nhiêu? Hãy ghép Vương quốc 20 giờ (hoặc Đường hầm ngầm) với Độ lệch 12 tiếng trong nhật ký!' },
    { until: 'c_tower_minute_hand', text: 'Sau khi kiểm tra Hiện trường thi thể Watanabe rơi dưới chân tháp lúc 23:00 đêm, hãy soi xét Kim phút khổng lồ trên đỉnh Tháp Đồng Hồ.' },
    { until: 'i_kazumi_is_towa', text: 'Hãy kết hợp Khoảng trống ngoại phạm 12 tiếng (hoặc Hồ sơ thân phận Towa) với Sợi dây cước trên kim phút Tháp Đồng Hồ để chỉ ra hung thủ thật sự!' }
  ],
  finalHint: 'Quỷ kế thời gian vĩ đại nhất của Biệt Thự Đồng Hồ đã bị giải mã. Hãy đến Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Bằng cách nào hung thủ tạo ra bằng chứng ngoại phạm không tưởng khi nhật ký bên trong Biệt Thự Cũ ghi nhận án mạng xảy ra lúc “23:00 đêm ngày thứ 3” — đúng lúc hung thủ đang đứng cùng thám tử Shimada ở bên ngoài?',
      options: [
        'Hung thủ mua chuộc sinh viên Kouchi viết nhật ký sai giờ',
        'Lợi dụng Biệt Thự Cũ hoàn toàn không có cửa sổ và thu hết đồng hồ cá nhân, hung thủ chỉnh cả 108 chiếc đồng hồ bên trong chạy nhanh hơn 20% (1 ngày ảo = 20 giờ thực). Sau 3 ngày, đồng hồ bên trong chạy nhanh hơn bên ngoài đúng 12 tiếng: lúc trong nhà chỉ “23:00 đêm” thì bên ngoài mới là “11:00 trưa”!',
        'Hung thủ bơm khí mê làm các nạn nhân ngủ suốt 24 tiếng',
        'Hung thủ dùng băng ghi âm phát tiếng chuông đồng hồ giả'
      ],
      answer: 1, support: ['i_20hour_day_illusion', 'i_12hour_alibi_trick', 'c_108_clocks_sync'] },
    { id: 'q2', q: 'Làm thế nào hung thủ ra vào Khu Biệt Thự Cũ khi cánh cửa thép duy nhất đã bị khóa chặt từ bên trong?',
      options: [
        'Trèo qua ống khói trên mái nhà',
        'Sử dụng đường hầm ngầm xuyên dưới lòng suối cạn nối từ đáy chiếc đồng hồ ông nội số 13 sang tầng hầm Tháp Đồng Hồ bên ngoài',
        'Phá bức tường thạch cao ở phòng tắm rồi trát lại',
        'Trốn sẵn trong tủ quần áo suốt 3 ngày không ra ngoài'
      ],
      answer: 1, support: ['c_secret_stream_tunnel', 'i_12hour_alibi_trick'] },
    { id: 'q3', q: 'Nếu vụ thảm sát đã hoàn tất từ buổi trưa, tại sao đúng 23:00 đêm (giờ thực tế của Shimada), thi thể Watanabe lại rơi từ đỉnh Tháp Đồng Hồ xuống ngay trước mặt Shimada?',
      options: [
        'Watanabe tỉnh dậy và tự nhảy xuống',
        'Hung thủ đã đặt nạn nhân bất tỉnh trên bệ cửa tháp từ chiều và buộc dây cước vào kim phút khổng lồ của Tháp Đồng Hồ; khi đồng hồ điểm 23:00 đêm, kim phút kéo căng dây đẩy thi thể rơi xuống để củng cố ngoại phạm!',
        'Do gió bão thổi rơi thi thể',
        'Có đồng phạm thứ hai đứng trên đỉnh tháp đẩy xuống'
      ],
      answer: 1, support: ['c_tower_minute_hand', 'c_tower_fall_23pm', 'i_kazumi_is_towa'] },
    { id: 'q4', q: 'Hung thủ thực sự đứng sau toàn bộ thảm kịch tại Biệt Thự Đồng Hồ là ai?',
      options: [
        'Sinh viên sống sót Kouchi Masaki',
        'Kiến trúc sư Nakamura Seiji còn sống',
        'Nữ quản gia Furuhato Kazumi — người thực chất chính là tiểu thư Furuhato Towa còn sống, sử dụng cỗ máy 108 chiếc đồng hồ để trả thù cho mẹ và người yêu!',
        'Tổng biên tập tạp chí CHAOS'
      ],
      answer: 2, support: ['i_kazumi_is_towa', 'c_towa_birth_record', 'c_chaos_motive'] }
  ],
  truth: [
    '“Biệt Thự Đồng Hồ” là đỉnh cao nghệ thuật kiến trúc tội ác của Nakamura Seiji: một khu nhà biệt lập hoàn toàn không có cửa sổ, nơi con người bị tước bỏ đồng hồ cá nhân và buộc phải sống theo nhịp đập của 108 chiếc đồng hồ cổ.',
    'Tiểu thư Furuhato Towa — dưới vỏ bọc nữ quản gia Kazumi — đã bật trục điều tốc trung tâm cho toàn bộ 108 chiếc đồng hồ trong Biệt Thự Cũ chạy nhanh hơn 20%. Cứ mỗi 20 giờ thực tế trôi qua, kim đồng hồ bên trong đã quay tròn 24 giờ, âm thầm đánh cắp của các nạn nhân 4 tiếng mỗi ngày mà nhịp sinh học của họ không hề hay biết.',
    'Đến ngày thứ ba (sau 60 giờ thực tế), đồng hồ bên trong Biệt Thự Cũ đã chỉ sang giờ thứ 72 — tức là nhanh hơn thế giới bên ngoài đúng 12 TIẾNG ĐỒNG HỒ! Towa đi qua đường hầm dưới lòng suối, kết liễu các nạn nhân vào lúc 11:00 trưa (mà họ ghi vào nhật ký là 23:00 đêm), rồi đặt nạn nhân cuối cùng lên bệ Tháp Đồng Hồ nối dây với kim phút khổng lồ.',
    'Đúng 23:00 đêm thực tế, khi Towa đang đứng trò chuyện cùng thám tử Shimada Kiyoshi dưới sân, kim phút trên đỉnh tháp chạm mốc 12 giờ và đẩy thi thể rơi xuống đất — hoàn tất màn ảo thuật thời gian vĩ đại nhất lịch sử dòng văn học Shin-Honkaku.'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Biệt Thự Đồng Hồ” (時計館の殺人, 1991) của Ayatsuji Yukito — tác phẩm đoạt Giải thưởng Hội Nhà Văn Trinh Thám Nhật Bản lần thứ 45.'
});
