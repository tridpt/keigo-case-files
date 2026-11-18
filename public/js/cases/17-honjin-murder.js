/* =========================================================================
 * VỤ ÁN 17 — ÁN MẠNG TẠI BẢN TRẬN
 * Phỏng theo 本陣殺人事件 (Honjin Satsujin Jiken, 1946) — Yokomizo Seishi
 * Series Kindaichi Kosuke
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'honjin-murder',
  order: 17,
  collection: 'shin-honkaku',
  author: 'Yokomizo Seishi',
  title: 'Án Mạng Tại Bản Trận',
  original: '本陣殺人事件 · 1946 · Yokomizo Seishi (Kindaichi Kosuke)',
  kanji: '陣',
  theme: { a: '#1f1216', b: '#991b1b', accent: '#f87171' },
  difficulty: 5,
  par: 36,
  tagline: 'Đêm tân hôn giữa tuyết trắng — tiếng đàn Koto ngân vang và thanh kiếm Nhật bốc hơi khỏi mật thất!',
  playerRole: 'Bạn là Thanh tra Isokawa thuộc Sở Cảnh sát tỉnh Okayama, hợp tác cùng chàng thám tử trẻ có mái tóc tổ quạ Kindaichi Kosuke trong vụ án đầu đời lẫy lừng của anh.',
  partner: {
    name: 'Kindaichi Kosuke',
    title: 'Thám tử tư lãng tử — “Khi anh ta gãi đầu làm gàu bay tứ tung là lúc mật thất sắp bị phá”',
    avatar: '金',
    color: '#991b1b'
  },
  briefing: [
    'Mùa đông năm 1937 tại làng Okamura (tỉnh Okayama), gia tộc danh giá Ichiyanagi — vốn là “Bản Trận” (Honjin, dinh thự đón tiếp Lãnh chúa thời Edo) — tổ chức hôn lễ cho gia chủ đời thứ 15 là Ichiyanagi Kenzo với cô giáo Katsuko xuất thân bình dân, bất chấp sự phản đối kịch liệt của dòng họ.',
    'Ngay trước ngày cưới, một gã đàn ông lạ mặt có vết sẹo trên má và bàn tay phải chỉ còn 3 ngón xuất hiện quanh làng hỏi đường đến dinh thự Bản Trận. Đêm tân hôn, tuyết đầu mùa rơi dày đặc phủ trắng khu vườn bao quanh Biệt viện Hanare nơi đôi tân lang tân nương nghỉ ngơi.',
    'Lúc 4 giờ sáng, một tiếng ngân chói tai của đàn Koto bỗng vang lên từ phòng tân hôn kèm tiếng thét thất thanh. Khi người nhà dùng rìu phá cửa chớp gỗ cài chốt sắt từ bên trong xông vào: Gia chủ Kenzo và cô dâu Katsuko đã nằm chết trong vũng máu, còn trên bức bình phong vàng in rõ dấu bàn tay máu 3 ngón!',
    'Thế nhưng điều làm cả sở cảnh sát kinh hãi: Xung quanh Biệt viện Hanare, lớp tuyết trắng dày 15cm hoàn toàn nguyên vẹn KHÔNG CÓ MỘT DẤU CHÂN NÀO, và thanh kiếm Nhật (Katana) hung khí dính máu lại đang cắm thẳng đứng giữa vườn tuyết cách phòng ngủ tận 10 mét!'
  ],
  clues: {
    c_snow_katana: { title: 'Thanh kiếm Katana cắm giữa vườn tuyết không dấu chân', icon: '⚔️', type: 'evidence',
      desc: 'Toàn bộ cửa gỗ Amado của Biệt viện Hanare đều cài chốt sắt từ bên trong. Tuyết ngoài vườn rơi dày từ nửa đêm trắng tinh không một dấu giày dép, nhưng thanh kiếm Katana dùng để giết hai vợ chồng lại cắm giữa bồn hoa tuyết cách hiên nhà 10 mét!' },
    c_three_finger_blood: { title: 'Dấu bàn tay máu 3 ngón & Cái xác dưới hầm than', icon: '🖐️', type: 'evidence',
      desc: 'Kindaichi tìm thấy thi thể một gã lang thang dưới hầm than cũ kỹ, bàn tay phải có 3 ngón của hắn đã bị cắt lìa! Pháp y xác nhận gã lang thang này đã chết vì bệnh lao phổi từ 1 tuần trước — ai đó đã mượn ngoại hình của hắn và dùng bàn tay xác chết để đóng dấu máu lên bình phong!' },
    c_koto_string_kakei: { title: 'Sợi dây đàn Koto đứt, Ống dẫn nước tre (Kakei) & Bồn đá', icon: '🎋', type: 'evidence',
      desc: 'Khám xét cây đàn Koto trong phòng tân hôn và hệ thống ống tre dẫn nước suối (Kakei) chảy qua vườn vào bồn đá rửa tay sát hiên nhà: Trên khe cửa thông gió, thành ống tre và cành thông ngoài vườn đều có vết ma sát cứa sâu của sợi dây tơ đàn Koto!' },
    c_charcoal_weight: { title: 'Bao tải than củi đối trọng dưới lòng suối', icon: '🪨', type: 'evidence',
      desc: 'Ở hạ lưu con suối nhỏ chảy qua vườn (nơi nước chảy làm tan tuyết không để lại dấu chân), Kindaichi vớt được một bao tải than củi nặng có buộc móc sắt và một đoạn dây đàn Koto bị cắt vội.' },
    c_kenzo_suicide_angle: { title: 'Góc đâm tự sát trên ngực gia chủ Kenzo', icon: '🩸', type: 'evidence',
      desc: 'Khám nghiệm tử thi kỹ lưỡng: Cô dâu Katsuko bị chém một nhát chí mạng từ phía sau khi không phòng bị. Ngược lại, vết kiếm đâm xuyên tim gia chủ Kenzo có góc hướng từ dưới lên không hề có vết thương tự vệ ở tay, và trên chắn kiếm (Tsuba) còn vết hằn của nút thắt dây đàn Koto!' },
    c_kenzo_purity_obsession: { title: 'Bức thư cháy dở & Chứng ám ảnh cực đoan của Kenzo', icon: '📜', type: 'evidence',
      desc: 'Mảnh thư cháy dở trong lò sưởi của Kenzo và lời kể của ông chú Ginzo tiết lộ: Trước ngày cưới, cô dâu Katsuko đã thành thật thú nhận cô từng có mối tình đầu không trọn vẹn với một người đàn ông mất 2 ngón tay. Chứng ám ảnh sạch sẽ bệnh hoạn và sĩ diện dòng dõi Bản Trận khiến Kenzo quyết định giết vợ rồi tự sát, nhưng ngụy tạo thành vụ bị sát hại để bảo toàn danh dự!' },
    c_saburo_mystery_books: { title: 'Tủ sách mật thất & Vết thương giả của người em họ Saburo', icon: '📚', type: 'evidence',
      desc: 'Người em họ Ichiyanagi Saburo sở hữu hàng trăm tiểu thuyết trinh thám mật thất phương Tây và một cuốn sổ phác thảo cơ cấu ròng rọc rút kiếm. Saburo còn tự rạch một vết thương nông ở vai để đóng vai nạn nhân bị hung thủ 3 ngón tay tấn công!' },

    i_phantom_3finger: { title: 'Không có sát thủ 3 ngón tay — Đó là màn kịch của Kenzo', icon: '🧩', type: 'insight',
      desc: 'Gia chủ Kenzo đã tình cờ phát hiện xác gã lang thang 3 ngón tay chết vì bệnh lao, liền chặt lấy bàn tay 3 ngón đó và tự hóa trang đi quanh làng trước đám cưới để tạo ra bóng ma “Kẻ thù 3 ngón tay báo oán”!' },
    i_koto_katana_mechanism: { title: 'Cơ cấu Dây đàn Koto + Ống nước tre rút kiếm qua vườn tuyết', icon: '🧩', type: 'insight',
      desc: 'Kenzo buộc dây đàn Koto vào chắn kiếm Katana, luồn qua khe cửa thông gió, chạy dọc trong lòng ống dẫn nước tre (Kakei) ra vườn rồi nối với bao than đối trọng ngoài suối. Khi Kenzo tự lao người vào mũi kiếm và buông tay, bao than rơi xuống giật căng dây đàn — quật vào mặt đàn Koto phát ra tiếng ngân đồng thời kéo thanh kiếm Katana bay vọt qua cửa sổ cắm thẳng xuống vườn tuyết!' },
    i_honjin_full_truth: { title: 'Bi kịch tự sát kép của Kenzo và đồng phạm Saburo', icon: '🧩', type: 'insight',
      desc: 'Vì lòng tự tôn mục ruỗng của gia tộc Bản Trận, Ichiyanagi Kenzo đã chém chết cô dâu Katsuko rồi tự sát bằng cơ cấu dây đàn Koto, với sự trợ giúp của người em họ Saburo — kẻ đã lội dọc lòng suối để cắt thu hồi sợi dây đàn nhằm đổi lấy quyền thừa kế!' }
  },
  locations: [
    { id: 'hanare', name: 'Biệt viện tân hôn “Hanare” (Hiện trường mật thất)', icon: '🏯',
      desc: 'Căn phòng truyền thống khóa kín từ bên trong với bức bình phong dát vàng và cây đàn Koto đẫm máu.',
      points: [
        { id: 'p_screen', name: 'Bức bình phong & Dấu bàn tay máu 3 ngón', clue: 'c_three_finger_blood',
          text: 'Kindaichi săm soi dấu bàn tay 3 ngón trên bình phong rồi dẫn bạn xuống hầm than cũ: ở đó có xác một gã lang thang đã chết từ tuần trước bị cắt mất bàn tay phải!' },
        { id: 'p_bodies', name: 'Khám nghiệm vết thương của Kenzo & Katsuko', clue: 'c_kenzo_suicide_angle',
          text: 'Cô dâu Katsuko bị chém từ phía sau, nhưng vết đâm trên ngực gia chủ Kenzo lại là góc tự lao người vào kiếm cố định!' }
      ] },
    { id: 'snow_garden', name: 'Vườn tuyết trắng & Hệ thống ống nước tre Kakei', icon: '❄️',
      desc: 'Khu vườn Nhật Bản phủ lớp tuyết dày 15cm trắng xóa bao quanh Biệt viện Hanare.',
      points: [
        { id: 'p_katana', name: 'Thanh kiếm Katana cắm giữa bồn hoa tuyết', clue: 'c_snow_katana',
          text: 'Cách hiên nhà 10m, thanh kiếm Katana dính máu cắm thẳng đứng giữa lớp tuyết trắng tinh không hề có một dấu chân người!' },
        { id: 'p_bamboo', name: 'Ống dẫn nước tre (Kakei) & Cây đàn Koto', clue: 'c_koto_string_kakei', requires: ['c_snow_katana'],
          text: 'Kindaichi reo lên: “Nhìn vết cứa trong lòng ống tre dẫn nước suối này xem! Sợi dây đàn Koto đã được luồn từ trong phòng qua khe thông gió rồi chạy dọc theo ống tre này ra tận giữa vườn!”' },
        { id: 'p_stream', name: 'Khám xét lòng suối nhỏ cuối vườn', clue: 'c_charcoal_weight', requires: ['c_koto_string_kakei'],
          text: 'Dưới lòng suối nước chảy không đọng tuyết là một bao tải than củi nặng dùng làm đối trọng kéo căng sợi dây đàn Koto!' }
      ] },
    { id: 'main_house', name: 'Thư phòng Bản Trận & Phòng của Saburo', icon: '📚',
      desc: 'Khu nhà chính cổ kính của gia tộc Ichiyanagi.',
      points: [
        { id: 'p_fireplace', name: 'Mảnh thư cháy dở trong lò sưởi của Kenzo', clue: 'c_kenzo_purity_obsession',
          text: 'Những dòng chữ điên loạn của Kenzo khi biết vị hôn thê Katsuko từng có mối tình đầu trong quá khứ: hắn thà chết chứ không chịu mang tiếng cưới một người phụ nữ “không còn nguyên vẹn” hay mang tiếng tự sát!' },
        { id: 'p_saburo_room', name: 'Tủ sách mật thất của người em họ Saburo', clue: 'c_saburo_mystery_books',
          text: 'Trong tủ sách trinh thám của Saburo có bản vẽ tay thiết kế cơ cấu rút hung khí khỏi phòng kín bằng dây đàn và đối trọng!' }
      ] }
  ],
  suspects: [
    { id: 'saburo', name: 'Ichiyanagi Saburo (Em họ)', age: 25, avatar: '三', color: '#1e3a8a',
      role: 'Em họ trong gia tộc · Kẻ cuồng tiểu thuyết mật thất',
      bio: 'Thất nghiệp, nợ nần nhưng đọc ngấu nghiến hàng trăm cuốn tiểu thuyết trinh thám cổ điển phương Tây.',
      intro: 'Saburo băng bó vết thương nông trên vai, ánh mắt lấm lét khi thấy Kindaichi cầm sợi dây đàn Koto bước vào.',
      topics: [
        { id: 't_attack', label: 'Về việc bị “gã 3 ngón tay” tấn công', lines: [
          ['them', 'Đêm đó tôi nghe tiếng động nên chạy ra bờ suối thì bị bóng đen 3 ngón tay chém sượt qua vai rồi biến mất vào rừng!'],
          ['partner', 'Lạ thật đấy anh Saburo, sao hắn chém anh ngoài vườn mà trên tuyết lại chỉ có dấu chân của một mình anh lội từ dưới suối lên thế nhỉ?'] ] }
      ],
      presents: {
        i_koto_katana_mechanism: { lines: [
          ['partner', 'Chúng tôi đã thực nghiệm lại cơ cấu Dây đàn Koto luồn qua ống nước tre Kakei nối với bao than dưới suối! Khi bao than rơi xuống, thanh kiếm Katana bay vọt từ trong phòng ra cắm giữa vườn tuyết!'],
          ['me', 'Và người đã lội dọc lòng suối để cắt thu hồi sợi dây đàn Koto chính là anh, Saburo!'],
          ['them', 'Tôi… tôi chỉ làm theo lời cầu xin của anh họ Kenzo thôi!'] ] },
        i_honjin_full_truth: { lines: [
          ['partner', 'Anh Kenzo vì căn bệnh sĩ diện và ám ảnh cực đoan đã nhờ anh thiết kế mật thất này để giết cô dâu Katsuko rồi tự sát, đổi lại anh ta viết di chúc để lại tài sản cho anh, đúng không?'],
          ['narr', 'Saburo gục đầu xuống chiếu Tatami, thú nhận toàn bộ vai trò đồng phạm của mình.'],
          ['them', 'Đúng vậy… Anh Kenzo đã tự chặt bàn tay của cái xác lang thang để đóng dấu lên bình phong, tự chém chết chị dâu rồi lao ngực vào thanh kiếm đã buộc sẵn dây đàn Koto…'] ] }
      },
      defaultPresent: 'Saburo ôm vai giả vờ đau đớn không trả lời.'
    },
    { id: 'ginzo', name: 'Kubo Ginzo (Chú của cô dâu)', age: 52, avatar: '銀', color: '#15803d',
      role: 'Người giám hộ của cô dâu Katsuko · Người mời Kindaichi phá án',
      bio: 'Ông chủ trang trại bộc trực, thương cháu gái Katsuko như con ruột.',
      intro: 'Ông Ginzo nắm chặt tay Kindaichi: “Cậu Kindaichi, xin cậu hãy rửa sạch nỗi oan khuất cho con bé Katsuko nhà tôi!”',
      topics: [
        { id: 't_katsuko_past', label: 'Về mối tình đầu của Katsuko', lines: [
          ['them', 'Con bé Katsuko trong sáng và ngay thẳng lắm. Hồi trẻ nó từng thương một anh công nhân bị tai nạn mất 2 ngón tay, nhưng chỉ dừng ở mức hẹn hò trong sáng. Nó thật thà kể hết cho chồng sắp cưới nghe, nào ngờ thằng gia chủ Kenzo lại có tâm lý bệnh hoạn đến thế!'] ] }
      ],
      presents: {
        i_phantom_3finger: { lines: [
          ['partner', 'Bác Ginzo yên tâm, Katsuko hoàn toàn trong sạch. Kẻ sát nhân 3 ngón tay chỉ là một màn kịch do chính Kenzo dựng lên từ một cái xác chết vì bệnh lao mà thôi.'],
          ['them', 'Trời cao đất dày ơi… Chỉ vì cái danh hão Bản Trận mà nó nhẫn tâm giết hại cháu gái tôi như vậy ư?!'] ] }
      },
      defaultPresent: 'Ông Ginzo thở dài đau xót.'
    }
  ],
  combos: [
    { a: 'c_three_finger_blood', b: 'c_kenzo_purity_obsession', result: 'i_phantom_3finger' },
    { a: 'c_snow_katana', b: 'c_koto_string_kakei', result: 'i_koto_katana_mechanism' },
    { a: 'c_koto_string_kakei', b: 'c_charcoal_weight', result: 'i_koto_katana_mechanism' },
    { a: 'i_koto_katana_mechanism', b: 'c_kenzo_suicide_angle', result: 'i_honjin_full_truth' },
    { a: 'i_koto_katana_mechanism', b: 'c_saburo_mystery_books', result: 'i_honjin_full_truth' }
  ],
  hints: [
    { until: 'i_phantom_3finger', text: 'Gã đàn ông 3 ngón tay thực chất là ai? Hãy kết hợp Dấu bàn tay máu & cái xác dưới hầm than với Chứng ám ảnh cực đoan của Kenzo.' },
    { until: 'i_koto_katana_mechanism', text: 'Làm sao thanh kiếm Katana bay ra khỏi phòng kín và cắm giữa vườn tuyết? Hãy ghép Thanh kiếm giữa vườn tuyết (hoặc Bao tải than dưới suối) với Sợi dây đàn Koto & ống nước tre Kakei!' },
    { until: 'i_honjin_full_truth', text: 'Ai đã thực hiện vụ giết người trong phòng tân hôn và ai thu hồi dây đàn? Hãy kết hợp Cơ cấu dây đàn Koto với Góc đâm tự sát của Kenzo (hoặc Tủ sách của Saburo)!' }
  ],
  finalHint: 'Mật thất tuyết trắng và tiếng đàn Koto tại Bản Trận đã được Kindaichi Kosuke hóa giải hoàn toàn. Hãy tới Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Bằng cách nào thanh kiếm Katana dính máu lại thoát ra khỏi căn phòng tân hôn khóa kín từ bên trong và cắm giữa vườn tuyết trắng mà không để lại dấu chân?',
      options: [
        'Hung thủ dùng cần câu cá dài câu thanh kiếm qua mái nhà',
        'Chuôi kiếm Katana được buộc vào sợi dây đàn Koto luồn qua khe thông gió, chạy dọc theo lòng ống dẫn nước bằng tre (Kakei) ra vườn và nối với bao than đối trọng dưới suối; khi buông tay, bao than rơi xuống giật căng dây đàn Koto kéo thanh kiếm bay vọt ra cắm giữa vườn tuyết!',
        'Hung thủ ném thanh kiếm qua khe cửa rồi chờ tuyết rơi lấp kín',
        'Thanh kiếm ngoài vườn là thanh kiếm thứ hai được cắm sẵn từ chiều'
      ],
      answer: 1, support: ['i_koto_katana_mechanism', 'c_koto_string_kakei', 'c_charcoal_weight'] },
    { id: 'q2', q: 'Sự thật về “Gã sát nhân 3 ngón tay” và dấu bàn tay máu trên bức bình phong là gì?',
      options: [
        'Người yêu cũ 3 ngón tay của cô dâu Katsuko thực sự đã đột nhập giết hai vợ chồng',
        'Không hề có sát thủ 3 ngón tay nào còn sống: gia chủ Kenzo đã chặt lấy bàn tay 3 ngón của một gã lang thang chết vì bệnh lao từ tuần trước để tự hóa trang và đóng dấu máu lên bình phong tạo hung thủ giả!',
        'Em họ Saburo tự chặt 2 ngón tay của mình để gây án',
        'Đó là dấu chân của một loài thú rừng'
      ],
      answer: 1, support: ['i_phantom_3finger', 'c_three_finger_blood'] },
    { id: 'q3', q: 'Ai là hung thủ sát hại cô dâu Katsuko và ai là đồng phạm giúp hoàn tất mật thất Bản Trận?',
      options: [
        'Em họ Saburo một mình giết cả hai vợ chồng để cướp tài sản',
        'Chính nạn nhân — gia chủ Ichiyanagi Kenzo — vì chứng ám ảnh sạch sẽ cực đoan và sĩ diện dòng tộc đã chém chết cô dâu Katsuko rồi tự sát bằng cơ cấu dây đàn Koto; người em họ Saburo là đồng phạm lội dưới suối thu hồi dây đàn!',
        'Ông chú Kubo Ginzo trả thù gia tộc Bản Trận',
        'Mẹ ruột của Kenzo gây án vì phản đối hôn sự'
      ],
      answer: 1, support: ['i_honjin_full_truth', 'c_kenzo_suicide_angle', 'c_saburo_mystery_books'] }
  ],
  truth: [
    'Đằng sau vụ thảm sát mật thất rùng rợn trong đêm tân hôn tại Bản Trận không phải là một tên sát nhân 3 ngón tay siêu phàm nào cả, mà là bi kịch của lòng tự tôn dòng tộc mù quáng và chứng ám ảnh cưỡng chế bệnh hoạn của chính gia chủ Ichiyanagi Kenzo.',
    'Khi cô dâu Katsuko thành thật thú nhận về mối tình đầu thuở thiếu thời với một người đàn ông mất 2 ngón tay, tâm trí cực đoan của Kenzo sụp đổ: hắn không thể chịu nổi ý nghĩ vợ mình từng yêu người khác, nhưng sĩ diện của một gia chủ Bản Trận không cho phép hắn hủy hôn hay mang tiếng tự sát.',
    'Tình cờ phát hiện xác một gã lang thang mất 2 ngón tay chết vì bệnh lao, Kenzo đã cắt lấy bàn tay đó và nhờ người em họ mê tiểu thuyết trinh thám là Saburo cùng thiết kế một cơ cấu cơ khí điên rồ: dùng sợi dây đàn Koto luồn qua ống dẫn nước bằng tre (Kakei) nối với bao than đối trọng ngoài suối.',
    'Đêm tân hôn tuyết rơi trắng xóa, Kenzo đóng dấu bàn tay máu 3 ngón lên bình phong, chém chết cô dâu Katsuko từ phía sau rồi tự lao ngực vào mũi kiếm Katana. Khi hắn ngã xuống, bao than ngoài suối tụt xuống kéo căng sợi dây — quật vào mặt đàn Koto phát ra tiếng ngân báo tử đồng thời giật thanh kiếm Katana bay vọt qua ô cửa thông gió ra cắm phập giữa vườn tuyết trắng tinh khôi!'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Án Mạng Tại Bản Trận” (本陣殺人事件, 1946) của Yokomizo Seishi — tác phẩm đoạt giải thưởng đầu tiên của Hội Nhà Văn Trinh Thám Nhật Bản và khai sinh hình tượng thám tử Kindaichi Kosuke.'
});
