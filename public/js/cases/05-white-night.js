/* =========================================================================
 * VỤ ÁN 5 — BẠCH DẠ HÀNH (ĐI DƯỚI MẶT TRỜI ĐÊM)
 * Phỏng theo 白夜行 (Byakuyakō, 1999) — Tiểu thuyết độc lập
 * Lời thoại & cách dàn dựng manh mối được viết mới cho game; hồ sơ kéo dài
 * nhiều năm của thanh tra Sasagaki được cô đọng thành cuộc điều tra tổng kết.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'white-night',
  order: 5,
  title: 'Bạch Dạ Hành',
  original: '白夜行 · 1999 · Thanh tra Sasagaki Junzo',
  kanji: '白',
  theme: { a: '#14171f', b: '#2c3e50', accent: '#e5c07b' },
  difficulty: 5,
  par: 34,
  tagline: 'Mặt trời của tôi không còn nữa, nên đêm của tôi luôn có một mặt trời giả thay thế.',
  playerRole: 'Bạn là điều tra viên trẻ Koga, cùng thanh tra lão thành Sasagaki Junzo lật lại hồ sơ vụ án tòa nhà bỏ hoang ở Osaka.',
  partner: {
    name: 'Sasagaki Junzo',
    title: 'Thanh tra kỳ cựu — Sở Cảnh sát Osaka',
    avatar: '笹',
    color: '#2c3e50'
  },
  briefing: [
    'Tháng 10 năm 1973, tại một tòa nhà chung cư bỏ hoang ở Osaka, chủ tiệm cầm đồ Kirihara Yosuke được phát hiện tử vong với một vết đâm xuyên tim bằng hung khí có lưỡi hẹp và sắc.',
    'Nghi phạm số một là Nishimoto Fumiyo — một phụ nữ nghèo khó thường lui tới tiệm cầm đồ — cùng nhân tình của bà là Terasaki. Nhưng Terasaki tử nạn trong một vụ tai nạn xe tải, còn bà Fumiyo không lâu sau cũng chết vì ngạt khí gas tại căn hộ tồi tàn, để lại cô con gái mười một tuổi Nishimoto Yukiho.',
    'Nhiều năm trôi qua, Yukiho được nhận nuôi, trở thành tiểu thư Karasawa Yukiho thanh lịch và thành đạt, còn con trai của nạn nhân — Kirihara Ryoji — thì biến mất vào thế giới ngầm. Hai con người ấy trên giấy tờ chưa từng có bất kỳ mối liên hệ nào.',
    'Trước ngày nghỉ hưu, thanh tra Sasagaki đặt lên bàn bạn toàn bộ hồ sơ gốc: “Mười mấy năm qua, bất cứ ai ngáng đường Yukiho đều gặp bất hạnh. Hãy nhìn lại từ ngày đầu tiên ở tòa nhà bỏ hoang ấy — nơi hai đứa trẻ mười một tuổi đã bước vào đêm trắng.”'
  ],
  clues: {
    c_pawn_body: { title: 'Thi thể ở tòa nhà bỏ hoang', icon: '🏚️', type: 'evidence',
      desc: 'Kirihara Yosuke (45 tuổi) bị đâm xuyên ngực bằng một vật có lưỡi hẹp, dài và cứng. Nạn nhân nằm ngửa trong căn phòng khóa kín từ bên trong của tòa nhà chưa hoàn thiện; chìa khóa nằm trong túi áo nạn nhân.' },
    c_duct_vent: { title: 'Đường ống thông gió trên trần', icon: '🕳️', type: 'evidence',
      desc: 'Phía trên căn phòng khóa kín là đường ống thông gió chạy thông sang khu cầu thang. Ống chỉ rộng chưa đầy 35cm — người lớn không thể chui lọt, nhưng lớp bụi bên trong có vết đầu gối nhỏ và một sợi len xanh.' },
    c_paper_scissors: { title: 'Bộ tranh cắt giấy kirigami', icon: '✂️', type: 'evidence',
      desc: 'Cậu bé Kirihara Ryoji (11 tuổi) có năng khiếu cắt giấy kirigami cực kỳ tinh xảo. Tuy nhiên, chiếc kéo thủ công mũi nhọn bằng thép tốt nhất của cậu đã biến mất sau ngày cha chết.' },
    c_pouch_pair: { title: 'Hai chiếc túi vải hoa giống hệt', icon: '👛', type: 'evidence',
      desc: 'Trong cặp sách của Ryoji có một chiếc túi vải hoa nhỏ khâu tay. Cô bé Nishimoto Yukiho cũng có một chiếc túi đựng kim chỉ may từ cùng một mảnh vải thừa.' },
    c_library_card: { title: 'Thẻ mượn sách thư viện Osaka', icon: '📖', type: 'evidence',
      desc: 'Sổ mượn sách tại thư viện quận ghi nhận: suốt mùa hè 1973, Kirihara Ryoji và Nishimoto Yukiho luôn đến thư viện vào cùng một khung giờ và mượn chung bộ “Cuốn theo chiều gió”.' },
    c_fumiyo_gas: { title: 'Hiện trường ngạt gas của bà Fumiyo', icon: '🔥', type: 'evidence',
      desc: 'Mẹ của Yukiho tử vong do rò khí gas trong phòng kín sau khi uống rượu ngủ say. Yukiho khai lúc đó mình đi ra tiệm tạp hóa mua bột mì và phát hiện mẹ bất tỉnh khi về.' },
    c_two_flours: { title: 'Hai gói bột mì trong tủ bếp', icon: '🥡', type: 'evidence',
      desc: 'Ghi chép hiện trường của Sasagaki năm 1973: trên bàn có gói bột mì Yukiho vừa mua về, nhưng mở tủ bếp ra lại có sẵn một gói bột mì cùng nhãn hiệu mới nguyên vừa mở nắp.' },
    c_matsuura_witness: { title: 'Lời khai của nhân viên tiệm cầm đồ', icon: '🕶️', type: 'testimony',
      desc: 'Matsuura Yasuhiko — nhân viên tiệm cầm đồ Kirihara — thừa nhận ông chủ Yosuke có sở thích bệnh hoạn với các bé gái và thường đưa tiền cho bà Fumiyo để hẹn gặp riêng bé Yukiho.' },
    c_yaeko_statement: { title: 'Cơn suy sụp của bà Yaeko', icon: '🍸', type: 'testimony',
      desc: 'Vợ của nạn nhân — Kirihara Yaeko — thú nhận chiều hôm xảy ra án mạng bà đang ở khách sạn với chính nhân viên Matsuura, nên ban đầu không dám khai thật bằng chứng ngoại phạm.' },
    c_ryoji_cutting: { title: 'Bức cắt giấy hình đôi nam nữ', icon: '🖼️', type: 'evidence',
      desc: 'Tại căn phòng trọ cũ mà Ryoji bỏ lại khi trưởng thành, cảnh sát tìm thấy bức tranh cắt giấy hình một chàng trai và một cô gái nắm tay nhau đi dưới bầu trời đêm — nét cắt giống hệt tác phẩm năm 11 tuổi của Ryoji.' },
    c_fujimura_case: { title: 'Những kẻ ngáng đường Yukiho', icon: '⚠️', type: 'testimony',
      desc: 'Từ cô bạn học từng tung tin đồn về quá khứ của Yukiho cho đến thám tử tư điều tra cô, tất cả đều bị tấn công hoặc gài bẫy bởi một người đàn ông bí ẩn giỏi ngụy trang và công nghệ.' },
    c_yukiho_sun: { title: 'Tâm sự về “mặt trời ban đêm”', icon: '☀️', type: 'testimony',
      desc: 'Bạn thân thời trung học của Yukiho nhớ lại câu nói kỳ lạ của cô: “Bầu trời của mình không có mặt trời, nhưng mình không sợ tối, vì đã có một thứ ánh sáng khác chiếu thay mặt trời rồi.”' },
    c_shrimp_note: { title: 'Ghi chép của Sasagaki: Tôm pháo & cá bống', icon: '🦐', type: 'testimony',
      desc: 'Sasagaki ví von: “Con tôm pháo mù lòa suốt đời đào hang trong bùn tối, còn con cá bống đứng ở cửa hang canh gác. Nhìn bề ngoài chúng chẳng họ hàng gì, nhưng tách rời nhau là không sống nổi.”' },

    i_vent_child: { title: 'Hung thủ năm 1973 là một đứa trẻ', icon: '🧩', type: 'insight',
      desc: 'Căn phòng khóa trong chỉ có thể thoát ra qua ống thông gió rộng 35cm, còn vết đâm khớp với chiếc kéo cắt giấy mũi nhọn bị mất. Kẻ đâm Kirihara Yosuke năm đó là một đứa trẻ 11 tuổi.' },
    i_secret_bond: { title: 'Mối dây bí mật từ mùa hè 1973', icon: '🧩', type: 'insight',
      desc: 'Dù người lớn tưởng hai gia đình không quen biết, Ryoji và Yukiho đã thân thiết với nhau từ mùa hè ở thư viện và trao nhau chiếc túi vải tự may.' },
    i_building_truth: { title: 'Bi kịch trong tòa nhà bỏ hoang', icon: '🧩', type: 'insight',
      desc: 'Ryoji chui vào đường ống thông gió tòa nhà bỏ hoang và bắt gặp chính cha mình đang xâm hại Yukiho. Để cứu người bạn duy nhất của mình, cậu bé đã dùng kéo cắt giấy đâm chết cha.' },
    i_flour_alibi: { title: 'Gói bột mì tạo ngoại phạm', icon: '🧩', type: 'insight',
      desc: 'Nhà đã có sẵn bột mì, nhưng cô bé Yukiho 11 tuổi vẫn chạy đi mua thêm một gói nữa sau khi mở van gas trong lúc mẹ ngủ say — để tạo bằng chứng ngoại phạm hoàn hảo cho chính mình.' },
    i_symbiosis: { title: 'Hai linh hồn đi trong đêm trắng', icon: '🧩', type: 'insight',
      desc: 'Từ ngày hôm đó ở Osaka, Ryoji ẩn mình trong bóng tối làm mọi việc bẩn thỉu để bảo vệ và nâng bước cho Yukiho sống cuộc đời rực rỡ ngoài ánh sáng — một mối quan hệ cộng sinh kéo dài suốt đời.' }
  },
  locations: [
    { id: 'abandoned', name: 'Tòa nhà bỏ hoang ở Osaka (Hồ sơ 1973)', icon: '🏚️',
      desc: 'Bản vẽ hiện trường và ảnh chụp trắng đen từ tháng 10 năm 1973.',
      points: [
        { id: 'p_body_1973', name: 'Biên bản khám nghiệm tử thi', clue: 'c_pawn_body',
          text: 'Vết đâm xuyên xương ức bằng lưỡi thép hẹp và cứng. Cửa phòng khóa từ bên trong, chìa khóa vẫn nằm trong túi nạn nhân.' },
        { id: 'p_vent', name: 'Ảnh chụp trần phòng & ống thông gió', clue: 'c_duct_vent',
          text: 'Đường ống thông gió rộng chưa đầy 35cm. Sasagaki gõ ngón tay lên bức ảnh: “Hồi đó ai cũng tìm một gã đàn ông to khỏe, chẳng ai ngước nhìn cái ống chỉ vừa thân hình một đứa trẻ.”' }
      ] },
    { id: 'pawnshop', name: 'Tiệm cầm đồ Kirihara', icon: '💴',
      desc: 'Ngôi nhà kiêm cửa hiệu cầm đồ cũ kỹ của gia đình Kirihara.',
      points: [
        { id: 'p_ryoji_room', name: 'Phòng riêng của cậu bé Ryoji', clue: 'c_paper_scissors',
          text: 'Những bức tranh cắt giấy kirigami đẹp đến kinh ngạc. Hộp dụng cụ thiếu mất chiếc kéo mũi nhọn bằng thép Đức.' },
        { id: 'p_schoolbag', name: 'Ngăn cặp sách cũ', clue: 'c_pouch_pair',
          text: 'Một chiếc túi vải hoa khâu tay còn vụng về nhưng cẩn thận — món đồ không hề giống phong cách của bà Yaeko.' }
      ] },
    { id: 'nishimoto', name: 'Khu tập thể nhà Nishimoto & Thư viện', icon: '📖',
      desc: 'Nơi hai mẹ con Yukiho từng sống trong cảnh túng quẫn.',
      points: [
        { id: 'p_gas', name: 'Hồ sơ vụ ngạt gas của bà Fumiyo', clue: 'c_fumiyo_gas',
          text: 'Tháng 12/1973, bà Fumiyo tử vong vì ngạt khí gas. Cô bé Yukiho 11 tuổi đứng ngoài hành lang ôm gói bột mì vừa mua về.' },
        { id: 'p_kitchen_fl', name: 'Ghi chú tay của Sasagaki về căn bếp', clue: 'c_two_flours',
          text: '“Trong tủ bếp đã có sẵn một gói bột mì mới mở. Tại sao đứa trẻ 11 tuổi lại đội mưa chạy đi mua thêm một gói nữa vào đúng lúc ống dẫn gas tuột ra?”' },
        { id: 'p_lib', name: 'Sổ lưu trữ Thư viện Quận', clue: 'c_library_card',
          text: 'Chữ ký của Kirihara Ryoji và Nishimoto Yukiho nằm sát nhau trên thẻ mượn sách suốt mùa hè năm 1973.' }
      ] },
    { id: 'present_day', name: 'Hồ sơ theo dõi hiện tại (15 năm sau)', icon: '🌆', requires: ['i_secret_bond'],
      desc: 'Những vụ việc bí ẩn xoay quanh nữ doanh nhân trẻ Karasawa Yukiho.',
      points: [
        { id: 'p_hideout', name: 'Căn phòng trọ bỏ trống của Ryoji', clue: 'c_ryoji_cutting',
          text: 'Trên tường dán bức tranh cắt giấy mới: một đôi nam nữ nắm tay nhau. Không có một tấm ảnh chụp chung nào, chỉ có bóng cắt từ giấy trắng và giấy đen.' },
        { id: 'p_incidents', name: 'Chuỗi vụ án quanh Yukiho', clue: 'c_fujimura_case',
          text: 'Mỗi khi quá khứ hoặc cuộc hôn nhân của Yukiho gặp trở ngại, một kẻ giấu mặt lại xuất hiện xử lý gọn ghẽ rồi biến mất như bóng ma.' },
        { id: 'p_sasagaki_note', name: 'Sổ tay của thanh tra Sasagaki', clue: 'c_shrimp_note',
          text: 'Trang cuối cuốn sổ sờn gáy vẽ sơ đồ nối mọi biến cố suốt 15 năm về hai cái tên: Kirihara Ryoji và Karasawa Yukiho.' }
      ] }
  ],
  suspects: [
    { id: 'matsuura', name: 'Matsuura Yasuhiko', age: 52, avatar: '松', color: '#6c584c',
      role: 'Cựu nhân viên tiệm cầm đồ Kirihara',
      bio: 'Người nắm giữ nhiều bí mật đen tối của gia đình Kirihara từ năm 1973.',
      intro: 'Matsuura rít một hơi thuốc dài. “Ông Sasagaki vẫn chưa chịu buông vụ đó sao?”',
      topics: [
        { id: 't_alibi_73', label: 'Chiều hôm xảy ra án mạng năm 1973', clue: 'c_yaeko_statement', lines: [
          ['them', 'Tôi đã khai rồi, chiều hôm đó tôi ở khách sạn với bà chủ Yaeko. Xấu hổ thì có xấu hổ, nhưng nhờ thế mà tôi không phải kẻ giết ông chủ.'] ] },
        { id: 't_yosuke_dark', label: 'Ông chủ Yosuke đến tòa nhà bỏ hoang làm gì?', clue: 'c_matsuura_witness', lines: [
          ['me', 'Tại sao Kirihara Yosuke lại mang một triệu yên đến tòa nhà bỏ hoang chiều hôm đó?'],
          ['them', '…Ông ta có một tật xấu bệnh hoạn. Bà Fumiyo nhà Nishimoto túng tiền quá nên đã nhắm mắt nhận tiền của ông ta, để ông ta dẫn con bé Yukiho đến tòa nhà vắng đó.'] ] }
      ],
      presents: {
        c_paper_scissors: { lines: [
          ['them', 'Chiếc kéo đó… phải rồi, thằng bé Ryoji quý nó lắm. Sau ngày ông chủ chết, tôi từng thấy thằng bé ngồi nhìn chằm chằm vào đôi bàn tay trống không của mình.'] ] }
      },
      defaultPresent: 'Matsuura nhún vai. “Chuyện xưa như trái đất rồi.”'
    },
    { id: 'yukiho', name: 'Karasawa Yukiho', age: 26, avatar: '雪', color: '#8e9aaf',
      role: 'Nữ doanh nhân · tên thời nhỏ là Nishimoto Yukiho',
      bio: 'Xinh đẹp, tao nhã và hoàn hảo trong mắt mọi người. Nhưng đôi mắt cô chưa bao giờ dao động trước bất kỳ biến cố nào.',
      intro: 'Yukiho mỉm cười dịu dàng, dáng ngồi thẳng tắp. “Chào ngài thanh tra Sasagaki. Đã lâu lắm rồi.”',
      topics: [
        { id: 't_mother', label: 'Về cái chết của mẹ năm 1973', lines: [
          ['them', 'Hôm đó cháu đi mua bột mì về nấu bữa tối thì ngửi thấy mùi gas. Cháu chỉ nhớ mình đã khóc rất nhiều.'] ] },
        { id: 't_ryoji_know', label: 'Cô có quen Kirihara Ryoji không?', lines: [
          ['me', 'Cô có nhớ cậu bé Kirihara Ryoji — con trai ông chủ tiệm cầm đồ năm xưa không?'],
          ['them', 'Kirihara… Ryoji? Cháu chỉ nghe tên trên báo hồi xảy ra vụ án thôi. Cháu và cậu ấy chưa từng nói chuyện với nhau.'],
          ['narr', 'Cô trả lời không một thoáng ngập ngừng.'] ] },
        { id: 't_classmate_quote', label: 'Về câu nói “mặt trời ban đêm”', clue: 'c_yukiho_sun', lines: [
          ['me', 'Một người bạn học cũ kể rằng cô từng nói mình sống dưới ánh sáng thay thế mặt trời.'],
          ['them', 'Lời nói mộng mơ thời con gái thôi mà, thưa thanh tra.'] ] }
      ],
      presents: {
        c_two_flours: { lines: [
          ['me', 'Năm 1973, trong tủ bếp nhà cô đã có sẵn bột mì. Sao cô lại đi mua thêm một gói nữa đúng lúc bình gas rò rỉ?'],
          ['them', 'Khi đó cháu mới mười một tuổi, chắc cháu quên kiểm tra tủ bếp thôi ạ.'] ] },
        c_pouch_pair: { lines: [
          ['me', 'Chiếc túi vải hoa này tìm thấy trong cặp của Ryoji năm 1973 — cùng một mảnh vải với chiếc túi của cô.'],
          ['narr', 'Hàng mi của Yukiho khẽ chớp một nhịp rất khẽ.'],
          ['them', 'Vải may sẵn ở chợ Osaka thời đó nhà nào cũng mua được mà, thưa ông.'] ] },
        c_ryoji_cutting: { lines: [
          ['me', 'Bức tranh cắt giấy này là tác phẩm của Ryoji. Người con gái trong tranh là cô.'],
          ['them', 'Một bức cắt giấy rất đẹp. Nhưng cháu không quen người làm ra nó.'] ] }
      },
      defaultPresent: 'Yukiho khẽ nghiêng đầu. “Tôi e là mình không biết gì về thứ này.”'
    }
  ],
  combos: [
    { a: 'c_duct_vent', b: 'c_paper_scissors', result: 'i_vent_child' },
    { a: 'c_pawn_body', b: 'c_paper_scissors', result: 'i_vent_child' },
    { a: 'c_pouch_pair', b: 'c_library_card', result: 'i_secret_bond' },
    { a: 'i_vent_child', b: 'c_matsuura_witness', result: 'i_building_truth' },
    { a: 'c_fumiyo_gas', b: 'c_two_flours', result: 'i_flour_alibi' },
    { a: 'i_building_truth', b: 'c_ryoji_cutting', result: 'i_symbiosis' },
    { a: 'c_yukiho_sun', b: 'c_shrimp_note', result: 'i_symbiosis' },
    { a: 'c_fujimura_case', b: 'c_shrimp_note', result: 'i_symbiosis' }
  ],
  hints: [
    { until: 'i_vent_child', text: 'Căn phòng năm 1973 khóa từ bên trong, chỉ có đường ống thông gió rộng 35cm. Hãy kết hợp chi tiết đó với món đồ bị mất trong phòng cậu bé Ryoji.' },
    { until: 'i_secret_bond', text: 'Yukiho khẳng định không quen Ryoji. Hãy kiểm tra thư viện quận và chiếc cặp sách cũ của Ryoji.' },
    { until: 'i_building_truth', text: 'Hỏi Matsuura xem ông chủ Yosuke đã làm gì ở tòa nhà bỏ hoang — và kết hợp với việc một đứa trẻ 11 tuổi đã ở trên ống thông gió.' },
    { until: 'i_flour_alibi', text: 'Xem kỹ hiện trường vụ ngạt gas của bà Fumiyo: tại sao lại có hai gói bột mì?' },
    { until: 'i_symbiosis', text: 'Mở hồ sơ theo dõi hiện tại và kết nối bức tranh cắt giấy của Ryoji với ghi chép về “tôm pháo và cá bống” của Sasagaki.' }
  ],
  finalHint: 'Mười lăm năm theo dấu hai chiếc bóng đã đi đến hồi kết. Hãy hoàn tất hồ sơ trên Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Ai là người đã đâm chết chủ tiệm cầm đồ Kirihara Yosuke năm 1973?',
      options: ['Nishimoto Fumiyo (mẹ Yukiho)', 'Matsuura Yasuhiko (nhân viên tiệm cầm đồ)', 'Chính con trai nạn nhân — cậu bé 11 tuổi Kirihara Ryoji', 'Kirihara Yaeko (vợ nạn nhân)'],
      answer: 2, support: ['i_vent_child', 'i_building_truth', 'c_paper_scissors'] },
    { id: 'q2', q: 'Hung khí và cách thoát khỏi căn phòng khóa kín năm 1973 là gì?',
      options: ['Dùng dao gọt hoa quả rồi nhảy qua cửa sổ', 'Dùng chiếc kéo cắt giấy kirigami mũi nhọn rồi chui qua đường ống thông gió rộng 35cm trên trần', 'Dùng chìa khóa giả rồi khóa lại từ bên ngoài', 'Nạn nhân tự sát'],
      answer: 1, support: ['i_vent_child', 'c_duct_vent', 'c_paper_scissors'] },
    { id: 'q3', q: 'Điều gì đã xảy ra trong tòa nhà bỏ hoang khiến án mạng bùng phát?',
      options: ['Tranh chấp khoản nợ một triệu yên', 'Kirihara Yosuke lợi dụng sự túng quẫn của bà Fumiyo để xâm hại bé Yukiho; Ryoji phát hiện từ ống thông gió và đâm chết cha để cứu bạn', 'Một vụ cướp có tổ chức', 'Mâu thuẫn làm ăn của tiệm cầm đồ'],
      answer: 1, support: ['i_building_truth', 'c_matsuura_witness'] },
    { id: 'q4', q: 'Sự thật đằng sau cái chết vì ngạt gas của bà Nishimoto Fumiyo là gì?',
      options: ['Tai nạn rò rỉ bình gas cũ', 'Bà Fumiyo tự sát vì hối hận', 'Cô bé Yukiho 11 tuổi đã tạo hiện trường rò gas khi mẹ say ngủ, rồi chạy đi mua gói bột mì thứ hai để tạo bằng chứng ngoại phạm', 'Matsuura ra tay bịt đầu mối'],
      answer: 2, support: ['i_flour_alibi', 'c_two_flours', 'c_fumiyo_gas'] },
    { id: 'q5', q: 'Hình ảnh “tôm pháo và cá bống” cũng như “Bạch dạ hành” nói lên bản chất gì giữa Ryoji và Yukiho?',
      options: ['Họ hoàn toàn không quen biết nhau', 'Mối quan hệ cộng sinh tuyệt đối: từ sau bi kịch năm 11 tuổi, Ryoji sống trong bóng tối làm mọi tội ác để bảo vệ “mặt trời giả” cho Yukiho bước đi ngoài ánh sáng', 'Họ là hai đối thủ cạnh tranh thương trường', 'Ryoji tống tiền Yukiho suốt 15 năm'],
      answer: 1, support: ['i_symbiosis', 'c_shrimp_note', 'c_yukiho_sun', 'i_secret_bond'] }
  ],
  truth: [
    'Mùa hè năm 1973, hai đứa trẻ cô độc mười một tuổi — Kirihara Ryoji và Nishimoto Yukiho — tình cờ gặp nhau ở thư viện Osaka và trở thành chỗ dựa duy nhất của nhau.',
    'Tháng 10 năm đó, Ryoji chui vào đường ống thông gió của tòa nhà bỏ hoang để chơi trốn tìm và chết lặng khi nhìn xuống căn phòng bên dưới: chính người cha ruột Kirihara Yosuke của cậu đang xâm hại Yukiho — sau khi trả tiền cho người mẹ túng quẫn của cô bé. Trong khoảnh khắc tuyệt vọng, Ryoji lao xuống và dùng chiếc kéo cắt giấy mũi nhọn đâm xuyên tim cha mình.',
    'Không lâu sau, khi cảnh sát siết chặt vòng vây quanh bà Fumiyo, cô bé Yukiho đã lặng lẽ mở van gas lúc mẹ say rượu ngủ, rồi đội mưa chạy đi mua thêm một gói bột mì để tạo bằng chứng ngoại phạm cho chính mình.',
    'Kể từ ngày hôm ấy, mặt trời thật sự của hai đứa trẻ đã tắt. Suốt mười mấy năm tiếp theo, họ sống như cá bống và tôm pháo: Yukiho bước đi kiêu hãnh dưới ánh đèn rực rỡ của giới thượng lưu, còn Ryoji chìm vào bóng tối, sẵn sàng xóa bỏ bất cứ ai đe dọa đến bí mật của cô.',
    'Khi thanh tra Sasagaki cuối cùng cũng lần ra dấu vết của Ryoji tại buổi khai trương cửa hiệu thời trang của Yukiho, Ryoji đã chọn lao mình từ tầng cao xuống — dùng chính mạng sống của mình để giữ trọn bí mật cho Yukiho. Đứng trước thi thể người đã đi cùng mình suốt đêm trắng, Yukiho không quay đầu lại và chỉ nói: “Tôi không biết người này là ai.”'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Bạch dạ hành” (白夜行, 1999) của Higashino Keigo — một trong những tiểu thuyết trinh thám xã hội Nhật Bản vĩ đại nhất thế kỷ 20, đã được chuyển thể thành phim truyền hình (2006) và phim điện ảnh tại Nhật Bản và Hàn Quốc.'
});
