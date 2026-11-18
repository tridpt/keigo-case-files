/* =========================================================================
 * VỤ ÁN 11 — BA QUAN TÀI & HAI MẬT THẤT TUYẾT TRẮNG
 * Phỏng theo The Hollow Man / The Three Coffins (1935) — John Dickson Carr
 * Đỉnh cao số 1 mọi thời đại của thể loại Án mạng Phòng kín (Locked-Room Mystery).
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'hollow-man',
  order: 11,
  collection: 'world-classics',
  author: 'John Dickson Carr',
  title: 'Ba Quan Tài & Hai Mật Thất',
  original: 'The Hollow Man (The Three Coffins) · 1935 · John Dickson Carr',
  kanji: '密',
  theme: { a: '#151922', b: '#3b4252', accent: '#88c0d0' },
  difficulty: 5,
  par: 38,
  tagline: 'Một kẻ sát nhân bốc hơi khỏi căn phòng khóa kín, và một thi thể bị bắn tầm gần giữa bãi tuyết không một dấu chân.',
  playerRole: 'Bạn là Chánh thanh tra Hadley thuộc Scotland Yard, cùng nhà từ điển học kiêm thám tử Tiến sĩ Gideon Fell giải mã hai vụ án bất khả thi xảy ra trong cùng một đêm tuyết tại London.',
  partner: {
    name: 'Tiến sĩ Gideon Fell',
    title: 'Học giả & Chuyên gia giải mã Án mạng Phòng kín',
    avatar: 'F',
    color: '#3b4252'
  },
  briefing: [
    'Đêm mùa đông tuyết rơi dày đặc tại quảng trường Cagliostro (London), Giáo sư Grimaud bất ngờ triệu tập thư ký và quản gia, cảnh báo rằng người anh em từng bị ông bỏ rơi ở nhà tù Đông Âu — ảo thuật gia đường phố Pierre Fley — đã quay về để lấy mạng ông.',
    'Lúc 22:10, trước mắt ba nhân chứng đứng canh ở cầu thang, một bóng người mặc áo khoác dài, đội mũ phớt và đeo khăn che mặt bước vào thư phòng tầng ba của Giáo sư Grimaud. Cửa đóng sập lại. Vài phút sau, một tiếng súng vang lên! Khi mọi người phá cửa xông vào: Grimaud nằm hấp hối trên sàn với viên đạn găm vào ngực rồi tử vong ở bệnh viện, cửa sổ khóa chặt nhìn ra mái nhà phủ tuyết trắng nguyên vẹn — và kẻ đột nhập đã bốc hơi như một bóng ma!',
    'Chưa đầy mười lăm phút sau, cách đó ba con phố tại con hẻm Cagliostro, chính Pierre Fley lại được phát hiện nằm chết giữa lớp tuyết mới rơi vì một phát súng bắn dí sát ngực. Quanh thi thể Fley hàng chục mét chỉ có duy nhất một hàng dấu chân của chính ông ta — không có dấu chân của bất kỳ kẻ bắn súng nào!',
    'Tiến sĩ Gideon Fell chống cây gậy ba-toong, cười vang: “Hadley này, khi hai phép màu không tưởng xảy ra cùng một lúc, nghĩa là cả hai đều là một trò ảo thuật quang học và thời gian!”'
  ],
  clues: {
    c_grimaud_room: { title: 'Phòng kín tầng 3 của Giáo sư Grimaud', icon: '🚪', type: 'evidence',
      desc: 'Thư phòng tầng 3 chỉ có một cửa ra vào (được 3 nhân chứng nhìn chằm chằm suốt từ lúc kẻ lạ mặt bước vào cho đến khi phá cửa) và một cửa sổ khóa bên trong nhìn ra mái hiên tuyết không một vết chân. Trong phòng hoàn toàn không có hầm bí mật.' },
    c_hall_witness: { title: 'Lời khai của 3 nhân chứng ở cầu thang', icon: '👁️', type: 'testimony',
      desc: 'Quản gia Dumont và thư ký đứng ở đầu cầu thang cách cửa thư phòng 10 mét khai: “Chúng tôi thấy kẻ mặc áo khoác dài, đội mũ phớt bước tới cửa thư phòng, đồng thời thấy bóng Giáo sư Grimaud mở cửa đón hắn vào rồi đóng cửa lại!”' },
    c_broken_mirror: { title: 'Đống mảnh kính gương vỡ cạnh lò sưởi', icon: '🪞', type: 'evidence',
      desc: 'Trong thư phòng của Grimaud có một tấm gương lớn cao bằng người thật bị vỡ vụn trên sàn gần lò sưởi. Mảnh kính có dính một chút sáp đen ở viền.' },
    c_fireplace_ash: { title: 'Tro giấy bìa cứng và sơn trong lò sưởi', icon: '🔥', type: 'evidence',
      desc: 'Trong lò sưởi đang cháy của Grimaud có tàn tro của một chiếc áo khoác bằng giấy bồi sơn đen và một chiếc mặt nạ phẳng — thứ có thể đốt cháy sạch chỉ trong 30 giây!' },
    c_fley_alley: { title: 'Thi thể Pierre Fley giữa bãi tuyết không dấu chân', icon: '❄️', type: 'evidence',
      desc: 'Pierre Fley nằm chết giữa con hẻm phủ tuyết trắng xóa. Vết đạn trên ngực áo cháy sém thuốc súng (chứng tỏ bị bắn ở cự ly dưới 20cm), khẩu súng lục rơi cách đó 3 mét không có vân tay, và trên tuyết chỉ có độc nhất hàng dấu chân của Fley bước vào hẻm!' },
    c_fley_wound: { title: 'Biên bản khám nghiệm đường đạn của Fley', icon: '🩺', type: 'evidence',
      desc: 'Bác sĩ pháp y phát hiện: viên đạn bắn vào ngực Fley đã xuyên qua chiếc hộp đồng đựng thuốc lá trong túi áo nên đi lệch, chỉ làm rách động mạch phụ. Với vết thương này, nạn nhân hoàn toàn có thể tự đi bộ thêm 10 đến 15 phút trước khi ngất đi và tử vong!' },
    c_fley_boarding: { title: 'Vết máu nhỏ ở phòng trọ của Pierre Fley', icon: '🩸', type: 'evidence',
      desc: 'Khám xét căn phòng trọ của Fley ở ngay đầu hẻm: trên tấm thảm cạnh bàn có vài giọt máu của Fley và vỏ kẹo bạc hà mà Giáo sư Grimaud thường ngậm!' },
    c_street_clock: { title: 'Chiếc đồng hồ quảng cáo khổng lồ đầu hẻm', icon: '🕰️', type: 'evidence',
      desc: 'Hai người đi đường khai họ nghe tiếng súng nổ và nhìn lên chiếc đồng hồ quảng cáo treo trước tiệm đồng hồ đầu hẻm thấy chỉ đúng 22:25 (lúc Grimaud đã bị bắn ở nhà). Tuy nhiên, dây kéo chỉnh kim của chiếc đồng hồ treo ngoài trời này nằm ngay tầm tay với từ ban công phòng trọ của Fley!' },
    c_clock_reset: { title: 'Dấu tay trên cần chỉnh đồng hồ quảng cáo', icon: '🔧', type: 'evidence',
      desc: 'Chủ tiệm đồng hồ xác nhận: sáng hôm sau ông phát hiện chiếc đồng hồ quảng cáo ngoài cửa chạy nhanh hơn giờ chuẩn đúng 25 phút — ai đó đã vặn kim đồng hồ chạy sớm lên để đánh lừa các nhân chứng đi ngang qua!' },
    c_three_brothers: { title: 'Bí mật “Ba Quan Tài” ở Đông Âu', icon: '⚰️', type: 'evidence',
      desc: 'Hồ sơ mật từ Romania: Giáo sư Grimaud (tên thật là Charles Horvath) và Pierre Fley từng cùng người anh thứ ba đánh cắp kho báu rồi vượt ngục bằng cách nằm trong ba chiếc quan tài. Grimaud đã bỏ mặc hai người kia chết ngạt để độc chiếm vàng; Fley sống sót sang London tống tiền Grimaud!' },
    c_mirror_illusion: { title: 'Thực nghiệm ảo ảnh tấm gương của Tiến sĩ Fell', icon: '🎩', type: 'testimony',
      desc: 'Tiến sĩ Fell dựng lại hiện trường: nếu đặt tấm gương lớn nghiêng ngay trước ngưỡng cửa thư phòng mở hé, khi một người mặc áo khoác giấy từ góc khuất bước tới trước gương, người đứng ở cầu thang sẽ nhìn thấy CẢ người đó LẪN ảnh phản chiếu trong gương và tưởng là “Grimaud đang mở cửa đón kẻ lạ mặt bước vào phòng”!' },

    i_walking_corpse: { title: 'Fley bị bắn ở phòng trọ rồi mới tự bước ra tuyết', icon: '🧩', type: 'insight',
      desc: 'Không hề có kẻ sát nhân vô hình nào trên bãi tuyết! Fley đã bị bắn tầm gần ngay trong phòng trọ của mình lúc 21:55, kẻ bắn ném súng qua cửa sổ rồi bỏ đi; còn Fley bị thương cố lê bước ra hẻm tuyết tìm người cứu rồi mới gục chết một mình!' },
    i_clock_alibi_trick: { title: 'Màn đánh tráo thời gian bằng đồng hồ đường phố', icon: '🧩', type: 'insight',
      desc: 'Trước khi bắn Fley lúc 21:55, hung thủ đã vặn chiếc đồng hồ quảng cáo ngoài phố chạy nhanh thêm 25 phút (thành 22:20) — khiến mọi nhân chứng nghe tiếng súng đều khai rằng vụ bắn Fley xảy ra lúc 22:20, khi Grimaud đã ở nhà!' },
    i_mirror_hollow_man: { title: 'Kẻ đột nhập trong phòng kín chỉ là ảnh trong gương', icon: '🧩', type: 'insight',
      desc: 'Chính Giáo sư Grimaud là người duy nhất ở hành lang tầng 3! Ông ta khoác áo giấy bồi, bước tới trước tấm gương lớn đặt ở cửa để 3 nhân chứng tưởng có hai người (Grimaud và Fley), rồi bước vào phòng đốt lớp áo giấy, đập vỡ gương và tự bắn bị thương mình để đổ tội cho Fley — nhưng phát súng tự bắn lại lệch tay gây tử vong thật!' }
  },
  locations: [
    { id: 'grimaud_house', name: 'Thư phòng tầng 3 — Nhà Giáo sư Grimaud', icon: '🏛️',
      desc: 'Hiện trường vụ án phòng kín thứ nhất tại quảng trường Cagliostro.',
      points: [
        { id: 'p_room', name: 'Kiểm tra cửa sổ & tường thư phòng', clue: 'c_grimaud_room',
          text: 'Cửa sổ khóa chặt từ bên trong, tuyết trên mái hiên phẳng lì. Không có bất kỳ lối thoát bí mật nào.' },
        { id: 'p_witness', name: 'Lấy lời khai 3 nhân chứng ở cầu thang', clue: 'c_hall_witness',
          text: 'Quản gia Dumont khẳng định: “Tôi thấy kẻ mặc áo khoác dài bước tới cửa, và thấy một người ở ngay ngưỡng cửa mở ra đón hắn!”' },
        { id: 'p_mirror', name: 'Đống mảnh gương vỡ dưới sàn', clue: 'c_broken_mirror',
          text: 'Một tấm gương soi toàn thân bị đập vỡ vụn. Viền gương có vết sáp đen dùng để che khung gỗ.' },
        { id: 'p_hearth', name: 'Bới tro trong lò sưởi đang cháy', clue: 'c_fireplace_ash',
          text: 'Tro của giấy bìa cứng sơn đen và dây kẽm nhỏ — nguyên liệu làm đạo cụ hóa trang sân khấu!' },
        { id: 'p_fell_demo', name: 'Thực nghiệm quang học của Tiến sĩ Fell', clue: 'c_mirror_illusion', requires: ['c_broken_mirror', 'c_fireplace_ash'],
          text: 'Tiến sĩ Fell đặt một tấm gương ở cửa: “Một người bước tới trước gương sẽ tạo ra ảo giác hai người — kẻ đi vào và chủ nhà ra mở cửa!”' }
      ] },
    { id: 'snow_alley', name: 'Con hẻm tuyết Cagliostro & Tiệm đồng hồ', icon: '❄️',
      desc: 'Hiện trường vụ án bất khả thi thứ hai cách nhà Grimaud 3 dãy phố.',
      points: [
        { id: 'p_alley', name: 'Vị trí thi thể Pierre Fley trên tuyết', clue: 'c_fley_alley',
          text: 'Tuyết trắng nguyên vẹn quanh xác Fley, chỉ có một hàng dấu chân duy nhất của chính nạn nhân bước từ đầu hẻm vào.' },
        { id: 'p_autopsy', name: 'Báo cáo pháp y về vết đạn của Fley', clue: 'c_fley_wound',
          text: 'Viên đạn xuyên qua hộp thuốc lá bằng đồng nên không làm Fley chết ngay lập tức — ông ta có thể đi bộ thêm hơn 10 phút sau khi trúng đạn!' },
        { id: 'p_clock', name: 'Chiếc đồng hồ quảng cáo treo đầu hẻm', clue: 'c_street_clock',
          text: 'Nhân chứng nghe tiếng súng rồi ngước nhìn chiếc đồng hồ khổng lồ này và thấy kim chỉ 22:25.' },
        { id: 'p_clock_check', name: 'Kiểm tra bộ máy đồng hồ quảng cáo', clue: 'c_clock_reset', requires: ['c_street_clock'],
          text: 'Chiếc đồng hồ đã bị ai đó vặn nhanh hơn giờ chuẩn 25 phút từ ban công tầng hai kế bên!' }
      ] },
    { id: 'fley_room', name: 'Phòng trọ của ảo thuật gia Pierre Fley', icon: '🎩',
      desc: 'Căn phòng nhỏ nằm ngay sát ban công phía trên chiếc đồng hồ quảng cáo.',
      points: [
        { id: 'p_carpet', name: 'Vết máu trên thảm & Vỏ kẹo bạc hà', clue: 'c_fley_boarding',
          text: 'Máu của Fley nhỏ trên thảm trong phòng trọ! Vậy là Fley đã bị bắn ở ngay trong phòng này trước khi bước ra con hẻm tuyết!' },
        { id: 'p_trunk', name: 'Rương tài liệu cũ từ Đông Âu', clue: 'c_three_brothers',
          text: 'Bản cắt báo về vụ đào tẩu “Ba Quan Tài”: Giáo sư Grimaud và Pierre Fley vốn là hai anh em đồng phạm năm xưa!' }
      ] }
  ],
  suspects: [
    { id: 'dumont', name: 'Quản gia Ernest Dumont', age: 54, avatar: '杜', color: '#4c566a',
      role: 'Quản gia của Giáo sư Grimaud · Nhân chứng tại cầu thang',
      bio: 'Phục vụ Grimaud nhiều năm, là người trực tiếp đứng canh ở hành lang tầng 3 theo lệnh ông chủ.',
      intro: 'Dumont vẫn chưa hết bàng hoàng. “Chính mắt tôi thấy gã đeo mặt nạ bước vào phòng ông chủ rồi biến mất vào hư không!”',
      topics: [
        { id: 't_orders', label: 'Mệnh lệnh kỳ lạ của Giáo sư Grimaud tối đó', lines: [
          ['them', 'Ông chủ bắt chúng tôi phải đứng ở đúng bậc cầu thang cuối hành lang từ 22:05, cấm được tiến lại gần cửa thư phòng hơn 10 mét và phải tắt bớt đèn hành lang!'],
          ['partner', 'Bắt đứng ở đúng một góc nhìn cố định trong ánh sáng mờ — điều kiện bắt buộc của mọi trò ảo thuật gương sân khấu!'] ] },
        { id: 't_dying', label: 'Lời trăng trối của Grimaud khi phá cửa vào', lines: [
          ['them', 'Lúc chúng tôi phá cửa vào, ông chủ nằm bên đống gương vỡ, thều thào bảo: “Pierre Fley đã bắn tôi rồi nhảy qua cửa sổ…” Nhưng cửa sổ vẫn khóa chặt!'] ] }
      ],
      presents: {
        c_mirror_illusion: { lines: [
          ['me', 'Ông không hề thấy hai người ở cửa thư phòng. Thứ ông thấy là chính Giáo sư Grimaud mặc áo khoác giấy bước tới trước tấm gương lớn đặt ở ngưỡng cửa!'],
          ['them', 'Trời ơi… thảo nào bóng của “ông chủ” mở cửa lại cử động khớp hoàn toàn với bóng của kẻ mặc áo khoác!'] ] },
        c_fireplace_ash: { lines: [
          ['them', 'Chiếc áo khoác và chiếc mũ đó làm bằng giấy bồi sơn đen… Ông chủ đã ném nó vào lò sưởi ngay sau khi đóng cửa!'] ] }
      },
      defaultPresent: 'Dumont lắc đầu. “Tôi chỉ làm theo đúng lời ông chủ dặn.”'
    },
    { id: 'fell_consult', name: 'Tiến sĩ Gideon Fell (Đối chiếu Bài giảng Phòng kín)', age: 58, avatar: 'F', color: '#5e81ac',
      role: 'Cố vấn tối cao về các phương thức tạo Mật thất',
      bio: 'Tác giả bài phân loại kinh điển về 7 phương thức tạo dựng Án mạng Phòng kín.',
      intro: 'Tiến sĩ Fell nhồi thuốc vào tẩu, mắt ánh lên vẻ hào hứng. “Nào Hadley, chúng ta hãy ghép hai nửa của trò ảo thuật này lại!”',
      topics: [
        { id: 't_lecture', label: 'Nguyên lý của một “Con người rỗng” (Hollow Man)', lines: [
          ['them', 'Khi kẻ đột nhập không thể thoát ra khỏi căn phòng kín, chỉ có một lời giải duy nhất: Kẻ đột nhập chưa từng tồn tại! Hắn chỉ là một cái vỏ rỗng bằng giấy và ánh sáng phản chiếu trong gương!'] ] },
        { id: 't_fatal_mistake', label: 'Vì sao Giáo sư Grimaud lại chết thật?', lines: [
          ['them', 'Grimaud định tự bắn sượt qua vai mình để đóng vai nạn nhân bị Fley mưu sát. Nhưng khi đập vỡ tấm gương nặng, tay ông ta bị trượt khiến phát súng tự bắn đi thẳng vào phổi!'] ] }
      ],
      presents: {
        c_fley_wound: { lines: [
          ['them', 'Hoàn hảo! Grimaud bắn Fley ở phòng trọ lúc 21:55 rồi chạy về nhà đóng kịch. Ông ta không ngờ viên đạn bị hộp thuốc lá cản lại, khiến Fley vẫn sống thêm 15 phút và tự bước ra bãi tuyết tạo thành vụ án bất khả thi thứ hai!'] ] },
        c_clock_reset: { lines: [
          ['them', 'Chỉ một động tác vặn chiếc đồng hồ quảng cáo ngoài phố nhanh lên 25 phút, Grimaud đã có bằng chứng ngoại phạm giả cho phát súng lúc 21:55!'] ] }
      },
      defaultPresent: 'Tiến sĩ Fell mỉm cười: “Hãy mang cho tôi những mảnh ghép về gương, đồng hồ và vết đạn!”'
    }
  ],
  combos: [
    { a: 'c_fley_alley', b: 'c_fley_wound', result: 'i_walking_corpse' },
    { a: 'c_fley_boarding', b: 'c_fley_wound', result: 'i_walking_corpse' },
    { a: 'c_street_clock', b: 'c_clock_reset', result: 'i_clock_alibi_trick' },
    { a: 'c_hall_witness', b: 'c_mirror_illusion', result: 'i_mirror_hollow_man' },
    { a: 'c_broken_mirror', b: 'c_fireplace_ash', result: 'i_mirror_hollow_man' }
  ],
  hints: [
    { until: 'i_walking_corpse', text: 'Làm sao Fley bị bắn tầm gần giữa bãi tuyết mà không có dấu chân kẻ bắn? Hãy kiểm tra biên bản pháp y vết đạn và phòng trọ của Fley.' },
    { until: 'i_clock_alibi_trick', text: 'Kiểm tra chiếc đồng hồ quảng cáo khổng lồ đầu hẻm Cagliostro để xem vì sao nhân chứng lại khai nghe tiếng súng lúc 22:25.' },
    { until: 'c_mirror_illusion', text: 'Tại thư phòng của Grimaud, hãy kiểm tra cả đống mảnh gương vỡ lẫn tro giấy trong lò sưởi để mở thực nghiệm quang học của Tiến sĩ Fell.' },
    { until: 'i_mirror_hollow_man', text: 'Ghép lời khai của 3 nhân chứng ở cầu thang với Thực nghiệm ảo ảnh tấm gương của Tiến sĩ Fell!' }
  ],
  finalHint: 'Cả hai mật thất tuyết trắng đã bị giải mã hoàn toàn. Hãy đến Bảng suy luận, Hadley!',
  questions: [
    { id: 'q1', q: 'Vì sao Pierre Fley lại chết vì một phát súng tầm gần giữa bãi tuyết mà xung quanh không hề có dấu chân của kẻ bắn súng?',
      options: ['Hung thủ đi cà kheo trên tuyết', 'Hung thủ bắn từ khinh khí cầu', 'Fley đã bị bắn tầm gần ở ngay trong phòng trọ của mình trước đó; viên đạn bị hộp thuốc lá cản một phần nên Fley vẫn tự bước đi ra hẻm tuyết tìm cứu giúp rồi mới gục chết một mình', 'Fley tự sát rồi dùng dây thun kéo súng đi'],
      answer: 2, support: ['i_walking_corpse', 'c_fley_wound', 'c_fley_boarding'] },
    { id: 'q2', q: 'Ai là người đã bắn chết Pierre Fley và dàn dựng toàn bộ kịch bản đêm đó?',
      options: ['Quản gia Ernest Dumont', 'Chính “nạn nhân” Giáo sư Grimaud (Charles Horvath)', 'Người anh em thứ ba trở về từ Đông Âu', 'Chủ tiệm đồng hồ'],
      answer: 1, support: ['i_mirror_hollow_man', 'c_three_brothers', 'c_fley_boarding'] },
    { id: 'q3', q: 'Bằng cách nào Giáo sư Grimaud có mặt ở nhà lúc 22:10 mà các nhân chứng ngoài phố lại khai nghe tiếng súng bắn Fley lúc 22:25?',
      options: ['Grimaud dùng bom hẹn giờ phát nổ súng', 'Grimaud bắn Fley từ lúc 21:55, nhưng trước đó đã vặn chiếc đồng hồ quảng cáo khổng lồ ngoài phố chạy nhanh thêm 25 phút để các nhân chứng đi ngang nhìn lầm giờ', 'Nhân chứng nói dối để bao che', 'Có hai khẩu súng nổ ở hai nơi'],
      answer: 1, support: ['i_clock_alibi_trick', 'c_clock_reset', 'c_street_clock'] },
    { id: 'q4', q: 'Làm thế nào “kẻ mặc áo khoác dài” bước vào thư phòng của Grimaud trước mắt 3 nhân chứng rồi bốc hơi khỏi căn phòng khóa kín?',
      options: ['Hắn trốn trong chiếc đồng hồ quả lắc', 'Không hề có kẻ thứ hai nào: chính Grimaud mặc áo khoác bằng giấy bồi bước tới trước tấm gương lớn đặt ở cửa để tạo ảo ảnh quang học có 2 người, rồi vào phòng đốt áo giấy và đập vỡ gương', 'Ba nhân chứng đồng lõa khai man', 'Hắn thoát qua ống khói lò sưởi'],
      answer: 1, support: ['i_mirror_hollow_man', 'c_mirror_illusion', 'c_fireplace_ash', 'c_broken_mirror'] },
    { id: 'q5', q: 'Vì sao Giáo sư Grimaud — kẻ chủ mưu — cuối cùng lại mất mạng thật trong chính thư phòng của mình?',
      options: ['Do Fley kịp bắn trả trước khi chết', 'Do quản gia Dumont phản bội', 'Grimaud định tự bắn sượt qua vai để đóng vai nạn nhân hoàn hảo, nhưng lúc đập vỡ tấm gương lớn đã bị trượt tay khiến phát súng tự bắn đi thẳng vào ngực gây tử vong', 'Do ngộ độc khói từ giấy bồi cháy'],
      answer: 2, support: ['i_mirror_hollow_man', 'c_grimaud_room'] },
    { id: 'q6', q: 'Động cơ khiến Giáo sư Grimaud phải sát hại Pierre Fley là gì?',
      options: ['Tranh chấp học thuật tại đại học', 'Bị Fley tống tiền về tội ác phản bội hai người anh em đồng phạm trong vụ đào tẩu “Ba Quan Tài” ở Đông Âu năm xưa', 'Do mâu thuẫn tình ái', 'Để lấy tiền bảo hiểm'],
      answer: 1, support: ['c_three_brothers'] }
  ],
  truth: [
    'Giáo sư Grimaud đáng kính tại London thực chất là Charles Horvath — kẻ từng đào tẩu khỏi nhà tù Đông Âu cùng hai người anh em đồng phạm (trong đó có ảo thuật gia Pierre Fley) bằng cách nằm trong ba chiếc quan tài và đã bỏ mặc họ để độc chiếm kho báu.',
    'Khi Pierre Fley tìm đến London tống tiền mình, Grimaud đã vạch ra một kế hoạch “ảo ảnh kép” nhằm giết Fley nhưng lại khiến cảnh sát tin rằng chính Fley đã đến bắn Grimaud rồi tự sát.',
    'Tối hôm đó, Grimaud lẻn đến phòng trọ của Fley. Ông ta vặn chiếc đồng hồ quảng cáo khổng lồ treo ngay dưới ban công chạy nhanh thêm 25 phút, rồi bắn vào ngực Fley lúc 21:55 và ném khẩu súng ra ngoài cửa sổ. Các nhân chứng nghe tiếng súng ngước nhìn đồng hồ đều đinh ninh lúc đó đã là 22:20!',
    'Grimaud vội vã chạy về nhà mình lúc 22:05, bắt quản gia và thư ký đứng canh ở cuối hành lang mờ tối. Ông ta đặt một tấm gương lớn không khung ngay ngưỡng cửa thư phòng, khoác bộ áo choác và mặt nạ bằng giấy bồi bước về phía gương — khiến các nhân chứng nhìn thấy cả ông ta lẫn ảnh phản chiếu trong gương và tin rằng “Grimaud đang mở cửa cho kẻ đeo mặt nạ bước vào”!',
    'Bước vào phòng và khóa cửa lại, Grimaud ném bộ đồ giấy bồi vào lò sưởi đốt sạch, đập vỡ tấm gương rồi tự bắn một phát vào người để hoàn tất vở kịch. Nhưng hai sự cố ngoài tính toán đã xảy ra: Fley nhờ chiếc hộp thuốc lá cản đạn nên chưa chết ngay mà tự lê bước ra bãi tuyết tạo thành “vụ án không dấu chân”; còn Grimaud thì trượt tay trên mảnh gương vỡ khiến phát đạn tự bắn lấy đi mạng sống của chính mình!'
  ],
  sourceNote: 'Phỏng theo kiệt tác “The Hollow Man” (tựa Mỹ: The Three Coffins, 1935) của John Dickson Carr — tác phẩm đứng vị trí số 1 trong danh sách các tiểu thuyết Án mạng Phòng kín xuất sắc nhất lịch sử do hội đồng 17 nhà văn và nhà phê bình quốc tế bình chọn.'
});
