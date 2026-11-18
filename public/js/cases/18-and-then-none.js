/* =========================================================================
 * VỤ ÁN 18 — VÀ RỒI CHẲNG CÒN AI (MƯỜI NGƯỜI LÍNH NHỎ)
 * Phỏng theo And Then There Were None (1939) — Agatha Christie
 * Tượng đài số 1 của văn học trinh thám thế giới
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'and-then-none',
  order: 18,
  collection: 'world-classics',
  author: 'Agatha Christie',
  title: 'Và Rồi Chẳng Còn Ai',
  original: 'And Then There Were None · 1939 · Agatha Christie',
  kanji: '無',
  theme: { a: '#062019', b: '#047857', accent: '#34d399' },
  difficulty: 5,
  par: 40,
  tagline: 'Mười bức tượng sứ trên bàn ăn, mười bản án tử hình theo bài đồng dao cổ, và một hòn đảo không còn ai sống sót.',
  playerRole: 'Bạn là Thanh tra Maine thuộc Scotland Yard, cùng Phó ủy viên Sir Thomas Legge đặt chân lên Đảo Chiến Binh sau cơn bão biển để giải mã vụ án không tưởng nhất thế kỷ: 10 thi thể trên một hòn đảo hoàn toàn cô lập!',
  partner: {
    name: 'Sir Thomas Legge',
    title: 'Phó ủy viên Scotland Yard — Chỉ huy điều tra',
    avatar: '警',
    color: '#047857'
  },
  briefing: [
    'Tháng 8 năm 1939, mười con người thuộc đủ mọi tầng lớp xã hội Anh Quốc (Thẩm phán tối cao Wargrave, Bác sĩ Armstrong, Cô giáo Vera Claythorne, Đại úy Lombard, Cựu thanh tra Blore, Tướng MacArthur, Quý bà Emily Brent, công tử Tony Marston và vợ chồng quản gia Rogers) được mời tới biệt thự trên Đảo Chiến Binh (Soldier Island) ngoài khơi bờ biển Devon bởi một vị chủ nhân bí ẩn ký tên là “U. N. Owen”.',
    'Trong bữa tối đầu tiên, một chiếc máy hát giấu sau tường phát lên giọng nói lạnh lùng buộc tội cả 10 người từng gián tiếp hoặc trực tiếp gây ra cái chết của người vô tội trong quá khứ mà pháp luật không thể trừng phạt. Ngay đêm đó, bão biển nổi lên cắt đứt hoàn toàn hòn đảo với đất liền.',
    'Lần lượt từng người một bị sát hại theo đúng phương thức trong bài đồng dao cổ “Mười người lính nhỏ” treo trong từng phòng ngủ — và cứ mỗi người ngã xuống, một bức tượng sứ trên bàn ăn lại biến mất!',
    'Khi tàu cứu hộ cập đảo sau cơn bão: Trên hòn đảo đá trơ trụi không một bóng cây hay hang động ẩn nấp, cả 10 bức tượng sứ đã vỡ vụn và CẢ 10 NGƯỜI ĐỀU ĐÃ CHẾT! Nếu “U. N. Owen” chính là một trong 10 người họ — làm thế nào kẻ sát nhân có thể chết ở vị trí nạn nhân thứ 6 rồi vẫn tiếp tục giết 4 người cuối cùng?!'
  ],
  clues: {
    c_un_owen_unknown: { title: 'Danh tính “U. N. Owen” (UNKNOWN) & Hòn đảo biệt lập', icon: '📜', type: 'evidence',
      desc: 'Tên vị chủ nhân trong các bức thư mời là “Ulick Norman Owen” — đọc nối âm chính là “UNKNOWN” (Kẻ vô danh). Đảo Chiến Binh hoàn toàn trơ trụi và bị bão biển cô lập suốt 3 ngày: hung thủ BẮT BUỘC phải là 1 trong 10 cái xác trên đảo!' },
    c_sixth_victim_diary: { title: 'Nhật ký về nạn nhân thứ 6 (Thẩm phán Wargrave) & thứ 7 (Bác sĩ Armstrong)', icon: '⚖️', type: 'evidence',
      desc: 'Theo nhật ký của Blore và Vera: Tối ngày thứ hai (khi còn 5 người sống), Thẩm phán Wargrave được tìm thấy ngồi bất động trong bộ áo choàng đỏ với một vết đạn trên trán. Bác sĩ Armstrong là người duy nhất bước tới kiểm tra dưới ánh nến mờ và tuyên bố “Ông ấy đã chết”. Và ngay đêm đó, Armstrong lại mất tích rồi chết đuối dưới vách đá (“Một con cá trích đỏ nuốt chửng một người”)!' },
    c_vera_neat_chair: { title: 'Hiện trường treo cổ của Vera (Nạn nhân thứ 10): Chiếc ghế xếp gọn vào tường!', icon: '🪑', type: 'evidence',
      desc: 'Vera Claythorne bắn chết Lombard ngoài bãi biển (vì tưởng Lombard là hung thủ) rồi quay về phòng tự treo cổ ở vị trí cuối cùng (thứ 10). Thế nhưng khi cảnh sát bước vào phòng Vera: Chiếc ghế gỗ có dấu chân cô đứng lên không hề nằm đổ dưới chân xác treo cổ, mà đã được AI ĐÓ nhấc lên và xếp ngay ngắn dựa sát vào tường!' },
    c_wargrave_real_wound: { title: 'Vết đạn thật trên trán Thẩm phán Wargrave & Khăn tay dính sơn đỏ', icon: '🩸', type: 'evidence',
      desc: 'Khi cảnh sát khám nghiệm thi thể Thẩm phán Wargrave nằm trên giường, vết đạn bắn xuyên trán ông ta là THẬT 100%, nhưng độ đông máu cho thấy ông ta chết muộn hơn tối ngày thứ hai rất nhiều! Trong phòng còn có một chiếc khăn tay dính bùn sơn đỏ từng dùng để hóa trang vết đạn giả!' },
    c_elastic_eyeglasses: { title: 'Sợi dây thun kính lão vướng ở tay nắm cửa & Khẩu súng lục', icon: '🔫', type: 'evidence',
      desc: 'Khẩu súng lục nằm trên sàn gần cửa phòng Wargrave (cách xa tay ông ta để trông giống bị người khác bắn). Nhưng trên tay nắm cửa và cò súng có vết hằn của sợi dây thun đàn hồi dùng đeo kính mắt của Wargrave!' },
    c_trawler_bottle: { title: 'Bức tâm thư trong chai thủy tinh do tàu cá Emma Jane vớt được', icon: '🍾', type: 'evidence',
      desc: 'Thuyền trưởng tàu đánh cá Emma Jane gửi đến Scotland Yard một chiếc chai thủy tinh vớt được trên biển Devon chứa bản thú tội viết tay: Hung thủ mắc bệnh ung thư giai đoạn cuối và mang bản tính “vừa khát khao giết chóc mãnh liệt vừa tôn thờ công lý tuyệt đối”, nên đã xếp các nạn nhân chết theo đúng thứ tự mức độ tội lỗi từ nhẹ đến nặng!' },

    i_red_herring_fake_death: { title: 'Cú lừa “Cá trích đỏ” (Red Herring): Giả chết ở vị trí thứ 6', icon: '🧩', type: 'insight',
      desc: 'Thẩm phán Wargrave đã thuyết phục Bác sĩ Armstrong rằng ông cần giả chết (bằng vết bùn đỏ trên trán) để bẫy hung thủ thật. Sau khi Armstrong tuyên bố Wargrave đã chết ở vị trí thứ 6, đêm đó Wargrave dụ Armstrong ra vách đá và đẩy ông ta xuống biển — trở thành bóng ma vô hình tự do sát hại những người còn lại!' },
    i_chair_and_elastic_gun: { title: 'Chiếc ghế ngăn nắp & Cơ cấu tự sát bằng dây thun kính mắt', icon: '🧩', type: 'insight',
      desc: 'Sau khi chứng kiến Vera treo cổ (thứ 10), Thẩm phán Wargrave điềm tĩnh xếp gọn chiếc ghế của cô vào tường, quay về giường nằm đúng tư thế nạn nhân thứ 6, buộc khẩu súng vào sợi dây thun kính lão nối với tay nắm cửa rồi tự bắn xuyên qua đúng vết sơn đỏ trên trán mình! Khi tay ông buông lỏng, dây thun co lại giật khẩu súng văng ra xa giường!' },
    i_wargrave_is_un_owen: { title: 'Thẩm phán Lawrence Wargrave chính là U. N. Owen', icon: '🧩', type: 'insight',
      desc: '“Quan tòa treo cổ” Lawrence Wargrave là đạo diễn, quan tòa, đao phủ và nạn nhân cuối cùng của Đảo Chiến Binh: ông ta phán xử 9 kẻ sát nhân thoát lưới pháp luật rồi tự kết liễu mình để tạo ra một kỳ án không lời giải, chỉ gửi lại sự thật cho biển cả trong chiếc chai thủy tinh!' }
  },
  locations: [
    { id: 'dining_room', name: 'Phòng ăn Biệt thự Đảo Chiến Binh', icon: '🍽️',
      desc: 'Căn phòng ăn nhìn ra biển Devon xám xịt, nơi 10 bức tượng sứ đã vỡ vụn trên bàn kính.',
      points: [
        { id: 'p_owen', name: 'Các bức thư mời của “U. N. Owen” & Bài đồng dao', clue: 'c_un_owen_unknown',
          text: 'Bạn ghép các chữ cái: “Ulick Norman Owen = U. N. Owen = UNKNOWN! Hung thủ chắc chắn nằm trong số 10 cái xác trên đảo này!”' },
        { id: 'p_diary6', name: 'Nhật ký của Blore về cái chết thứ 6 & thứ 7', clue: 'c_sixth_victim_diary',
          text: 'Câu đồng dao thứ 7 viết: “A red herring swallowed one” (Một con cá trích đỏ — tức một cú lừa đánh lạc hướng — nuốt chửng một người). Bác sĩ Armstrong là người duy nhất khám xác Thẩm phán Wargrave ở vị trí thứ 6, và ngay sau đó Armstrong bị đẩy xuống biển!' }
      ] },
    { id: 'vera_room', name: 'Phòng ngủ của Vera Claythorne (Nạn nhân cuối cùng)', icon: '🪑',
      desc: 'Căn phòng trên lầu nơi cô giáo trẻ Vera Claythorne tự treo cổ dưới móc sắt trần nhà.',
      points: [
        { id: 'p_chair', name: 'Chiếc ghế gỗ được xếp ngay ngắn sát chân tường', clue: 'c_vera_neat_chair',
          text: 'Sir Thomas Legge sững sờ: “Vera đứng lên ghế rồi đá ghế treo cổ ở vị trí thứ 10. Vậy tại sao chiếc ghế này không nằm đổ dưới sàn mà lại được AI ĐÓ nhấc lên xếp gọn gàng vào sát tường sau khi cô ta chết?!”' }
      ] },
    { id: 'wargrave_room', name: 'Phòng của Thẩm phán Wargrave & Cảng Devon', icon: '⚖️',
      desc: 'Căn phòng của vị Thẩm phán tối cao Lawrence Wargrave và bến cảng nơi tàu đánh cá cập bờ.',
      points: [
        { id: 'p_wound', name: 'Khám nghiệm vết đạn trên trán Wargrave & Khăn bùn đỏ', clue: 'c_wargrave_real_wound', requires: ['c_sixth_victim_diary'],
          text: 'Vết đạn trên trán Wargrave là thật nhưng mới bắn vào chiều ngày thứ ba, kèm theo chiếc khăn dính sơn đỏ từng dùng để giả chết vào tối ngày thứ hai!' },
        { id: 'p_elastic', name: 'Sợi dây thun kính lão ở tay nắm cửa & Khẩu súng', clue: 'c_elastic_eyeglasses', requires: ['c_vera_neat_chair'],
          text: 'Bạn phát hiện sợi dây thun đeo kính của Wargrave vướng ở chốt cửa: ông ta đã buộc súng vào dây thun căng từ tay nắm cửa rồi tự bắn trên giường để dây thun kéo khẩu súng văng ra góc phòng!' },
        { id: 'p_bottle', name: 'Chiếc chai thủy tinh từ tàu đánh cá Emma Jane', clue: 'c_trawler_bottle', requires: ['i_chair_and_elastic_gun'],
          text: 'Bức tâm thư ký tên Lawrence Wargrave được vớt lên từ biển khơi, giải thích trọn vẹn tâm lý và kế hoạch của “U. N. Owen”!' }
      ] }
  ],
  suspects: [
    { id: 'wargrave_file', name: 'Hồ sơ Tử thi #6 / #10: Thẩm phán Lawrence Wargrave', age: 72, avatar: '裁', color: '#047857',
      role: 'Thẩm phán Tối cao nghỉ hưu · Biệt danh “Quan Tòa Treo Cổ”',
      bio: 'Nổi tiếng trên ghế quan tòa với những bản án tử hình nghiêm khắc và trí tuệ sắc bén lạnh lùng.',
      intro: 'Bạn và Sir Thomas Legge đứng trước hồ sơ pháp y của Thẩm phán Wargrave tại phòng điều tra.',
      topics: [
        { id: 't_sixth', label: 'Mâu thuẫn về thời điểm tử vong của Thẩm phán Wargrave', lines: [
          ['partner', 'Theo nhật ký của Vera và Blore, Wargrave bị bắn chết tối ngày thứ hai (nạn nhân thứ 6). Nhưng khi chúng ta lên đảo, chiếc ghế của Vera (nạn nhân thứ 10 chết chiều ngày thứ ba) lại được ai đó xếp gọn vào tường!'],
          ['me', 'Điều đó có nghĩa là người chết thứ 6 thực chất là người chết CUỐI CÙNG trên đảo!'] ] }
      ],
      presents: {
        i_red_herring_fake_death: { lines: [
          ['me', 'Thẩm phán Wargrave đã dụ Bác sĩ Armstrong hợp tác dựng màn kịch giả chết bằng bùn đỏ ở vị trí thứ 6 để “rình bắt hung thủ”. Khi cả đảo tin rằng Wargrave đã chết, đêm đó ông ta đẩy chính Armstrong xuống biển!'],
          ['partner', 'Thảo nào câu thơ thứ 7 lại là “Một con cá trích đỏ nuốt chửng một người” — Bác sĩ Armstrong đã nuốt trọn cú lừa của vị Thẩm phán!'] ] },
        i_chair_and_elastic_gun: { lines: [
          ['me', 'Sau khi Vera bắn Lombard rồi tự treo cổ, Wargrave xếp gọn chiếc ghế của cô ta, quay về giường nằm đúng tư thế cũ rồi dùng dây thun kính lão buộc khẩu súng vào tay nắm cửa và tự bắn xuyên qua đúng vết sơn đỏ trên trán mình!'],
          ['partner', 'Một cơ cấu tự sát xóa dấu vết hoàn hảo để khớp với cuốn nhật ký của những người đã chết!'] ] },
        i_wargrave_is_un_owen: { lines: [
          ['me', 'Và đây là bức tâm thư trong chai thủy tinh tàu Emma Jane vừa vớt được: Thẩm phán Lawrence Wargrave chính là U. N. Owen!'],
          ['partner', 'Một bộ óc vĩ đại nhưng bệnh hoạn… Ông ta muốn thực hiện một vụ án mà không một ai trên đời có thể phá giải, nhưng lại không kìm được khát khao được hậu thế biết đến kiệt tác của mình qua chiếc chai thủy tinh!'] ] }
      },
      defaultPresent: 'Sir Thomas Legge trầm ngâm đối chiếu các biên bản hiện trường.'
    },
    { id: 'vera_lombard_file', name: 'Hồ sơ Tử thi #8, #9, #10: Blore, Lombard & Vera', age: 25, avatar: '孤', color: '#0f766e',
      role: 'Ba người sống sót cuối cùng trong nhật ký trên Đảo Chiến Binh',
      bio: 'Trong cơn hoảng loạn tột độ khi tưởng chỉ còn 3 người trên đảo, họ đã tự tiêu diệt lẫn nhau dưới sự thao túng vô hình của U. N. Owen.',
      intro: 'Nhật ký và biên bản khám nghiệm của 3 nạn nhân cuối cùng trên đảo.',
      topics: [
        { id: 't_last_three', label: 'Diễn biến tâm lý của 3 người cuối cùng', lines: [
          ['partner', 'Blore bị chiếc đồng hồ đá cẩm thạch hình con gấu đẩy rơi từ cửa sổ phòng ngủ xuống vỡ sọ. Ngoài bãi biển chỉ còn Vera và Lombard — Vera tưởng Lombard là U. N. Owen nên đã rút súng bắn chết anh ta!'],
          ['me', 'Nhưng khi Vera bước về nhà trong tâm trạng chiến thắng, cô ta thấy thòng lọng đã treo sẵn trong phòng mình… và bị thôi thúc tự kết liễu dưới ánh mắt của kẻ thứ 10 vô hình!'] ] }
      ],
      presents: {
        c_vera_neat_chair: { lines: [
          ['me', 'Chỉ có một người có thói quen ngăn nắp cực đoan như Thẩm phán Wargrave mới nhấc chiếc ghế Vera vừa đá đổ để xếp gọn lại vào tường.'],
          ['partner', 'Đó chính là sơ hở vật lý duy nhất mà Wargrave để lại tại hiện trường!'] ] }
      },
      defaultPresent: 'Những trang nhật ký dừng lại ở giây phút tuyệt vọng cuối cùng.'
    }
  ],
  combos: [
    { a: 'c_un_owen_unknown', b: 'c_sixth_victim_diary', result: 'i_red_herring_fake_death' },
    { a: 'c_sixth_victim_diary', b: 'c_wargrave_real_wound', result: 'i_red_herring_fake_death' },
    { a: 'c_vera_neat_chair', b: 'c_elastic_eyeglasses', result: 'i_chair_and_elastic_gun' },
    { a: 'i_red_herring_fake_death', b: 'i_chair_and_elastic_gun', result: 'i_wargrave_is_un_owen' },
    { a: 'c_trawler_bottle', b: 'i_chair_and_elastic_gun', result: 'i_wargrave_is_un_owen' }
  ],
  hints: [
    { until: 'i_red_herring_fake_death', text: 'Làm sao hung thủ có thể chết ở vị trí thứ 6 rồi vẫn giết 4 người cuối? Hãy kết hợp Danh tính U. N. Owen (hoặc Vết đạn thật trên trán Wargrave) với Nhật ký về nạn nhân thứ 6 & 7!' },
    { until: 'c_elastic_eyeglasses', text: 'Sau khi phát hiện Chiếc ghế xếp gọn trong phòng Vera, hãy kiểm tra Phòng của Thẩm phán Wargrave để tìm cơ cấu khẩu súng lục!' },
    { until: 'i_chair_and_elastic_gun', text: 'Hãy ghép Chiếc ghế xếp gọn trong phòng Vera với Sợi dây thun kính lão ở tay nắm cửa để giải mã vụ tự sát cuối cùng.' },
    { until: 'i_wargrave_is_un_owen', text: 'Kết hợp Cú lừa giả chết ở vị trí thứ 6 (hoặc Chiếc chai thủy tinh từ tàu cá) với Cơ cấu tự sát bằng dây thun để vạch mặt U. N. Owen!' }
  ],
  finalHint: 'Bí ẩn vĩ đại nhất trên Đảo Chiến Binh đã được giải mã trọn vẹn. Hãy đến Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Ý nghĩa thật sự của cái tên chủ nhân bí ẩn “U. N. Owen” đã mời 10 người lên Đảo Chiến Binh là gì?',
      options: [
        'Đó là tên một tỷ phú người Mỹ đã trốn khỏi đảo trước cơn bão',
        '“Ulick Norman Owen” (U. N. Owen) là cách chơi chữ đồng âm của từ “UNKNOWN” (Kẻ vô danh) — khẳng định hung thủ chính là 1 trong 10 người có mặt trên đảo ngay từ đầu!',
        'Đó là mật danh của cơ quan tình báo Anh',
        'Đó là tên người chủ cũ của hòn đảo đã mất tích 10 năm trước'
      ],
      answer: 1, support: ['c_un_owen_unknown'] },
    { id: 'q2', q: 'Bằng cách nào hung thủ có thể thoát khỏi sự nghi ngờ và giết hại 4 người cuối cùng khi nhật ký ghi nhận hắn đã chết ở vị trí nạn nhân thứ 6?',
      options: [
        'Hung thủ dùng người anh em sinh đôi thế mạng ở vị trí thứ 6',
        'Hung thủ thuyết phục Bác sĩ Armstrong hợp tác dựng màn kịch giả chết ở vị trí thứ 6 (bằng bùn sơn đỏ trên trán), sau đó đẩy chính Armstrong xuống biển (“Con cá trích đỏ”) để tự do hành động như một bóng ma vô hình!',
        'Hung thủ trốn dưới hầm ngầm và đặt hình nộm sáp lên ghế',
        'Bác sĩ Armstrong mới là người giả chết'
      ],
      answer: 1, support: ['i_red_herring_fake_death', 'c_sixth_victim_diary', 'c_wargrave_real_wound'] },
    { id: 'q3', q: 'Chi tiết nào tại hiện trường tố cáo vẫn còn người sống sau khi Vera Claythorne (nạn nhân thứ 10) treo cổ, và hung thủ đã làm cách nào để biến vụ tự sát cuối cùng của mình khớp với cái chết giả ngày hôm trước?',
      options: [
        'Cửa sổ phòng Vera bị mở toang; hung thủ nhảy xuống biển tự tử',
        'Chiếc ghế Vera dùng để treo cổ đã được ai đó nhấc lên xếp gọn vào sát tường! Sau đó Thẩm phán Wargrave quay về giường nằm đúng tư thế nạn nhân thứ 6, buộc khẩu súng vào sợi dây thun kính lão nối với tay nắm cửa rồi tự bắn xuyên qua đúng vết sơn đỏ trên trán để dây thun kéo súng văng ra xa!',
        'Khẩu súng của Lombard biến mất khỏi bãi biển',
        'Tượng sứ thứ 10 vẫn còn nguyên vẹn trên bàn ăn'
      ],
      answer: 1, support: ['i_chair_and_elastic_gun', 'c_vera_neat_chair', 'c_elastic_eyeglasses'] },
    { id: 'q4', q: 'Ai là “U. N. Owen” — vị quan tòa kiêm đao phủ đứng sau toàn bộ 10 cái chết trên Đảo Chiến Binh?',
      options: [
        'Bác sĩ Edward Armstrong',
        'Đại úy Philip Lombard',
        'Thẩm phán Tối cao Lawrence Wargrave',
        'Cô giáo Vera Claythorne'
      ],
      answer: 2, support: ['i_wargrave_is_un_owen', 'c_trawler_bottle'] }
  ],
  truth: [
    'Suốt cuộc đời ngồi trên ghế thẩm phán, Lawrence Wargrave luôn mang trong mình hai bản năng đối lập: niềm khao khát giết chóc mãnh liệt và lòng tôn thờ công lý tuyệt đối. Khi biết mình mắc bệnh nan y giai đoạn cuối, ông ta quyết định thực hiện một kiệt tác phán xét cuối cùng trên Đảo Chiến Binh.',
    'Dưới cái tên “U. N. Owen” (UNKNOWN), Wargrave tập hợp 9 kẻ sát nhân mà pháp luật không thể chạm tới, rồi lần lượt thi hành án tử theo đúng bài đồng dao “Mười người lính nhỏ” và thứ tự mức độ tội lỗi tăng dần.',
    'Để thực hiện bước ngoặt quyết định ở vị trí nạn nhân thứ 6, Wargrave thuyết phục Bác sĩ Armstrong rằng ông cần giả chết để bẫy hung thủ. Sau khi Armstrong tuyên bố Wargrave đã chết dưới ánh nến mờ, đêm đó Wargrave dụ vị bác sĩ nhẹ dạ ra vách đá rồi đẩy xuống biển sâu (“Một con cá trích đỏ nuốt chửng một người”).',
    'Khi con mồi cuối cùng là Vera Claythorne bắn chết Lombard ngoài bãi biển rồi quay về phòng tự treo cổ lên chiếc thòng lọng đã chuẩn bị sẵn, Thẩm phán Wargrave điềm tĩnh nhấc chiếc ghế đặt gọn vào tường, trở về giường mình, buộc khẩu súng lục vào sợi dây thun kính lão nối với tay nắm cửa và bóp cò xuyên qua đúng vết sơn đỏ trên trán — khép lại kỳ án vĩ đại nhất mọi thời đại.'
  ],
  sourceNote: 'Phỏng theo kiệt tác bất hủ “Và Rồi Chẳng Còn Ai” (And Then There Were None, 1939) của Nữ hoàng Trinh thám Agatha Christie.'
});
