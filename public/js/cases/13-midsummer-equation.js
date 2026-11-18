/* =========================================================================
 * VỤ ÁN 13 — PHƯƠNG TRÌNH HẠ CHÍ
 * Phỏng theo 真夏の方程式 (Manatsu no Hōteishiki, 2011) — Higashino Keigo
 * Series Galileo — Yukawa Manabu
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'midsummer-equation',
  order: 13,
  collection: 'keigo',
  author: 'Higashino Keigo',
  title: 'Phương Trình Hạ Chí',
  original: '真夏の方程式 · 2011 · Series Galileo',
  kanji: '夏',
  theme: { a: '#0f2027', b: '#2c5364', accent: '#38bdf8' },
  difficulty: 5,
  par: 36,
  tagline: 'Một quả tên lửa bằng chai nhựa bay lên bầu trời mùa hè, một bí mật chôn sâu dưới đáy biển 16 năm, và phương trình bảo vệ một đứa trẻ.',
  playerRole: 'Bạn là thanh tra Kusanagi Shunpei tại Tokyo, phối hợp cùng Phó giáo sư vật lý Yukawa Manabu đang có mặt tại thị trấn biển Hariura.',
  partner: {
    name: 'Yukawa Manabu',
    title: 'Phó giáo sư Vật lý — “Nhà khoa học không thích trẻ con, ngoại trừ Kyohei”',
    avatar: '湯',
    color: '#2c5364'
  },
  briefing: [
    'Giữa mùa hè rực nắng tại thị trấn biển Hariura (bán đảo Izu), Phó giáo sư Yukawa Manabu đến nghỉ tại nhà trọ gia đình Lục Nhẫn Trang (Ryokuganso) để làm cố vấn kỹ thuật cho dự án khai thác khoáng sản dưới đáy biển. Tại đây, ông tình cờ làm quen với Kyohei — cậu học sinh lớp 5 là cháu họ của gia đình chủ nhà trọ Kawabata.',
    'Ngay sáng hôm sau, vị khách thứ hai trọ tại Lục Nhẫn Trang — ông Tsukahara Masatsugu — được phát hiện tử vong dưới chân ghềnh đá ven biển. Danh tính của nạn nhân làm cả Sở Cảnh sát Tokyo chấn động: ông Tsukahara là cựu thanh tra hình sự Đội 1 khét tiếng, người từng bắt giữ vô số tội phạm hung hãn.',
    'Kết quả pháp y gây kinh ngạc: ông Tsukahara không chết vì cú ngã xuống ghềnh đá, mà đã tử vong từ trước do ngộ độc khí CO (carbon monoxide) rồi mới bị mang xác ra biển! Kỳ lạ hơn, trong phòng trọ của ông Tsukahara không hề có bếp than hay thiết bị đốt nào — chỉ có một lỗ thông hơi nhỏ trên sàn dẫn xuống phòng nồi hơi tầng một.',
    'Yukawa nhìn ra mặt biển Hariura lấp lánh: “Kusanagi này, có người đã biến một thí nghiệm khoa học mùa hè của trẻ con thành công cụ giết người mà đứa trẻ đó chưa từng hay biết.”'
  ],
  clues: {
    c_cliff_body: { title: 'Thi thể cựu thanh tra Tsukahara ở ghềnh đá', icon: '🌊', type: 'evidence',
      desc: 'Tsukahara Masatsugu (61 tuổi) được tìm thấy dưới chân vách đá cảng Hariura sáng sớm. Vết thương trên đầu có rất ít máu chảy ra (vết thương sau khi chết), còn máu trong tim có nồng độ COHb lên tới 65% — chết vì ngạt khí CO.' },
    c_floor_vent: { title: 'Lỗ thông hơi trên sàn phòng trọ tầng 2', icon: '🕳️', type: 'evidence',
      desc: 'Trong phòng trọ của ông Tsukahara tại Lục Nhẫn Trang có một lỗ thông khí nhỏ thông thẳng xuống trần phòng nồi hơi cũ ở tầng một. Tuy nhiên, bình thường khí CO từ ống khói nồi hơi sẽ thoát ra ngoài mái nhà chứ không tràn vào phòng.' },
    c_chimney_plastic: { title: 'Mảnh nhựa PET chảy sém trên ống khói mái nhà', icon: '🧴', type: 'evidence',
      desc: 'Yukawa kiểm tra miệng ống khói nồi hơi trên mái Lục Nhẫn Trang và tìm thấy vết nhựa PET (vỏ chai nước ngọt) nóng chảy bám quanh mép ống — thứ gì đó đã bịt kín miệng ống khói từ bên ngoài vào tối hôm đó, ép toàn bộ khí CO dội ngược qua lỗ thông sàn vào phòng ông Tsukahara!' },
    c_kyohei_rocket: { title: 'Thí nghiệm “Tên lửa chai nhựa” của bé Kyohei', icon: '🚀', type: 'testimony',
      desc: 'Cậu bé Kyohei hồn nhiên kể với Yukawa: chiều hôm ông Tsukahara chết, ông chủ nhà trọ Kawabata Shigehiko đã rủ cậu chế tạo một quả tên lửa lớn bằng vỏ chai nhựa và tấm nilon rồi bắn thẳng lên mái nhà trọ vào lúc chập tối!' },
    c_kyohei_errand: { title: 'Chuyến đi mua đồ lúc nửa đêm của Kyohei', icon: '🚲', type: 'testimony',
      desc: 'Tối hôm đó, chị họ Kawabata Narumi (nhà hoạt động bảo vệ biển Hariura) nhờ Kyohei giữ bí mật việc cô không có mặt ở phòng từ 22:00 đến 23:00 — khung giờ thi thể ông Tsukahara được chở ra ghềnh đá.' },
    c_tokyo_murder_16: { title: 'Hồ sơ vụ sát hại cựu tiếp viên Mifune 16 năm trước', icon: '📁', type: 'evidence',
      desc: '16 năm trước tại Tokyo, bà Mifune Takako bị đâm chết bằng dao gọt hoa quả. Chính thanh tra Tsukahara là người thụ lý và đã bắt giữ nghi phạm Senba — một thợ gốm quê ở Hariura. Senba nhận tội ngay lập tức và đang thụ án tù.' },
    c_senba_letters: { title: 'Những tấm bưu thiếp phong cảnh biển Hariura', icon: '📮', type: 'evidence',
      desc: 'Trong phòng người tù già Senba có một xấp bưu thiếp chụp vùng biển Hariura được cựu thanh tra Tsukahara gửi đều đặn mỗi năm, kèm dòng chữ ngắn gọn: “Rạn san hô ở đó vẫn được bảo vệ rất tốt”.' },
    c_narumi_father: { title: 'Bí mật huyết thống của Kawabata Narumi', icon: '🧬', type: 'evidence',
      desc: 'Kusanagi điều tra hộ tịch: Kawabata Narumi thực chất không phải con ruột của ông Kawabata Shigehiko, mà là kết quả mối tình lầmỡ giữa vợ ông (bà Setsuko) với người thợ gốm Senba 30 năm trước!' },
    c_mifune_blackmail: { title: 'Mối liên hệ giữa nạn nhân Mifune và nhà Kawabata', icon: '💸', type: 'testimony',
      desc: '16 năm trước, bà Mifune Takako phát hiện bí mật Narumi là con ruột của Senba nên đã tống tiền bà Setsuko. Cô nữ sinh Narumi khi đó mới 15 tuổi đã đến cầu xin bà Mifune dừng lại và trong lúc xô xát đã lỡ tay đâm chết bà ta!' },
    c_senba_sacrifice: { title: 'Sự hy sinh của người cha ruột Senba', icon: '⛓️', type: 'testimony',
      desc: 'Khi biết con gái ruột Narumi lỡ giết người, Senba đã lập tức tạo dựng chứng cứ giả tại hiện trường rồi ra đầu thú nhận hết tội về mình để Narumi không bị hủy hoại cuộc đời.' },
    c_tsukahara_visit: { title: 'Lý do ông Tsukahara đến Hariura', icon: '🕵️', type: 'testimony',
      desc: 'Thanh tra Tsukahara năm xưa đã lờ mờ đoán ra Senba nhận tội thay con gái, nhưng vì cảm phục tấm lòng người cha, ông chỉ âm thầm theo dõi từ xa. Lần này biết Senba bị ung thư giai đoạn cuối trong tù, Tsukahara đến Hariura chỉ để nhìn Narumi lần cuối rồi báo tin cho Senba yên lòng!' },
    c_shigehiko_panic: { title: 'Lời thú nhận của vợ chồng chủ nhà trọ Kawabata', icon: '💔', type: 'testimony',
      desc: 'Khi ông Tsukahara đặt phòng tại Lục Nhẫn Trang và hỏi thăm về Narumi, vợ chồng ông Kawabata Shigehiko tưởng cựu thanh tra đến để lật lại vụ án 16 năm trước và bắt giữ Narumi — nên đã lên kế hoạch sát hại ông bằng khí CO!' },

    i_rocket_co_trap: { title: 'Quả tên lửa chai nhựa là van khóa ống khói', icon: '🧩', type: 'insight',
      desc: 'Ông Kawabata Shigehiko không hề chơi đùa với Kyohei: ông ta cố tình chỉnh góc phóng để cậu bé bắn quả tên lửa bọc tấm nilon rơi trúng miệng ống khói trên mái nhà, làm tắc đường thoát khí và đẩy khí CO từ nồi hơi tràn vào phòng ông Tsukahara!' },
    i_truth_16_years: { title: 'Narumi là hung thủ vụ án 16 năm trước, Senba nhận tội thay', icon: '🧩', type: 'insight',
      desc: 'Vụ án Mifune Takako 16 năm trước do chính Narumi gây ra khi mới 15 tuổi; người cha ruột Senba đã nhận tội đi tù thay cô, còn thanh tra Tsukahara đến Hariura chỉ để mang tin bình an của Narumi về cho người cha sắp qua đời.' },
    i_midsummer_burden: { title: 'Phương trình cứu lấy tâm hồn cậu bé Kyohei', icon: '🧩', type: 'insight',
      desc: 'Vợ chồng Kawabata đã lợi dụng chính bàn tay ngây thơ của bé Kyohei để kích hoạt cái bẫy giết người. Khi Kyohei lớn lên và học vật lý, cậu bé chắc chắn sẽ tự nhận ra mình đã vô tình giết ông Tsukahara — và Yukawa quyết định phải ở bên nâng đỡ cậu bé trước sự thật tàn nhẫn đó.' }
  },
  locations: [
    { id: 'harbor', name: 'Ghềnh đá cảng Hariura & Phòng pháp y', icon: '🌊',
      desc: 'Vùng biển trong vắt nhìn thấu rạn san hô nơi thi thể cựu thanh tra Tsukahara được phát hiện.',
      points: [
        { id: 'p_body', name: 'Khám nghiệm thi thể ông Tsukahara', clue: 'c_cliff_body',
          text: 'Nồng độ COHb trong máu lên tới 65%. Ông Tsukahara đã chết vì ngạt khí CO trong phòng kín trước khi bị mang ra ghềnh đá!' },
        { id: 'p_tokyo_file', name: 'Tra cứu hồ sơ các vụ án cũ của Tsukahara', clue: 'c_tokyo_murder_16',
          text: 'Kusanagi gọi điện từ Tokyo: “16 năm trước bác Tsukahara từng bắt một hung thủ tên Senba quê ở đúng thị trấn Hariura này!”' }
      ] },
    { id: 'ryokuganso', name: 'Nhà trọ Lục Nhẫn Trang (Ryokuganso)', icon: '🏡',
      desc: 'Nhà trọ nhỏ ven biển của gia đình Kawabata, nơi cả Yukawa và ông Tsukahara lưu trú.',
      points: [
        { id: 'p_room2', name: 'Phòng trọ tầng 2 của ông Tsukahara', clue: 'c_floor_vent',
          text: 'Trên sàn gỗ góc phòng có một nắp thông hơi nhỏ dẫn thẳng xuống trần phòng nồi hơi tầng một.' },
        { id: 'p_roof', name: 'Kiểm tra miệng ống khói trên mái nhà', clue: 'c_chimney_plastic', requires: ['c_floor_vent'],
          text: 'Yukawa trèo lên mái nhà và thu được mảnh nhựa PET cùng tấm nilon cháy sém bám chặt quanh miệng ống khói!' },
        { id: 'p_beach_rocket', name: 'Trò chuyện với bé Kyohei ngoài bãi biển', clue: 'c_kyohei_rocket',
          text: 'Kyohei khoe với Yukawa: “Chiều hôm đó bác Shigehiko dạy cháu bắn tên lửa nước bọc nilon bay vọt lên đúng chỗ ống khói mái nhà luôn!”' },
        { id: 'p_narumi_alibi', name: 'Hỏi Kyohei về buổi tối hôm đó', clue: 'c_kyohei_errand',
          text: 'Kyohei ngập ngừng: “Tối hôm đó chị Narumi dặn cháu đừng nói với ai là chị ấy đi ra ngoài lúc 10 giờ đêm…”' }
      ] },
    { id: 'tokyo_prison', name: 'Nhà tù Tokyo & Hồ sơ Hộ tịch (Kusanagi điều tra)', icon: '🏛️', requires: ['c_tokyo_murder_16'],
      desc: 'Cuộc điều tra song song của thanh tra Kusanagi tại Tokyo về vụ án 16 năm trước.',
      points: [
        { id: 'p_postcards', name: 'Vật dụng cá nhân của phạm nhân Senba', clue: 'c_senba_letters',
          text: 'Mười sáu tấm bưu thiếp chụp biển Hariura mà cựu thanh tra Tsukahara gửi cho chính kẻ sát nhân mình từng bắt!' },
        { id: 'p_registry', name: 'Xác minh huyết thống của Kawabata Narumi', clue: 'c_narumi_father',
          text: 'Kusanagi sững người: Narumi mang nhóm máu không thể là con của ông Kawabata Shigehiko — cha ruột của cô chính là Senba!' },
        { id: 'p_mifune', name: 'Lật lại động cơ vụ án Mifune 16 năm trước', clue: 'c_mifune_blackmail', requires: ['c_narumi_father'],
          text: 'Bà Mifune từng là bạn cũ biết chuyện bà Setsuko ngoại tình với Senba và đã dùng chuyện đó tống tiền gia đình Kawabata!' },
        { id: 'p_senba_truth', name: 'Thẩm vấn người tù già Senba trong bệnh viện trại giam', clue: 'c_senba_sacrifice', requires: ['c_mifune_blackmail'],
          text: 'Senba mỉm cười yếu ớt trên giường bệnh: “Ông Tsukahara là ân nhân của tôi… Ông ấy biết tôi chỉ muốn bảo vệ giọt máu duy nhất của mình.”' }
      ] },
    { id: 'boiler_truth', name: 'Phòng nồi hơi Lục Nhẫn Trang — Đối chất cuối cùng', icon: '🔥', requires: ['i_rocket_co_trap', 'i_truth_16_years'],
      desc: 'Yukawa và Kusanagi dẫn dắt sự thật tại căn phòng nồi hơi cũ dưới tầng một.',
      points: [
        { id: 'p_tsukahara_motive', name: 'Giải thích lý do thật sự ông Tsukahara đến Hariura', clue: 'c_tsukahara_visit',
          text: 'Ông Tsukahara không hề đến để bắt Narumi. Ông chỉ muốn chụp một bức ảnh Narumi trưởng thành đem về cho người cha ruột Senba đang hấp hối trong tù!' },
        { id: 'p_shigehiko_confess', name: 'Sự suy sụp của gia đình Kawabata', clue: 'c_shigehiko_panic',
          text: 'Ông Shigehiko quỳ sụp xuống sàn: vì sợ Narumi bị bắt về tội lỗi năm 15 tuổi, ông đã dùng trò bắn tên lửa của Kyohei để bịt ống khói đầu độc ông Tsukahara!' }
      ] }
  ],
  suspects: [
    { id: 'narumi', name: 'Kawabata Narumi', age: 31, avatar: '成', color: '#0284c7',
      role: 'Con gái nhà trọ Lục Nhẫn Trang · Nhà hoạt động bảo vệ biển Hariura',
      bio: 'Yêu biển Hariura mãnh liệt, luôn coi vùng biển này là sinh mạng của mình mà không hề biết người cha ruột Senba đã đánh đổi cả cuộc đời vì cô.',
      intro: 'Narumi nhìn ra rạn san hô ngoài khơi. “Tôi sẽ không để bất kỳ ai phá hủy vùng biển này.”',
      topics: [
        { id: 't_tsukahara_n', label: 'Ông Tsukahara có hỏi gì cô trước khi mất không?', lines: [
          ['them', 'Ông ấy nhìn tôi rất lâu ngoài cầu cảng rồi hỏi: “Cháu có hạnh phúc khi sống ở vùng biển này không?” Ánh mắt ông ấy khiến tôi sợ hãi… tôi tưởng ông ấy đã biết chuyện của 16 năm trước!'] ] },
        { id: 't_16years_n', label: 'Chuyện xảy ra 16 năm trước ở Tokyo', lines: [
          ['them', 'Năm đó tôi mới 15 tuổi… Bà Mifune dọa sẽ nói cho cả trường biết gia đình tôi. Khi tôi tỉnh hồn lại thì con dao đã đâm vào ngực bà ấy, rồi mẹ tôi chạy đến đẩy tôi về nhà…'] ] }
      ],
      presents: {
        c_senba_sacrifice: { lines: [
          ['me', 'Người đàn ông tên Senba nhận tội thay cô 16 năm trước không phải người dưng. Ông ấy chính là cha ruột của cô!'],
          ['narr', 'Narumi chết lặng, hai bàn tay bấu chặt lấy ngực áo.'],
          ['them', 'Cha ruột… Suốt mười sáu năm qua, ông ấy ngồi trong bóng tối nhà tù chỉ để tôi được bơi dưới ánh nắng vùng biển của ông ấy sao?!'] ] },
        c_tsukahara_visit: { lines: [
          ['partner', 'Và thanh tra Tsukahara đến đây không phải để bắt cô, Narumi-san. Ông ấy đến để giữ lời hứa cuối cùng với cha ruột của cô trước khi ông Senba nhắm mắt.'],
          ['them', 'Vậy mà gia đình tôi… lại giết chết người duy nhất mang tấm lòng của cha tôi đến đây!'] ] }
      },
      defaultPresent: 'Narumi khẽ lắc đầu, ánh mắt đầy bất an.'
    },
    { id: 'shigehiko', name: 'Kawabata Shigehiko', age: 62, avatar: '重', color: '#475569',
      role: 'Chủ nhà trọ Lục Nhẫn Trang · Cha nuôi trên danh nghĩa của Narumi',
      bio: 'Dù biết Narumi không phải con ruột của mình, ông vẫn yêu thương và bảo vệ cô suốt 30 năm qua.',
      intro: 'Ông Shigehiko ngồi trầm ngâm bên bàn trà, đôi bàn tay già nua đan chặt vào nhau.',
      topics: [
        { id: 't_boiler_s', label: 'Về phòng nồi hơi tầng một tối hôm đó', lines: [
          ['them', 'Ống khói nhà trọ đã cũ rồi, chắc có rác hay lá cây bay vào làm tắc nên khí độc mới rò lên phòng ông khách…'] ] }
      ],
      presents: {
        c_chimney_plastic: { lines: [
          ['me', 'Không phải lá cây đâu ông Kawabata. Trên miệng ống khói là mảnh nhựa PET và tấm nilon từ quả tên lửa mà ông đã rủ bé Kyohei bắn lên mái nhà!'],
          ['partner', 'Ông đã tính toán sẵn tọa độ để một đứa trẻ 10 tuổi tự tay bịt kín ống khói rồi đốt lò hơi bơm khí CO giết ông Tsukahara!'],
          ['them', 'Tôi… tôi bị bệnh khớp không trèo lên mái nhà được! Tôi chỉ nghĩ Kyohei còn nhỏ sẽ không hiểu chuyện gì đã xảy ra…'] ] },
        c_kyohei_rocket: { lines: [
          ['partner', 'Đó là điều tàn nhẫn nhất ông đã làm, ông Kawabata. Một ngày nào đó khi Kyohei lớn lên, cậu bé sẽ tự giải được phương trình này và nhận ra chính tay mình đã giết một con người!'] ] }
      },
      defaultPresent: 'Ông Shigehiko cúi gằm mặt không đáp.'
    }
  ],
  combos: [
    { a: 'c_chimney_plastic', b: 'c_kyohei_rocket', result: 'i_rocket_co_trap' },
    { a: 'c_floor_vent', b: 'c_chimney_plastic', result: 'i_rocket_co_trap' },
    { a: 'c_narumi_father', b: 'c_senba_sacrifice', result: 'i_truth_16_years' },
    { a: 'c_senba_letters', b: 'c_senba_sacrifice', result: 'i_truth_16_years' },
    { a: 'i_rocket_co_trap', b: 'c_shigehiko_panic', result: 'i_midsummer_burden' },
    { a: 'i_truth_16_years', b: 'c_tsukahara_visit', result: 'i_midsummer_burden' }
  ],
  hints: [
    { until: 'i_rocket_co_trap', text: 'Hãy kiểm tra lỗ thông hơi phòng tầng 2, miệng ống khói trên mái nhà và trò chơi bắn tên lửa chai nhựa của bé Kyohei rồi kết nối chúng!' },
    { until: 'i_truth_16_years', text: 'Khám phá hồ sơ vụ án 16 năm trước ở Tokyo (bưu thiếp của Senba, huyết thống của Narumi và sự hy sinh của Senba) rồi ghép lại.' },
    { until: 'i_midsummer_burden', text: 'Vào Phòng nồi hơi Lục Nhẫn Trang để mở khóa lời thú nhận của ông Shigehiko và lý do ông Tsukahara đến Hariura, sau đó kết nối trên bàn ghép!' }
  ],
  finalHint: 'Phương trình mùa hè đã có lời giải đầy đủ. Hãy đến Bảng suy luận, Kusanagi.',
  questions: [
    { id: 'q1', q: 'Nguyên nhân tử vong thật sự của cựu thanh tra Tsukahara Masatsugu là gì?',
      options: ['Trượt chân ngã đập đầu xuống ghềnh đá khi đi dạo đêm', 'Bị đầu độc bằng thuốc ngủ trong bữa tối', 'Ngạt khí CO trong phòng trọ do miệng ống khói trên mái nhà bị bịt kín khiến khí độc từ nồi hơi tràn qua lỗ thông sàn, sau đó mới bị mang xác ra ghềnh đá', 'Đột quỵ khi bơi ngoài biển'],
      answer: 2, support: ['c_cliff_body', 'c_floor_vent', 'i_rocket_co_trap'] },
    { id: 'q2', q: 'Bằng cách nào miệng ống khói trên mái nhà cao của Lục Nhẫn Trang lại bị bịt kín mà không ai phải trèo lên mái?',
      options: ['Dùng cần câu dài từ cửa sổ', 'Chủ nhà trọ Kawabata Shigehiko đã lợi dụng cậu bé Kyohei bắn một quả tên lửa nước bọc tấm nilon rơi trúng miệng ống khói dưới danh nghĩa trò chơi khoa học', 'Chim biển tha túi nilon làm tổ', 'Narumi trèo lên mái nhà trong đêm'],
      answer: 1, support: ['i_rocket_co_trap', 'c_chimney_plastic', 'c_kyohei_rocket'] },
    { id: 'q3', q: 'Sự thật đằng sau vụ sát hại bà Mifune Takako ở Tokyo 16 năm trước là gì?',
      options: ['Phạm nhân Senba giết người để cướp của', 'Cô nữ sinh 15 tuổi Kawabata Narumi lỡ tay đâm chết bà Mifune khi bị tống tiền về bí mật thân thế; người cha ruột là Senba đã tự nguyện nhận tội đi tù thay con gái', 'Ông Tsukahara bắt nhầm người vô tội', 'Bà Setsuko là người đâm chết Mifune'],
      answer: 1, support: ['i_truth_16_years', 'c_senba_sacrifice', 'c_narumi_father', 'c_mifune_blackmail'] },
    { id: 'q4', q: 'Vì sao cựu thanh tra Tsukahara lại tìm đến thị trấn Hariura sau 16 năm?',
      options: ['Để bắt giữ Narumi khi thời hiệu truy cứu sắp hết', 'Để tống tiền gia đình Kawabata', 'Vì biết người cha ruột Senba đang bị ung thư giai đoạn cuối trong tù, ông muốn đến nhìn Narumi sống bình yên để mang tin về cho Senba thanh thản nhắm mắt', 'Đi nghỉ dưỡng tình cờ'],
      answer: 2, support: ['c_tsukahara_visit', 'c_senba_letters', 'i_truth_16_years'] },
    { id: 'q5', q: 'Ai là người đã lên kế hoạch bơm khí CO sát hại ông Tsukahara và vì sao?',
      options: ['Cậu bé Kyohei cố ý gây án', 'Vợ chồng chủ nhà trọ Kawabata Shigehiko — vì lầm tưởng ông Tsukahara đến để lật lại vụ án 16 năm trước và bắt giữ Narumi', 'Các kỹ sư dự án khai thác đáy biển', 'Senba vượt ngục về gây án'],
      answer: 1, support: ['c_shigehiko_panic', 'i_rocket_co_trap'] },
    { id: 'q6', q: 'Điều gì khiến Yukawa Manabu trăn trở nhất khi khép lại vụ án “Phương trình Hạ chí”?',
      options: ['Dự án khai thác khoáng sản bị đình chỉ', 'Cậu bé Kyohei đã bị biến thành mắt xích giết người mà không tự biết; khi cậu lớn lên và tự nhận ra sự thật, Yukawa muốn ở bên giúp cậu không bị nghiền nát bởi mặc cảm tội lỗi', 'Không tìm được hung khí', 'Kusanagi bị kỷ luật'],
      answer: 1, support: ['i_midsummer_burden', 'c_kyohei_rocket'] }
  ],
  truth: [
    'Mười sáu năm trước tại Tokyo, cô bé 15 tuổi Kawabata Narumi đã lỡ tay đâm chết bà Mifune khi bà ta dùng bí mật thân thế của cô để tống tiền gia đình. Để cứu tương lai của đứa con gái ruột mà mình chưa một lần được gọi tiếng cha, người thợ gốm Senba đã tự nguyện nhận hết tội lỗi và bước vào nhà tù.',
    'Thanh tra Tsukahara Masatsugu đã thấu hiểu tấm lòng của Senba. Suốt 16 năm, mỗi mùa hè ông đều gửi cho Senba một tấm bưu thiếp báo rằng “rạn san hô ở Hariura vẫn được bảo vệ tốt”. Khi biết Senba sắp qua đời vì ung thư trong trại giam, Tsukahara đã đích thân đến Hariura chỉ để nhìn thấy Narumi hạnh phúc rồi mang tin về cho người cha già.',
    'Bi kịch thay, sự xuất hiện của vị cựu thanh tra lại khiến vợ chồng chủ nhà trọ Kawabata Shigehiko hoảng sợ tột độ. Tưởng Tsukahara đến để bắt Narumi, ông Shigehiko đã nghĩ ra một kế hoạch tàn nhẫn: ông rủ cậu cháu họ 10 tuổi Kyohei bắn một quả tên lửa nước bọc tấm nilon rơi trúng miệng ống khói trên mái nhà, rồi đốt nồi hơi bơm khí CO qua lỗ thông sàn giết chết ông Tsukahara trong lúc ngủ!',
    'Trước ga tàu Hariura vào ngày cuối cùng của mùa hè, khi nhìn cậu bé Kyohei dần lờ mờ nhận ra mối liên hệ giữa quả tên lửa của mình và cái chết của vị khách trọ, Yukawa Manabu đã đặt tay lên vai cậu bé: “Số phận của một con người giống như một phương trình phức tạp. Khi nào cháu lớn lên và muốn cùng nhau giải phương trình đó, thầy sẽ luôn đợi cháu.”'
  ],
  sourceNote: 'Phỏng theo tiểu thuyết “Phương trình Hạ chí” (真夏の方程式, 2011) của Higashino Keigo — một trong những tác phẩm giàu chiều sâu nhân văn và cảm xúc nhất thuộc series Phó giáo sư Galileo Yukawa Manabu.'
});
