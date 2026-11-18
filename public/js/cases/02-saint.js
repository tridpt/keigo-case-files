/* =========================================================================
 * VỤ ÁN 2 — SỰ CỨU RỖI CỦA THÁNH NỮ
 * Phỏng theo 聖女の救済 (Seijo no Kyūsai, 2008) — Series Galileo
 * Lời thoại & cách dàn dựng manh mối được viết mới cho game; một số tình tiết
 * đã được giản lược hoặc điều chỉnh để phù hợp lối chơi.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'saint',
  order: 2,
  title: 'Sự Cứu Rỗi Của Thánh Nữ',
  original: '聖女の救済 · 2008 · Series Galileo',
  kanji: '聖',
  theme: { a: '#2b2d42', b: '#8d6a9f', accent: '#f2cc8f' },
  difficulty: 5,
  par: 30,
  tagline: 'Người vợ ở cách xa cả ngàn cây số. Chất độc nằm trong cốc cà phê. Và một vụ án được chuẩn bị suốt một năm.',
  playerRole: 'Bạn là nữ thanh tra Utsumi Kaoru, cộng sự của Kusanagi — người đang có thiện cảm khó giấu với nghi phạm chính.',
  partner: {
    name: 'Yukawa Manabu',
    title: 'Phó giáo sư Vật lý — biệt danh “Galileo”',
    avatar: '湯',
    color: '#3d5a80'
  },
  briefing: [
    'Tối Chủ nhật, Mashiba Yoshitaka — giám đốc một công ty công nghệ — gục chết trong phòng khách sang trọng của mình, bên cạnh cốc cà phê đổ. Kết quả giám định: ngộ độc asen trioxit (thạch tín).',
    'Người phát hiện thi thể là Wakayama Hiromi, học trò của vợ ông và — như cảnh sát nhanh chóng phát hiện — cũng là nhân tình của ông.',
    'Vợ ông, Mashiba Ayane, là một nghệ nhân chăn ghép vải (patchwork) nổi tiếng. Cô đã bay về quê nhà Sapporo từ trưa thứ Bảy, có nhân chứng suốt cả cuối tuần. Một người phụ nữ dịu dàng, kín đáo — và hoàn toàn không thể có mặt khi chồng uống cốc cà phê định mệnh.',
    'Kusanagi tin Ayane vô tội. Bạn thì không chắc. Còn Yukawa gọi đây là một bài toán chỉ có “nghiệm ảo” — về lý thuyết thì có thể, nhưng trong thực tế gần như không ai làm nổi.'
  ],
  clues: {
    c_body_ms: { title: 'Cái chết của Yoshitaka', icon: '☕', type: 'evidence',
      desc: 'Mashiba Yoshitaka, 42 tuổi, chết khoảng 19–21 giờ tối Chủ nhật tại phòng khách, ở nhà một mình. Nguyên nhân: ngộ độc asen trioxit liều cao.' },
    c_cup: { title: 'Cốc cà phê', icon: '🫖', type: 'evidence',
      desc: 'Cà phê còn sót trong cốc chứa asen nồng độ cao. Trên cốc chỉ có vân tay của Yoshitaka.' },
    c_kettle: { title: 'Ấm đun nước', icon: '♨️', type: 'evidence',
      desc: 'Cặn nước còn lại trong ấm đun trên bếp cũng chứa asen.' },
    c_coffee_powder: { title: 'Bột cà phê & giấy lọc', icon: '🧂', type: 'evidence',
      desc: 'Hộp bột cà phê và xấp giấy lọc: hoàn toàn không có asen.' },
    c_bottles: { title: 'Vỏ chai nước khoáng', icon: '🧴', type: 'evidence',
      desc: 'Thùng rác có nhiều vỏ chai nước khoáng 2 lít. Tủ lạnh không còn chai nào.' },
    c_purifier: { title: 'Máy lọc nước dưới bồn', icon: '🚰', type: 'evidence',
      desc: 'Máy lọc nước lắp dưới bồn rửa. Giám định phát hiện asen bên trong lõi lọc — nước chảy từ vòi lọc mang độc.' },
    c_purifier_dust: { title: 'Lớp bụi trên vỏ máy lọc', icon: '🕸️', type: 'evidence',
      desc: 'Ốc vít vỏ máy lọc phủ bụi dày, không có dấu vết bị vặn. Phiếu bảo hành cho thấy máy được lắp khoảng một năm trước — ngay sau đám cưới — và chưa từng thay lõi.' },
    c_flowers: { title: 'Ban công đầy hoa', icon: '🌸', type: 'evidence',
      desc: 'Hàng chục chậu hoa Ayane tự tay chăm sóc mỗi ngày. Đất vẫn ẩm — có người đã tưới cuối tuần.' },
    c_sapporo: { title: 'Ngoại phạm ở Sapporo', icon: '✈️', type: 'evidence',
      desc: 'Ayane bay về Sapporo trưa thứ Bảy, ở nhà bố mẹ, có nhân chứng liên tục đến khi nhận tin dữ. Không thể chê vào đâu được.' },
    c_key: { title: 'Chiếc chìa khóa', icon: '🔑', type: 'testimony',
      desc: 'Trước khi đi, Ayane đưa chìa khóa nhà cho Hiromi “để trông nhà giúp chị” — dù Hiromi chính là nhân tình của chồng cô.' },
    c_ayane_home: { title: 'Một năm không rời nhà', icon: '🏡', type: 'testimony',
      desc: 'Các học viên kể: suốt một năm kể từ khi cưới, cô Ayane hầu như không rời nhà quá một ngày, từ chối cả triển lãm ở nước ngoài. “Tôi phải ở nhà lo cho anh ấy.”' },
    c_quilt: { title: 'Tấm chăn ghép một năm', icon: '🧵', type: 'evidence',
      desc: 'Tác phẩm lớn nhất của Ayane: một tấm chăn ghép mất tròn một năm, khâu từng mũi mỗi ngày. Cô gọi nó là “Sự kiên nhẫn”.' },
    c_condition: { title: 'Điều kiện của cuộc hôn nhân', icon: '📜', type: 'testimony',
      desc: 'Trước khi cưới, Yoshitaka đặt điều kiện: nếu sau một năm không có con, họ sẽ ly hôn. Ayane đã đồng ý.' },
    c_friday: { title: 'Bữa tối thứ Sáu', icon: '🍷', type: 'testimony',
      desc: 'Tối thứ Sáu, vợ chồng Ikai ăn tối tại nhà Mashiba. Lúc tiễn khách, Yoshitaka nói nhỏ với Ikai: “Tôi đã nói với cô ấy rồi. Cô ấy không phản đối.”' },
    c_yoshitaka_habit: { title: 'Thói quen thời độc thân', icon: '🧑‍💼', type: 'testimony',
      desc: 'Hồi độc thân, Yoshitaka luôn pha cà phê bằng nước từ vòi lọc vì “lười mua nước”. Từ khi cưới, anh ta chưa từng phải tự vào bếp.' },
    c_hiromi_pregnant: { title: 'Hồ sơ phòng khám', icon: '🏥', type: 'evidence',
      desc: 'Wakayama Hiromi đang mang thai hai tháng. Cha đứa bé: Mashiba Yoshitaka.' },
    c_hiromi_coffee: { title: 'Cốc cà phê sáng Chủ nhật', icon: '🌅', type: 'testimony',
      desc: 'Sáng Chủ nhật, Hiromi pha cà phê cho cả hai bằng chai nước khoáng cuối cùng trong tủ lạnh — “cô Ayane dạy em thế, cô bảo nước máy làm mất vị”. Cả hai đều không sao.' },
    c_watering: { title: 'Lời dặn tưới hoa', icon: '🪣', type: 'testimony',
      desc: 'Ayane dặn Hiromi tưới hoa bằng nước lấy từ vòi phòng tắm tầng hai, “đừng lấy ở bếp, vòi bếp yếu lắm”.' },
    c_ayane_bottled: { title: 'Ayane và vòi nước lọc', icon: '💧', type: 'testimony',
      desc: 'Ayane: “Tôi chưa bao giờ dùng vòi lọc. Tôi chỉ nấu nướng bằng nước đóng chai.” Cô không giải thích vì sao lại để một chiếc máy lọc mà mình không dùng suốt một năm.' },

    i_water: { title: 'Chất độc ở trong nước', icon: '🧩', type: 'insight',
      desc: 'Bột cà phê và giấy lọc sạch, nhưng ấm đun có asen. Chất độc không được bỏ vào cốc — nó đến từ chính nguồn nước.' },
    i_long_ago: { title: 'Bẫy được cài từ một năm trước', icon: '🧩', type: 'insight',
      desc: 'Asen nằm trong một chiếc máy lọc mà không ai chạm vào suốt một năm. Bằng chứng ngoại phạm cuối tuần trở nên vô nghĩa: chất độc đã nằm đó từ khi tờ đăng ký kết hôn còn chưa ráo mực.' },
    i_ran_out: { title: 'Chai nước cuối cùng', icon: '🧩', type: 'insight',
      desc: 'Sáng Chủ nhật, Hiromi dùng chai nước khoáng cuối cùng. Tối hôm đó, ở nhà một mình, Yoshitaka quay về thói quen cũ: pha cà phê bằng vòi lọc.' },
    i_guard: { title: 'Người gác cổng của cái bẫy', icon: '🧩', type: 'insight',
      desc: 'Suốt một năm, Ayane là người duy nhất làm bếp, không rời nhà, và không bao giờ chạm vào vòi lọc. Mỗi ngày, cô lặng lẽ giữ cho cái bẫy không bị kích hoạt.' },
    i_protect: { title: 'Cô ấy biết', icon: '🧩', type: 'insight',
      desc: 'Ayane cố ý để Hiromi tránh xa nước ở bếp — cả khi pha cà phê lẫn khi tưới hoa. Cô biết chất độc ở đâu, và cô không muốn Hiromi (cùng đứa bé) phải chết.' },
    i_motive: { title: 'Lời hứa một năm', icon: '🧩', type: 'insight',
      desc: 'Một năm trôi qua không có con; Hiromi lại đang mang thai. Tối thứ Sáu, Yoshitaka chính thức nói lời chia tay. Ngày hôm sau, Ayane rời nhà — lần đầu tiên sau một năm.' }
  },
  locations: [
    { id: 'house', name: 'Bếp & phòng khách nhà Mashiba', icon: '🏠',
      desc: 'Nội thất trắng tinh, sạch như tạp chí. Mùi cà phê vẫn còn vương lại.',
      points: [
        { id: 'p_body', name: 'Vị trí thi thể', clue: 'c_body_ms',
          text: 'Yoshitaka gục trên sàn cạnh sofa, cốc cà phê lăn dưới gầm bàn. Không có dấu hiệu đột nhập hay xô xát.' },
        { id: 'p_cup', name: 'Cốc cà phê', clue: 'c_cup',
          text: 'Kết quả sơ bộ: asen nồng độ rất cao. Đủ để giết vài người.' },
        { id: 'p_kettle', name: 'Ấm đun trên bếp', clue: 'c_kettle',
          text: 'Trong ấm còn một ít nước. Giám định viên nhíu mày: “Có asen ở đây nữa.”' },
        { id: 'p_powder', name: 'Hộp cà phê & giấy lọc', clue: 'c_coffee_powder',
          text: 'Mọi mẫu bột cà phê và giấy lọc đều âm tính.' },
        { id: 'p_trash', name: 'Thùng rác & tủ lạnh', clue: 'c_bottles',
          text: 'Bốn vỏ chai nước khoáng 2 lít. Ngăn tủ lạnh dành cho nước thì trống trơn.' },
        { id: 'p_sink', name: 'Gầm bồn rửa', clue: 'c_purifier', requires: ['i_water'],
          text: 'Bạn mở cánh tủ dưới bồn rửa. Một chiếc máy lọc nước gắn trực tiếp vào đường ống. Mẫu nước từ vòi lọc: dương tính với asen.' },
        { id: 'p_sink2', name: 'Soi kỹ vỏ máy lọc', clue: 'c_purifier_dust', requires: ['c_purifier'],
          text: 'Dưới ánh đèn pin, lớp bụi phủ đều trên các ốc vít. Không một dấu tay, không một vết tua vít. Chiếc máy này không bị ai mở ra trong rất, rất lâu.' }
      ] },
    { id: 'balcony', name: 'Ban công tầng hai', icon: '🌸',
      desc: 'Một khu vườn nhỏ trên cao, rực rỡ đến mức khó tin.',
      points: [
        { id: 'p_flowers', name: 'Những chậu hoa', clue: 'c_flowers',
          text: 'Hoa được chăm kỹ lưỡng. Đất trong chậu vẫn ẩm, có người tưới vào cuối tuần.' },
        { id: 'p_bathtap', name: 'Vòi nước phòng tắm tầng hai',
          text: 'Cạnh vòi nước phòng tắm là một chiếc bình tưới lớn. Từ đây ra ban công chỉ vài bước — nhưng xuống bếp cũng không xa hơn là mấy.' }
      ] },
    { id: 'studio', name: 'Xưởng patchwork “Anne’s House”', icon: '🧵',
      desc: 'Lớp học chăn ghép vải của Ayane. Hiromi là trợ giảng chính.',
      points: [
        { id: 'p_students', name: 'Trò chuyện với học viên', clue: 'c_ayane_home',
          text: '“Cô Ayane từ chối cả triển lãm ở London đấy. Cô bảo trong năm đầu hôn nhân, cô muốn ở nhà lo cho chồng.”' },
        { id: 'p_quilt', name: 'Tấm chăn ghép khổng lồ', clue: 'c_quilt',
          text: 'Hàng ngàn mảnh vải nhỏ, khâu tay từng mũi. Tấm thẻ bên dưới ghi: “Sự kiên nhẫn — 365 ngày”.' }
      ] },
    { id: 'sapporo', name: 'Sapporo — nhà bố mẹ Ayane', icon: '✈️',
      desc: 'Cảnh sát Hokkaido hỗ trợ xác minh.',
      points: [
        { id: 'p_parents', name: 'Xác minh ngoại phạm', clue: 'c_sapporo',
          text: 'Vé máy bay, camera sân bay, bố mẹ, hàng xóm, nhân viên suối nước nóng… Ayane ở Sapporo suốt từ trưa thứ Bảy. Không có kẽ hở.' }
      ] },
    { id: 'clinic', name: 'Phòng khám sản khoa', icon: '🏥',
      desc: 'Hiromi được ghi nhận đến khám ở đây hai lần trong tháng qua.',
      points: [
        { id: 'p_record', name: 'Hồ sơ khám bệnh', clue: 'c_hiromi_pregnant',
          text: 'Thai được 8 tuần. Người đi cùng trong lần khám đầu tiên: một người đàn ông khớp với mô tả về Yoshitaka.' }
      ] }
  ],
  suspects: [
    { id: 'ayane', name: 'Mashiba Ayane', age: 34, avatar: '綾', color: '#c9ada7',
      role: 'Vợ nạn nhân · nghệ nhân chăn ghép vải',
      bio: 'Nổi tiếng với những tấm chăn ghép tinh xảo. Dịu dàng, điềm tĩnh, lúc nào cũng mỉm cười. Kusanagi gọi cô là “người phụ nữ như một bức tranh”.',
      intro: 'Ayane rót trà cho bạn bằng đôi tay rất vững. “Tôi vẫn chưa tin được anh ấy đã ra đi.”',
      topics: [
        { id: 't_alibi', label: 'Cuối tuần chị ở đâu?', lines: [
          ['them', 'Tôi về Sapporo thăm bố mẹ. Đã lâu lắm rồi tôi mới về.'],
          ['me', 'Lâu là bao lâu?'],
          ['them', 'Một năm. Từ ngày cưới.'] ] },
        { id: 't_marriage', label: 'Về cuộc hôn nhân', lines: [
          ['them', 'Chúng tôi gặp nhau ở một bữa tiệc. Anh ấy rất muốn có con, một gia đình thật đông vui.'],
          ['narr', 'Nụ cười của cô không đổi, nhưng bàn tay khẽ siết lại.'] ] },
        { id: 't_hiromi', label: 'Về Hiromi', lines: [
          ['them', 'Hiromi là học trò giỏi nhất của tôi. Con bé có đôi tay khéo léo và một trái tim tốt.'] ] },
        { id: 't_coffee', label: 'Chị pha cà phê thế nào?', clue: 'c_ayane_bottled', lines: [
          ['me', 'Ở nhà, chị thường pha cà phê bằng nước gì?'],
          ['them', 'Nước đóng chai. Tôi chưa bao giờ dùng vòi lọc.'],
          ['me', 'Vậy sao lại lắp máy lọc?'],
          ['them', 'Chồng tôi muốn thế.'],
          ['narr', 'Cô nhấp một ngụm trà, rồi đổi chủ đề.'] ] }
      ],
      presents: {
        c_key: { lines: [
          ['me', 'Chị biết Hiromi và chồng chị… vậy mà vẫn đưa chìa khóa cho cô ấy?'],
          ['them', 'Tôi biết. Tôi chỉ không muốn ngôi nhà ấy trống rỗng.'] ] },
        c_condition: { lines: [
          ['me', 'Một năm không có con thì ly hôn — đó là điều kiện của anh ấy?'],
          ['them', 'Vâng. Đó là một lời hứa. Và tôi luôn giữ lời hứa của mình.'],
          ['narr', 'Câu nói nhẹ tênh, nhưng khiến bạn rùng mình.'] ] },
        c_purifier: { lines: [
          ['them', 'Máy lọc nước ư? Tôi chưa từng động vào nó. Không một lần nào.'] ] },
        c_hiromi_pregnant: { lines: [
          ['them', 'Tôi biết.'],
          ['narr', 'Ayane mỉm cười. Một nụ cười hiền hậu đến khó hiểu.'] ] },
        c_watering: { lines: [
          ['them', 'Vòi bếp yếu lắm. Lấy nước ở phòng tắm cho tiện.'] ] },
        c_quilt: { lines: [
          ['them', 'Một mũi khâu mỗi ngày. Người ta nghĩ kiên nhẫn là chờ đợi — thật ra kiên nhẫn là mỗi ngày đều chọn lại cùng một việc.'] ] }
      },
      defaultPresent: 'Ayane nhìn món đồ một lúc lâu. “Tôi e là không giúp được gì.”'
    },
    { id: 'hiromi', name: 'Wakayama Hiromi', age: 26, avatar: '宏', color: '#a3b18a',
      role: 'Học trò của Ayane · người phát hiện thi thể',
      bio: 'Trợ giảng ở xưởng patchwork. Hay lo âu, mắt lúc nào cũng đỏ hoe từ khi xảy ra vụ việc.',
      intro: 'Hiromi run rẩy, hai tay ôm chặt cốc nước. “Em… em không làm gì cả.”',
      topics: [
        { id: 't_weekend', label: 'Cuối tuần em đã làm gì?', clue: 'c_hiromi_coffee', lines: [
          ['them', 'Tối thứ Bảy em ở lại nhà anh Yoshitaka. Sáng Chủ nhật em pha cà phê cho hai người.'],
          ['me', 'Bằng nước gì?'],
          ['them', 'Chai nước khoáng trong tủ lạnh ạ — là chai cuối cùng. Cô Ayane dạy em pha thế, cô bảo nước máy làm mất vị.'],
          ['them', 'Uống xong cả hai đều không sao. Trưa em về. Sáng thứ Hai gọi mãi không ai nghe, em mới quay lại…'] ] },
        { id: 't_flowers', label: 'Ai tưới hoa?', clue: 'c_watering', lines: [
          ['them', 'Em ạ. Cô Ayane dặn em tưới mỗi ngày, lấy nước ở vòi phòng tắm tầng hai.'],
          ['them', 'Cô dặn kỹ lắm: “Đừng lấy ở bếp, vòi bếp yếu lắm.”'] ] },
        { id: 't_key', label: 'Sao em có chìa khóa?', clue: 'c_key', lines: [
          ['them', 'Cô Ayane đưa em trước khi ra sân bay. Cô bảo nhờ em trông nhà.'],
          ['them', 'Em… em không hiểu vì sao cô lại tin em đến thế.'] ] }
      ],
      presents: {
        c_hiromi_pregnant: { lines: [
          ['narr', 'Hiromi bật khóc.'],
          ['them', 'Vâng… là con của anh ấy. Anh ấy nói sẽ nói chuyện với cô Ayane. Anh ấy nói mọi chuyện sẽ ổn.'] ] },
        c_bottles: { lines: [
          ['them', 'Anh Yoshitaka chẳng bao giờ để ý chuyện mua nước. Toàn cô Ayane lo hết.'] ] },
        c_purifier: { lines: [
          ['them', 'Em chưa bao giờ dùng nó… Cô Ayane không cho ai đụng vào bếp của cô.'] ] }
      },
      defaultPresent: 'Hiromi lắc đầu, nước mắt lại trào ra. “Em không biết…”'
    },
    { id: 'ikai', name: 'Ikai Tatsuhiko', age: 43, avatar: '猪', color: '#588157',
      role: 'Luật sư cố vấn · bạn lâu năm của nạn nhân',
      bio: 'Bạn đại học và cố vấn pháp lý của Yoshitaka. Thực dụng, nói thẳng.',
      intro: 'Ikai liếc đồng hồ. “Tôi sẽ nói những gì tôi biết. Yoshitaka không phải người dễ thương, nhưng hắn không đáng chết như vậy.”',
      topics: [
        { id: 't_friday', label: 'Bữa tối thứ Sáu', clue: 'c_friday', lines: [
          ['them', 'Vợ chồng tôi đến ăn tối. Ayane nấu ăn, pha cà phê, vui vẻ như mọi khi.'],
          ['them', 'Lúc tiễn tôi ra cửa, Yoshitaka nói nhỏ: “Tôi đã nói với cô ấy rồi. Cô ấy không phản đối.”'] ] },
        { id: 't_condition', label: 'Cuộc hôn nhân của họ', clue: 'c_condition', lines: [
          ['them', 'Yoshitaka cưới vợ để có con, đơn giản vậy thôi. Hắn đặt điều kiện từ trước: một năm không có con thì chia tay.'],
          ['them', 'Ayane đồng ý. Tôi là người soạn bản thỏa thuận tài sản.'] ] },
        { id: 't_habit', label: 'Thói quen của Yoshitaka', clue: 'c_yoshitaka_habit', lines: [
          ['them', 'Hồi độc thân, hắn lười đến mức pha cà phê bằng nước từ vòi lọc, chẳng bao giờ mua nước.'],
          ['them', 'Cưới Ayane xong thì khác. Hắn chưa từng phải bước vào bếp.'] ] },
        { id: 't_business', label: 'Tranh chấp công việc?', lines: [
          ['them', 'Có tranh chấp nhỏ về cổ phần với một đối tác, nhưng đã giải quyết êm. Không ai giết người vì chuyện đó cả.'] ] }
      ],
      presents: {
        c_hiromi_pregnant: { lines: [
          ['them', 'Tôi biết hắn có người khác. Không ngờ đã đến mức đó.'] ] },
        c_purifier: { lines: [
          ['them', 'Hắn lắp máy đó ngay khi cưới, bảo là “cho vợ dùng”. Buồn cười thật.'] ] }
      },
      defaultPresent: 'Ikai nhún vai. “Tôi là luật sư, không phải thám tử.”'
    }
  ],
  combos: [
    { a: 'c_kettle', b: 'c_coffee_powder', result: 'i_water' },
    { a: 'c_cup', b: 'c_coffee_powder', result: 'i_water' },
    { a: 'c_purifier', b: 'c_purifier_dust', result: 'i_long_ago' },
    { a: 'c_hiromi_coffee', b: 'c_bottles', result: 'i_ran_out' },
    { a: 'c_yoshitaka_habit', b: 'c_bottles', result: 'i_ran_out' },
    { a: 'c_ayane_home', b: 'c_ayane_bottled', result: 'i_guard' },
    { a: 'c_quilt', b: 'c_ayane_bottled', result: 'i_guard' },
    { a: 'c_watering', b: 'i_long_ago', result: 'i_protect' },
    { a: 'c_watering', b: 'c_purifier', result: 'i_protect' },
    { a: 'c_condition', b: 'c_hiromi_pregnant', result: 'i_motive' },
    { a: 'c_condition', b: 'c_friday', result: 'i_motive' }
  ],
  hints: [
    { until: 'i_water', text: 'Asen có trong cốc và trong ấm, nhưng không có trong bột cà phê. Thứ gì đi qua cả cốc lẫn ấm?' },
    { until: 'c_purifier', text: 'Nếu chất độc ở trong nước, hãy tìm nơi nước được “xử lý” trước khi vào ấm.' },
    { until: 'c_purifier_dust', text: 'Đừng chỉ hỏi chất độc ở đâu. Hãy hỏi nó đã ở đó BAO LÂU. Một lớp bụi cũng là một chiếc đồng hồ.' },
    { until: 'i_long_ago', text: 'Bằng chứng ngoại phạm chỉ có ý nghĩa nếu tội ác được thực hiện vào cuối tuần. Nếu không thì sao?' },
    { until: 'c_hiromi_coffee', text: 'Có người đã pha cà phê trong cùng căn bếp vào sáng Chủ nhật mà không chết. Hãy hỏi cô ấy.' },
    { until: 'i_ran_out', text: 'Hiromi dùng thứ nước nào? Và tối Chủ nhật, thứ nước đó còn không?' },
    { until: 'i_guard', text: 'Một cái bẫy tồn tại suốt một năm mà không giết ai. Phải có người canh giữ nó mỗi ngày.' },
    { until: 'i_protect', text: 'Ayane dặn Hiromi rất kỹ về nguồn nước để tưới hoa. Một lời dặn vụn vặt — hay một sự che chở?' },
    { until: 'i_motive', text: 'Một năm. Lời hứa nào có thời hạn đúng một năm?' }
  ],
  finalHint: 'Một nghiệm ảo vẫn là một nghiệm. Hãy đến Bảng suy luận, Utsumi.',
  questions: [
    { id: 'q1', q: 'Chất độc đã đi vào cốc cà phê bằng con đường nào?',
      options: ['Trộn sẵn trong hộp bột cà phê', 'Bôi lên thành cốc', 'Qua máy lọc nước dưới bồn rửa', 'Trong chai nước khoáng'],
      answer: 2, support: ['c_purifier', 'i_water', 'c_kettle'] },
    { id: 'q2', q: 'Asen được cài vào khi nào?',
      options: ['Tối Chủ nhật, trước khi Yoshitaka chết', 'Sáng thứ Bảy, trước khi Ayane ra sân bay', 'Khoảng một năm trước, ngay sau đám cưới', 'Tối thứ Sáu, trong bữa tiệc với vợ chồng Ikai'],
      answer: 2, support: ['i_long_ago', 'c_purifier_dust'] },
    { id: 'q3', q: 'Ai là người cài chất độc?',
      options: ['Mashiba Ayane', 'Wakayama Hiromi', 'Ikai Tatsuhiko', 'Yoshitaka tự sát'],
      answer: 0, support: ['i_guard', 'i_protect', 'c_ayane_bottled'] },
    { id: 'q4', q: 'Vì sao Hiromi và Yoshitaka không bị trúng độc sáng Chủ nhật?',
      options: ['Chất độc khi đó chưa được cài', 'Hiromi pha bằng chai nước khoáng cuối cùng, không dùng vòi lọc', 'Họ không uống cà phê', 'Asen cần thời gian mới hòa tan'],
      answer: 1, support: ['c_hiromi_coffee', 'i_ran_out'] },
    { id: 'q5', q: '“Sự cứu rỗi của thánh nữ” thực chất là gì?',
      options: ['Ayane cứu Hiromi khỏi một người đàn ông tệ bạc', 'Suốt một năm, mỗi ngày Ayane đều canh giữ không để ai dùng vòi lọc — mỗi ngày cô “cứu” chồng một lần; rời nhà nghĩa là thôi không cứu nữa', 'Ayane cầu nguyện cho chồng hằng đêm', 'Yoshitaka định cứu công ty bằng tiền của vợ'],
      answer: 1, support: ['i_guard', 'c_ayane_home', 'c_quilt'] },
    { id: 'q6', q: 'Điều gì khiến Ayane quyết định “buông tay”?',
      options: ['Tiền bảo hiểm nhân thọ', 'Tranh chấp cổ phần', 'Một năm không con, Hiromi mang thai và Yoshitaka chính thức đòi ly hôn tối thứ Sáu', 'Ghen tuông với Ikai'],
      answer: 2, support: ['i_motive', 'c_condition', 'c_friday', 'c_hiromi_pregnant'] }
  ],
  truth: [
    'Ngay sau đám cưới, Ayane biết rõ điều kiện của chồng: một năm không con thì ly hôn. Và cô biết mình không thể có con.',
    'Khi chiếc máy lọc nước được lắp dưới bồn rửa, cô lặng lẽ cho asen vào bên trong — rồi không bao giờ chạm vào nó nữa. Từ ngày đó, cô là người duy nhất vào bếp; cô nấu nướng, pha cà phê bằng nước đóng chai, từ chối mọi chuyến đi xa, từ chối cả triển lãm ở nước ngoài. Yoshitaka chưa từng phải tự pha một cốc cà phê.',
    'Mỗi ngày trôi qua, cô có thể để cái bẫy hoạt động — và mỗi ngày, cô chọn không làm thế. Đó là “sự cứu rỗi”: một năm trời, ngày nào cô cũng cứu chồng mình một lần.',
    'Tối thứ Sáu, Yoshitaka nói lời chia tay; Hiromi đã mang thai con anh ta. Sáng thứ Bảy, lần đầu tiên sau một năm, Ayane rời nhà. Cô đưa chìa khóa cho Hiromi, dặn cô pha cà phê bằng nước đóng chai và tưới hoa bằng nước phòng tắm — để Hiromi và đứa bé không phải chết thay.',
    'Sáng Chủ nhật, chai nước khoáng cuối cùng được dùng hết. Tối hôm đó, ở nhà một mình, Yoshitaka quay lại thói quen thời độc thân: mở vòi lọc, đun nước, pha cà phê.',
    'Ayane có bằng chứng ngoại phạm hoàn hảo, vì cô chẳng cần làm gì vào cuối tuần cả. Tội ác duy nhất của cô là một ngày — một năm trước — và việc thôi cứu rỗi.'
  ],
  sourceNote: 'Tiểu thuyết dài thứ năm của series Galileo, nổi tiếng với khái niệm “nghiệm ảo” của Yukawa. Từng được chuyển thể trong loạt phim truyền hình Galileo. Bản tiếng Việt: “Sự cứu rỗi của thánh nữ”.'
});
