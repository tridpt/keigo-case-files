/* =========================================================================
 * VỤ ÁN 4 — NGƯỜI MỚI ĐẾN Ở NINGYOCHO
 * Phỏng theo 新参者 (Shinzanmono, 2009) — Series Kaga Kyoichiro
 * Lời thoại & cách dàn dựng manh mối được viết mới cho game; các mảnh ghép
 * phố cổ Ningyocho được cô đọng thành một hồ sơ điều tra thống nhất.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'newcomer',
  order: 4,
  title: 'Người Mới Đến Ở Ningyocho',
  original: '新参者 · 2009 · Series Kaga Kyoichiro',
  kanji: '新',
  theme: { a: '#2b2118', b: '#8c4a27', accent: '#f4a261' },
  difficulty: 3,
  par: 28,
  tagline: 'Một hộp bánh nhân wasabi, một chiếc kéo bếp thừa, và những lời nói dối nhỏ bé giữa phố cổ.',
  playerRole: 'Bạn là thanh tra Matsumiya Shuhei, đi cùng người anh họ Kaga Kyoichiro vừa chuyển về đồn cảnh sát Nihonbashi.',
  partner: {
    name: 'Kaga Kyoichiro',
    title: 'Thanh tra — “người mới đến” của đồn Nihonbashi',
    avatar: '加',
    color: '#8c4a27'
  },
  briefing: [
    'Mitsui Mineko (45 tuổi), một phụ nữ vừa ly hôn và chuyển đến khu phố cổ Ningyocho chưa đầy nửa năm, được phát hiện bị siết cổ tử vong ngay trong căn hộ của mình.',
    'Không có dấu hiệu cạy cửa. Trên bàn trà đặt một hộp bánh nướng ningyo-yaki đã ăn dở — và kỳ lạ thay, một chiếc bánh trong hộp lại chứa đầy mù tạt wasabi thay vì nhân đậu đỏ.',
    'Trong khi tổ điều tra tập trung vào chồng cũ của nạn nhân là Kiyose Naoki và cậu con trai làm nghề kịch câm Kiyose Koki, Kaga lại thong thả dạo quanh các cửa tiệm gia truyền ở Ningyocho để hỏi về… bánh ngọt, kéo bếp và đồng hồ.',
    'Kaga mỉm cười: “Người dân phố này ai cũng nói dối một chút. Không phải vì họ là hung thủ, mà vì họ đang giữ gìn một điều gì đó cho người mình thương. Gỡ hết những lời nói dối hiền lành ấy ra, kẻ sát nhân thật sự sẽ lộ diện.”'
  ],
  clues: {
    c_body_mn: { title: 'Hiện trường căn hộ Mineko', icon: '🧶', type: 'evidence',
      desc: 'Mitsui Mineko tử vong do bị siết cổ bằng dây vải vào khoảng 15:00–16:00. Căn hộ gọn gàng, không có dấu vết cạy phá — nạn nhân đã tự mở cửa cho hung thủ.' },
    c_wasabi_cake: { title: 'Bánh ningyo-yaki nhân wasabi', icon: '🥮', type: 'evidence',
      desc: 'Trên bàn có đĩa bánh ningyo-yaki và hai tách trà. Một chiếc bánh bị cắn dở rồi nhả ra: bên trong nhồi đầy mù tạt wasabi. Chỉ có một tách trà có dấu môi của Mineko; tách kia chưa hề được nhấp.' },
    c_scissors_apt: { title: 'Chiếc kéo bếp mới tinh', icon: '✂️', type: 'evidence',
      desc: 'Trong ngăn kéo bếp của Mineko có một chiếc kéo rèn thủ công hoàn toàn mới, vẫn còn nguyên hộp của tiệm Hamakaze.' },
    c_ins_form: { title: 'Đơn rút tiền bảo hiểm', icon: '📄', type: 'evidence',
      desc: 'Trên bàn viết có mẫu đơn yêu cầu giải ngân một phần hợp đồng bảo hiểm nhân thọ của Mineko, trị giá 5 triệu yên, chưa kịp ký tên.' },
    c_bakery_cake: { title: 'Hộp bánh mừng sinh nhật', icon: '🎁', type: 'testimony',
      desc: 'Ông chủ tiệm bánh nướng khai: hộp bánh có một chiếc nhân wasabi là hàng đặt riêng cho một bữa tiệc cược vui của công ty vệ sinh Kiyose — hoàn toàn không bán lẻ cho khách vãng lai.' },
    c_cutlery_order: { title: 'Đơn đặt chiếc kéo thứ hai', icon: '🔪', type: 'testimony',
      desc: 'Chủ tiệm dao kéo Hamakaze cho biết: ngay sáng hôm xảy ra án mạng, bà Mineko ghé tiệm đặt mua thêm một chiếc kéo bếp y hệt chiếc bà vừa mua tuần trước.' },
    c_clock_witness: { title: 'Lời kể ở tiệm đồng hồ', icon: '🕰️', type: 'testimony',
      desc: 'Ông chủ tiệm đồng hồ cổ nhớ rõ: khoảng 14:30 hôm đó, Mineko đứng chỉnh lại đồng hồ đeo tay trước cửa tiệm và vui vẻ nói mình sắp đón “một vị khách mang tin mừng cho con trai”.' },
    c_naoki_alibi: { title: 'Sự im lặng của chồng cũ', icon: '🤐', type: 'testimony',
      desc: 'Kiyose Naoki (chồng cũ nạn nhân) thừa nhận có cãi vã với Mineko về chuyện tiền bạc hôm trước, nhưng từ chối giải thích ông đã ở đâu lúc 15:00 ngày xảy ra án mạng.' },
    c_naoki_visit: { title: 'Dấu tay trên gạt tàn', icon: '🚬', type: 'evidence',
      desc: 'Giám định tìm thấy một đầu mẩu thuốc lá hiệu Naoki hay hút trong túi áo khoác của chính ông — thứ thuốc lá từng vương tàn ở hành lang căn hộ Mineko chiều hôm đó.' },
    c_koki_debt: { title: 'Khoản nợ của cậu con trai', icon: '🎭', type: 'testimony',
      desc: 'Kiyose Koki bỏ nhà theo đoàn kịch, đang nợ tiền thuê sân khấu. Cậu thừa nhận đã nhắn tin xin mẹ 5 triệu yên và có ghé qua dưới lầu căn hộ của mẹ chiều hôm đó nhưng không lên.' },
    c_koki_scissors: { title: 'Món quà cho con trai', icon: '📦', type: 'testimony',
      desc: 'Koki nghẹn ngào khi thấy chiếc kéo: “Tuần trước em sang thăm mẹ, khen chiếc kéo bếp của mẹ cắt thích quá. Mẹ đã đưa chiếc kéo mới của mẹ cho em… còn bà thì đi mua chiếc khác cho mình.”' },
    c_kishida_cake: { title: 'Người mang hộp bánh đi', icon: '🧳', type: 'testimony',
      desc: 'Thư ký công ty Kiyose xác nhận: chiều hôm xảy ra vụ án, cố vấn thuế kiêm đại lý bảo hiểm Kishida Yosaku ghé văn phòng và cầm đi một hộp bánh ningyo-yaki trên bàn tiệc để “mang biếu bà Mineko”.' },
    c_kishida_ledger: { title: 'Sổ sách bảo hiểm bất thường', icon: '📊', type: 'evidence',
      desc: 'Kiểm tra chéo hồ sơ tại công ty bảo hiểm: hợp đồng của Mineko thực chất đã bị rút cạn giá trị hoàn lại từ nửa năm trước bằng chữ ký ủy quyền của đại lý phụ trách — Kishida Yosaku.' },
    c_kishida_son: { title: 'Những món đồ hiệu cho cháu nội', icon: '🧸', type: 'testimony',
      desc: 'Kishida thường xuyên mua đồ đắt tiền và bù lỗ cho cửa hàng làm ăn thua lỗ của con trai mình, vượt xa mức thu nhập cố vấn thông thường.' },
    c_naoki_confess_truth: { title: 'Nỗi sợ của người cha', icon: '💔', type: 'testimony',
      desc: 'Khi bị dồn hỏi, Naoki bật khóc: chiều hôm đó ông đến căn hộ lúc 15:40 thì thấy Mineko đã chết. Thấy tờ đơn rút 5 triệu yên trên bàn, ông tưởng chính con trai Koki đã giết mẹ nên lặng lẽ thu dọn mẩu thuốc lá có thể liên lụy và giữ im lặng.' },

    i_scissors_truth: { title: 'Chiếc kéo không phải hung khí', icon: '🧩', type: 'insight',
      desc: 'Mineko mua chiếc kéo thứ hai chỉ vì đã tặng chiếc đầu tiên cho con trai. Giữa hai mẹ con không hề có cuộc cãi vã sinh tử nào.' },
    i_wasabi_visitor: { title: 'Vị khách mang hộp bánh công ty', icon: '🧩', type: 'insight',
      desc: 'Mineko ăn phải chiếc bánh nhân wasabi ngay khi tiếp khách, còn vị khách chưa kịp uống ngụm trà nào đã ra tay. Kẻ mang hộp bánh từ công ty Kiyose đến căn hộ chính là Kishida Yosaku.' },
    i_father_shield: { title: 'Lời nói dối của người cha', icon: '🧩', type: 'insight',
      desc: 'Naoki im lặng không phải vì ông giết vợ cũ, mà vì ông phát hiện thi thể sau đó và lầm tưởng con trai mình là thủ phạm.' },
    i_embezzle_motive: { title: 'Khoản tiền 5 triệu yên không tồn tại', icon: '🧩', type: 'insight',
      desc: 'Mineko muốn rút 5 triệu yên bảo hiểm để giúp con trai dựng vở kịch. Nhưng Kishida đã biển thủ khoản tiền đó từ trước; khi không thể trì hoãn thêm, ông ta đã sát hại bà.' }
  },
  locations: [
    { id: 'apt', name: 'Căn hộ của Mitsui Mineko', icon: '🏠',
      desc: 'Căn hộ nhỏ nhìn ra con hẻm yên tĩnh của phố Ningyocho.',
      points: [
        { id: 'p_body', name: 'Khu vực phòng khách', clue: 'c_body_mn',
          text: 'Mineko nằm cạnh bàn trà thấp. Không có đồ đạc bị lục tung.' },
        { id: 'p_table', name: 'Đĩa bánh ningyo-yaki & tách trà', clue: 'c_wasabi_cake',
          text: 'Chiếc bánh hình khuôn mặt cười bị cắn một nửa, lộ lớp wasabi xanh ngắt. Kaga cúi xuống ngửi: “Khách đến nhà chưa kịp uống trà thì chuyện đã xảy ra.”' },
        { id: 'p_kitchen', name: 'Ngăn kéo bếp', clue: 'c_scissors_apt',
          text: 'Một chiếc kéo bếp sáng loáng nằm trong hộp giấy của tiệm Hamakaze.' },
        { id: 'p_desk', name: 'Bàn viết nhỏ', clue: 'c_ins_form',
          text: 'Mẫu đơn đề nghị rút 5 triệu yên từ hợp đồng bảo hiểm nhân thọ. Phần chữ ký còn bỏ trống.' }
      ] },
    { id: 'street', name: 'Phố thương mại Amazake-yokocho', icon: '🏮',
      desc: 'Những cửa hiệu trăm năm tuổi nằm san sát, mùi bánh nướng thơm lừng cả góc phố.',
      points: [
        { id: 'p_bakery', name: 'Tiệm bánh nướng truyền thống', clue: 'c_bakery_cake',
          text: 'Ông chủ tiệm lắc đầu: “Chúng tôi không bao giờ bỏ wasabi vào bánh bán thường. Hôm đó chỉ có một hộp đặt riêng cho tiệc sinh nhật ở công ty ông Kiyose thôi.”' },
        { id: 'p_cutlery', name: 'Tiệm dao kéo Hamakaze', clue: 'c_cutlery_order',
          text: '“Bà Mitsui mới mua một chiếc kéo tuần trước, thế mà sáng hôm xảy ra chuyện lại đến mua thêm một chiếc y hệt. Tôi cũng lấy làm lạ.”' },
        { id: 'p_clock', name: 'Tiệm đồng hồ cổ', clue: 'c_clock_witness',
          text: 'Nghệ nhân già gật gù: “14 giờ 30 bà ấy còn dừng lại chỉnh đồng hồ theo tiếng chuông tiệm tôi. Bà ấy bảo sắp có khách đến làm thủ tục tiền nong cho con trai.”' }
      ] },
    { id: 'company', name: 'Công ty vệ sinh Kiyose', icon: '🏢',
      desc: 'Văn phòng của Kiyose Naoki — chồng cũ nạn nhân.',
      points: [
        { id: 'p_sec', name: 'Hỏi cô thư ký về hộp bánh', clue: 'c_kishida_cake',
          text: '“Chúng em đặt hộp bánh có một chiếc nhân wasabi để trêu sếp nhân dịp sinh nhật. Nhưng chưa kịp ăn thì bác Kishida — cố vấn thuế của công ty — xin một hộp mang đi thăm bà Mineko.”' },
        { id: 'p_corridor', name: 'Báo cáo giám định dấu vết', clue: 'c_naoki_visit',
          text: 'Tàn thuốc lá thu được ở chiếu nghỉ cầu thang căn hộ Mineko trùng khớp với loại thuốc Kiyose Naoki sử dụng.' }
      ] },
    { id: 'insurance', name: 'Trụ sở công ty bảo hiểm', icon: '🏦', requires: ['c_ins_form'],
      desc: 'Nơi lưu trữ hồ sơ gốc hợp đồng bảo hiểm của gia đình Kiyose.',
      points: [
        { id: 'p_audit', name: 'Đối chiếu lịch sử hợp đồng', clue: 'c_kishida_ledger',
          text: 'Nhân viên kiểm toán tái mặt: “Theo hệ thống, khoản 5 triệu yên này đã được tất toán từ sáu tháng trước qua hồ sơ do đại lý Kishida Yosaku nộp!”' },
        { id: 'p_family', name: 'Tìm hiểu hoàn cảnh Kishida', clue: 'c_kishida_son',
          text: 'Đồng nghiệp cho biết Kishida gần đây liên tục xoay tiền để trả nợ cho cửa hàng của con trai ông ta.' }
      ] }
  ],
  suspects: [
    { id: 'naoki', name: 'Kiyose Naoki', age: 48, avatar: '直', color: '#6b705c',
      role: 'Chồng cũ nạn nhân · Giám đốc công ty vệ sinh',
      bio: 'Cộc cằn, nghiêm khắc, từng phản đối gay gắt việc con trai theo nghề kịch và việc vợ cũ chuyển ra ở riêng.',
      intro: 'Naoki khoanh tay, ánh mắt nặng trĩu. “Tôi không có gì để nói với các anh.”',
      topics: [
        { id: 't_alibi_n', label: 'Chiều hôm đó ông ở đâu?', clue: 'c_naoki_alibi', lines: [
          ['me', 'Từ 15:00 đến 16:00 ngày xảy ra án mạng, ông ở đâu?'],
          ['them', 'Tôi đi dạo một mình. Không ai làm chứng cả. Các anh muốn nghĩ sao thì nghĩ.'] ] },
        { id: 't_divorce', label: 'Vì sao hai người ly hôn?', lines: [
          ['them', 'Cô ấy chiều thằng Koki quá mức. Thằng bé bỏ đại học đi diễn kịch, tôi cắt viện trợ thì cô ấy đòi ly hôn để tự đi làm nuôi ước mơ của con.'] ] },
        { id: 't_kishida_n', label: 'Về cố vấn Kishida', lines: [
          ['them', 'Anh Kishida là đàn anh tôi tin tưởng nhất từ ngày lập nghiệp. Chuyện sổ sách, bảo hiểm của cả nhà tôi đều giao cho anh ấy.'] ] }
      ],
      presents: {
        c_naoki_visit: { clue: 'c_naoki_confess_truth', lines: [
          ['me', 'Ông đã đến căn hộ của bà Mineko chiều hôm đó. Và ông đã thấy tờ đơn rút 5 triệu yên trên bàn.'],
          ['partner', 'Ông không giết vợ mình, ông Kiyose. Ông im lặng vì lúc bước vào phòng, ông tưởng chính Koki đã làm chuyện đó.'],
          ['narr', 'Người đàn ông cứng rắn bỗng sụp vai xuống.'],
          ['them', 'Khi tôi đến nơi lúc 15:40, cửa không khóa… Mineko đã lạnh ngắt. Trên bàn là tờ đơn 5 triệu yên — đúng số tiền thằng Koki vừa hỏi xin. Tôi sợ đến mức chỉ biết xóa dấu vết rồi bỏ đi…'] ] },
        c_wasabi_cake: { lines: [
          ['them', 'Hộp bánh của công ty tôi? Sao nó lại ở nhà Mineko được?'] ] }
      },
      defaultPresent: 'Naoki lắc đầu nặng nề. “Tôi không biết.”'
    },
    { id: 'koki', name: 'Kiyose Koki', age: 22, avatar: '弘', color: '#457b9d',
      role: 'Con trai nạn nhân · diễn viên kịch trẻ',
      bio: 'Theo đuổi sân khấu bất chấp sự phản đối của cha. Rất thương mẹ nhưng luôn mặc cảm vì khiến bố mẹ bất hòa.',
      intro: 'Koki cúi gằm mặt. “Mẹ là người duy nhất tin tưởng em…”',
      topics: [
        { id: 't_money', label: 'Khoản tiền 5 triệu yên', clue: 'c_koki_debt', lines: [
          ['them', 'Đoàn kịch của bọn em có cơ hội thuê nhà hát lớn nhưng thiếu 5 triệu yên đặt cọc. Em đã gọi tâm sự với mẹ… Mẹ bảo cứ yên tâm, mẹ có khoản bảo hiểm sắp rút được.'] ] },
        { id: 't_afternoon', label: 'Chiều hôm đó em ở đâu?', lines: [
          ['them', 'Em tập kịch ở Shinjuku từ 14:00 đến 17:00, cả đoàn đều làm chứng. Tối em mới ghé qua dưới lầu nhà mẹ nhưng thấy xe cảnh sát…'] ] }
      ],
      presents: {
        c_scissors_apt: { clue: 'c_koki_scissors', lines: [
          ['me', 'Mẹ cậu vừa mua một chiếc kéo bếp tuần trước, rồi sáng hôm mất lại đi mua thêm một chiếc y hệt.'],
          ['narr', 'Nước mắt Koki rơi xuống bàn.'],
          ['them', 'Tuần trước em ghé phòng mẹ nấu ăn, em khen chiếc kéo cắt êm quá. Mẹ gói luôn chiếc kéo đó bắt em mang về… Vậy là sáng hôm đó mẹ đi mua lại chiếc khác cho mình.'] ] }
      },
      defaultPresent: 'Koki lắc đầu. “Em không rõ chuyện này ạ.”'
    },
    { id: 'kishida', name: 'Kishida Yosaku', age: 55, avatar: '岸', color: '#9c6644',
      role: 'Cố vấn thuế & bảo hiểm của gia đình Kiyose',
      bio: 'Bạn vong niên của Naoki, người nắm giữ toàn bộ hồ sơ tài chính và bảo hiểm của gia đình suốt mười lăm năm.',
      intro: 'Kishida thở dài, vẻ mặt đau buồn. “Bà Mineko hiền hậu thế, sao lại gặp chuyện cơ chứ…”',
      topics: [
        { id: 't_visit_k', label: 'Ông có gặp bà Mineko hôm đó không?', lines: [
          ['them', 'Bà ấy có nhờ tôi tư vấn rút một khoản bảo hiểm, nhưng tôi bận việc nên hẹn sang tuần sau mới qua.'] ] },
        { id: 't_family_k', label: 'Quan hệ giữa hai vợ chồng Kiyose', lines: [
          ['them', 'Naoki nóng tính lắm, còn thằng Koki thì đang túng tiền. Tôi nói thật, các anh nên hỏi kỹ hai bố con họ…'] ] }
      ],
      presents: {
        c_kishida_cake: { lines: [
          ['me', 'Thư ký công ty thấy ông cầm hộp bánh ningyo-yaki có nhân wasabi đi thăm bà Mineko chiều hôm đó.'],
          ['them', 'À… tôi định ghé nhưng giữa đường nhớ ra có việc nên mang hộp bánh… cho người khác!'],
          ['partner', 'Thế sao chiếc bánh nhân wasabi duy nhất của hộp đó lại nằm trên bàn trà nhà bà Mineko?'] ] },
        c_kishida_ledger: { lines: [
          ['me', 'Khoản bảo hiểm 5 triệu yên của bà Mineko đã bị ông rút sạch từ nửa năm trước để bù lỗ cho con trai mình.'],
          ['narr', 'Bàn tay Kishida run bần bật.'],
          ['them', 'Tôi… tôi định xoay tiền trả lại vào tháng sau! Nhưng bà ấy nhất quyết đòi rút ngay trong tuần này để đưa cho thằng Koki…'] ] }
      },
      defaultPresent: 'Kishida lau mồ hôi trán. “Chuyện này tôi không nắm được đâu.”'
    }
  ],
  combos: [
    { a: 'c_cutlery_order', b: 'c_koki_scissors', result: 'i_scissors_truth' },
    { a: 'c_wasabi_cake', b: 'c_kishida_cake', result: 'i_wasabi_visitor' },
    { a: 'c_bakery_cake', b: 'c_kishida_cake', result: 'i_wasabi_visitor' },
    { a: 'c_naoki_alibi', b: 'c_naoki_confess_truth', result: 'i_father_shield' },
    { a: 'c_ins_form', b: 'c_kishida_ledger', result: 'i_embezzle_motive' },
    { a: 'c_koki_debt', b: 'c_kishida_ledger', result: 'i_embezzle_motive' }
  ],
  hints: [
    { until: 'c_bakery_cake', text: 'Chiếc bánh ningyo-yaki có nhân wasabi không phải thứ mua ngẫu nhiên. Hãy hỏi tiệm bánh trên phố Amazake-yokocho.' },
    { until: 'i_scissors_truth', text: 'Tại sao một người phụ nữ sống một mình lại mua hai chiếc kéo bếp giống hệt nhau trong một tuần? Hãy hỏi con trai bà ấy.' },
    { until: 'i_wasabi_visitor', text: 'Ai đã cầm hộp bánh sinh nhật từ công ty Kiyose đến căn hộ của Mineko?' },
    { until: 'i_father_shield', text: 'Dấu vết thuốc lá chứng minh ông Naoki đã đến hiện trường. Hãy đối chất ông ấy để biết vì sao ông ấy im lặng.' },
    { until: 'i_embezzle_motive', text: 'Tờ đơn rút 5 triệu yên bảo hiểm trên bàn — số tiền đó thực sự còn trong tài khoản chứ?' }
  ],
  finalHint: 'Những lời nói dối của người phố cổ đã được cởi bỏ. Hãy đến Bảng suy luận để chỉ ra thủ phạm.',
  questions: [
    { id: 'q1', q: 'Ai là người đã sát hại bà Mitsui Mineko?',
      options: ['Kiyose Naoki (chồng cũ)', 'Kiyose Koki (con trai)', 'Kishida Yosaku (cố vấn tài chính & bảo hiểm)', 'Một kẻ cướp vãng lai'],
      answer: 2, support: ['i_wasabi_visitor', 'i_embezzle_motive', 'c_kishida_ledger'] },
    { id: 'q2', q: 'Chiếc bánh ningyo-yaki nhân wasabi trên bàn chứng minh điều gì?',
      options: ['Hung thủ cố đầu độc nạn nhân bằng wasabi', 'Vị khách đến căn hộ lúc 15:00 đã mang theo hộp bánh đặt riêng của công ty Kiyose — chính là Kishida', 'Mineko tự mua về để thử thách con trai', 'Chủ tiệm bánh giao nhầm đơn hàng'],
      answer: 1, support: ['i_wasabi_visitor', 'c_wasabi_cake', 'c_kishida_cake'] },
    { id: 'q3', q: 'Vì sao bà Mineko lại đi mua chiếc kéo bếp thứ hai vào sáng hôm qua đời?',
      options: ['Để tự vệ vì bị đe dọa', 'Vì bà đã tặng chiếc kéo mới mua tuần trước cho con trai Koki', 'Chiếc kéo cũ bị hung thủ lấy mất', 'Do bà bị đãng trí'],
      answer: 1, support: ['i_scissors_truth', 'c_koki_scissors', 'c_cutlery_order'] },
    { id: 'q4', q: 'Tại sao ông Kiyose Naoki lại giấu việc mình đã đến căn hộ chiều hôm đó?',
      options: ['Vì ông là đồng phạm với Kishida', 'Vì ông đến sau khi vợ cũ đã mất, thấy đơn rút 5 triệu yên và lầm tưởng con trai Koki là hung thủ nên muốn bao che', 'Vì ông sợ mất uy tín công ty', 'Vì ông đang hẹn hò bí mật ở khu phố đó'],
      answer: 1, support: ['i_father_shield', 'c_naoki_confess_truth'] },
    { id: 'q5', q: 'Động cơ gây án thật sự của Kishida Yosaku là gì?',
      options: ['Thù hận cá nhân với Naoki', 'Đã lén rút 5 triệu yên bảo hiểm của Mineko từ trước để lo cho con trai mình; khi Mineko đòi giải ngân gấp để giúp Koki, sợ bại lộ nên sát hại bà', 'Tranh chấp đất đai ở Ningyocho', 'Bị Mineko phát hiện ngoại tình'],
      answer: 1, support: ['i_embezzle_motive', 'c_kishida_ledger', 'c_kishida_son'] }
  ],
  truth: [
    'Mitsui Mineko chuyển đến phố cổ Ningyocho để sống tự lập và âm thầm ủng hộ ước mơ sân khấu của con trai Koki. Khi biết con cần 5 triệu yên thuê nhà hát, bà quyết định rút một phần hợp đồng bảo hiểm nhân thọ của mình.',
    'Người phụ trách hợp đồng đó là Kishida Yosaku — cố vấn thân tín của chồng cũ bà. Nhưng từ nửa năm trước, để bù lỗ và nuông chiều cậu con trai của chính mình, Kishida đã giả chữ ký rút cạn khoản tiền đó.',
    'Chiều hôm xảy ra vụ án, Kishida ghé công ty Kiyose, tiện tay lấy hộp bánh ningyo-yaki mừng sinh nhật (vốn có một chiếc trộn wasabi để trêu đùa) mang đến căn hộ của Mineko. Trong lúc Mineko vừa cắn phải chiếc bánh cay nồng và phát hiện ra sự thật về khoản tiền bị rút ruột, Kishida hoảng loạn dùng dây vải siết cổ bà.',
    'Ít phút sau, người chồng cũ Naoki ghé qua. Thấy Mineko đã tắt thở bên tờ đơn rút 5 triệu yên, ông tưởng đứa con trai Koki vì túng quẫn đã sát hại mẹ, nên lặng lẽ xóa dấu vết của mình và cắn răng chịu đựng sự nghi ngờ của cảnh sát.',
    'Bằng cách lắng nghe những câu chuyện tưởng như vụn vặt ở tiệm bánh, tiệm kéo, tiệm đồng hồ, Kaga Kyoichiro không chỉ tìm ra hung thủ, mà còn trả lại cho hai cha con Naoki — Koki tấm lòng mà người mẹ quá cố đã gửi gắm.'
  ],
  sourceNote: 'Phỏng theo tiểu thuyết “Người mới đến” (新参者, 2009) thuộc series thanh tra Kaga Kyoichiro, nổi tiếng với cấu trúc liên hoàn xoay quanh khu phố cổ Ningyocho (Tokyo) và bản phim truyền hình năm 2010.'
});
