/* =========================================================================
 * VỤ ÁN 8 — CHIÊM TINH THUẬT SÁT NHÂN (BÍ ẨN BỨC TƯỢNG AZOTH)
 * Phỏng theo 占星術殺人事件 (Senseijutsu Satsujin Jiken, 1981) — Shimada Soji
 * Tượng đài Honkaku vĩ đại của thám tử chiêm tinh Mitarai Kiyoshi.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'tokyo-zodiac',
  order: 8,
  collection: 'shin-honkaku',
  author: 'Shimada Soji',
  title: 'Chiêm Tinh Thuật Sát Nhân',
  original: '占星術殺人事件 · 1981 · Shimada Soji (Mitarai Kiyoshi)',
  kanji: '星',
  theme: { a: '#121629', b: '#2b4c7e', accent: '#ffd166' },
  difficulty: 5,
  par: 40,
  tagline: 'Sáu thiếu nữ cung hoàng đạo, sáu phần thi thể chôn khắp nước Nhật, và một phương trình giả kim đánh lừa cả thế kỷ.',
  playerRole: 'Bạn là họa sĩ minh họa Ishioka Kazumi, trợ lý thân cận của nhà chiêm tinh kiêm thám tử lập dị Mitarai Kiyoshi.',
  partner: {
    name: 'Mitarai Kiyoshi',
    title: 'Nhà chiêm tinh học & Thám tử tư tại Yokohama',
    avatar: '御',
    color: '#2b4c7e'
  },
  briefing: [
    'Tháng 2 năm 1936, họa sĩ Umezaki Heikichi bị đập vỡ sọ trong xưởng vẽ biệt lập trên đồi tuyết Tokyo. Cửa chính cài chốt sắt từ bên trong, cửa sổ khóa chặt, còn chiếc chìa khóa duy nhất của cửa phụ lại nằm ngay trên sàn cạnh thi thể.',
    'Trên bàn làm việc, cảnh sát tìm thấy “Bản di cảo Azoth” kỳ quái: Heikichi viết rằng để tạo ra nữ thần bất tử Azoth, phải chọn 6 thiếu nữ thuộc 6 chòm sao trong gia đình mình, cắt lấy bộ phận đẹp nhất của mỗi người (Đầu, Ngực, Bụng, Hông, Đùi, Bắp chân) theo đúng kim loại chiêm tinh rồi ghép lại.',
    'Một tháng sau, người con gái riêng của ông là Kazue bị sát hại tại nhà riêng. Và đến tháng Tư, toàn bộ 6 cô gái trẻ còn lại của đại gia đình Umezaki (Reiko, Tokiko, Yukiko, Akiko, Tomoko, Nobuyo) biến mất hoàn toàn. Lần lượt 6 thi thể bị chặt đầu và cắt khuyết đúng một bộ phận được tìm thấy chôn ở 6 vùng núi khắp Nhật Bản — nhưng bức tượng Azoth hoàn chỉnh thì chưa bao giờ xuất hiện.',
    'Bốn mươi năm trôi qua không ai giải nổi vụ án. Cho đến hôm nay, Mitarai Kiyoshi đặt tấm bản đồ chiêm tinh lên bàn và tuyên bố: “Cả nước Nhật đã bị lừa bởi một ảo thuật cắt hình sơ đẳng!”'
  ],
  clues: {
    c_azoth_diary: { title: 'Bản di cảo giả kim thuật Azoth', icon: '📜', type: 'evidence',
      desc: 'Tài liệu chiêm tinh mở đầu vụ án: mô tả chi tiết việc cắt 6 thiếu nữ thành 6 phần (Đầu, Ngực, Bụng, Hông, Đùi, Bắp chân) và chôn phần thừa ở các mỏ kim loại tương ứng với từng hành tinh.' },
    c_atelier_locked: { title: 'Phòng kín xưởng vẽ trên đồi tuyết', icon: '❄️', type: 'evidence',
      desc: 'Xưởng vẽ của Heikichi có cửa chính cài thanh sắt bên trong. Cửa phụ khóa bằng ổ khóa tự sập, chìa khóa nằm cạnh thi thể cách cửa phụ 4 mét. Bên ngoài tuyết phủ dày từ 22:00 đêm trước.' },
    c_slide_thread: { title: 'Vết xước trên ô thoáng & Băng tan', icon: '🧊', type: 'evidence',
      desc: 'Phía trên cửa phụ có một ô thông gió nhỏ dốc thẳng vào trong phòng. Nếu hung thủ khóa cửa từ bên ngoài rồi đặt chìa khóa cố định bằng một khối nước đá trên gờ nghiêng của ô thoáng, khi lò sưởi hoặc nắng sớm làm đá tan, chìa khóa sẽ tự trượt rơi xuống cạnh thi thể còn nước tan thì bốc hơi sạch!' },
    c_kazue_murder: { title: 'Cái chết của người con riêng Kazue', icon: '💍', type: 'evidence',
      desc: 'Một tháng sau cái chết của Heikichi, người con gái riêng Kazue bị giết tại nhà riêng. Két sắt của cô bị mở, toàn bộ giấy tờ thừa kế tài sản kếch xù của Heikichi biến mất.' },
    c_inheritance_law: { title: 'Quy tắc thừa kế gia sản Umezaki', icon: '⚖️', type: 'evidence',
      desc: 'Theo di chúc và luật thừa kế: khi Heikichi và Kazue qua đời, tài sản được chia cho người vợ kế Masako và các cô gái trong nhà. Nhưng nếu cả 6 cô gái đều chết, quyền thừa kế lại chuyển về họ hàng bên ngoại của Masako!' },
    c_six_corpses: { title: 'Hồ sơ pháp y 6 thi thể không đầu', icon: '🗂️', type: 'evidence',
      desc: 'Sáu phần thi thể được tìm thấy ở 6 tỉnh khác nhau vào các thời điểm cách nhau nhiều tuần. Cả 6 đều bị cắt mất đầu để không thể nhận diện khuôn mặt, và mỗi xác bị cắt khuyết thêm một đoạn cơ thể theo đúng di cảo Azoth.' },
    c_no_statue: { title: 'Nghịch lý: Không hề có bức tượng Azoth', icon: '🗿', type: 'evidence',
      desc: 'Mitarai chỉ ra điều vô lý lớn nhất: hung thủ tốn công giết 6 cô gái, cắt lấy 6 bộ phận để “đúc tượng Azoth”, nhưng suốt 40 năm qua không ai tìm thấy bức tượng đó ở bất kỳ đâu!' },
    c_height_anomaly: { title: 'Sai lệch chiều cao trong biên bản khám nghiệm', icon: '📏', type: 'evidence',
      desc: 'So sánh kỹ số đo pháp y năm 1936: khi cộng chiều dài các phần còn lại của 6 thi thể, có tới 4 thi thể có tỷ lệ xương đùi — xương chậu — lồng ngực lệch nhau từ 2 đến 3 cm, như thể được ghép từ những người có chiều cao khác nhau!' },
    c_dissection_math: { title: 'Bài toán cắt hình lừa thị giác (5 thành 6)', icon: '📐', type: 'evidence',
      desc: 'Mitarai vẽ sơ đồ: nếu bạn có 5 cơ thể (A, B, C, D, E), bạn cắt rời từng cơ thể thành 5 đoạn (Ngực, Bụng, Hông, Đùi, Chân) rồi lấy 1 đoạn của A + 1 đoạn của B + 1 đoạn của C + 1 đoạn của D -> bạn sẽ tạo ra được THÊM MỘT THI THỂ THỨ 6 cũng bị “khuyết một đoạn”!' },
    c_tokiko_scar: { title: 'Dấu bớt hình trăng khuyết trên hông Tokiko', icon: '🌙', type: 'testimony',
      desc: 'Bác sĩ gia đình xác nhận: cô con gái Umezaki Tokiko có một vết bớt bẩm sinh ở phần hông bên trái. Và trong số 6 thi thể được tìm thấy, thi thể được cho là của Tokiko lại bị cắt mất ĐÚNG phần hông!' },
    c_truck_rental: { title: 'Chiếc xe tải đông lạnh thuê bằng tên giả', icon: '🚚', type: 'evidence',
      desc: 'Hồ sơ vận tải năm 1936 ghi nhận một phụ nữ trẻ đeo mạng che mặt đã thuê xe tải chở các thùng đá lạnh đi qua đúng lộ trình 6 vùng mỏ khoáng sản.' },
    c_tokiko_alive: { title: 'Bà lão tự xưng là người hầu cũ', icon: '👵', type: 'testimony',
      desc: 'Người phụ nữ lớn tuổi sống ẩn dật dưới tên họ hàng xa thừa kế gia sản Umezaki có thói quen pha trà và nét chữ viết tay trùng khớp kỳ lạ với nhật ký thời thiếu nữ của Umezaki Tokiko.' },
    c_heikichi_handwriting: { title: 'Giám định chữ viết trong Bản di cảo Azoth', icon: '🖋️', type: 'evidence',
      desc: 'Mitarai đối chiếu nét bút: chương cuối của Bản di cảo Azoth (phần nói về việc phải cắt rời 6 cô gái trong chính gia đình Umezaki) được viết thêm bằng loại mực mới hơn của chính Tokiko!' },

    i_ice_lock_trick: { title: 'Phòng kín được khóa bằng đá lạnh', icon: '🧩', type: 'insight',
      desc: 'Hung thủ không hề đi xuyên tường: sau khi sát hại Heikichi và cài chốt cửa chính, hung thủ thoát ra bằng cửa phụ, đặt chìa khóa lên viên đá lạnh ở ô thoáng dốc để khi băng tan chìa khóa tự rơi vào trong phòng.' },
    i_fake_azoth_motive: { title: 'Azoth chỉ là màn khói ngụy trang', icon: '🧩', type: 'insight',
      desc: 'Hung thủ không hề muốn tạo ra tượng nữ thần Azoth. Toàn bộ nghi thức chiêm tinh cắt xác chỉ có một mục đích duy nhất: hợp thức hóa việc các thi thể bị cắt mất đầu và chia thành nhiều khúc!' },
    i_five_into_six: { title: 'Ảo thuật biến 5 xác chết thành 6 nạn nhân', icon: '🧩', type: 'insight',
      desc: 'Chỉ có 5 cô gái bị giết! Hung thủ đã cắt 5 thi thể thành nhiều phần và tráo đổi chúng ở 6 địa phương khác nhau để cảnh sát đếm thành 6 nạn nhân — qua đó giúp cô gái thứ 6 “chết trên giấy tờ”!' },
    i_tokiko_culprit: { title: 'Umezaki Tokiko còn sống và là hung thủ', icon: '🧩', type: 'insight',
      desc: 'Tokiko đã viết thêm vào di cảo của cha, sát hại Heikichi, Kazue và 5 chị em để trả thù sự bạc đãi và chiếm đoạt gia sản, đồng thời cắt bỏ phần hông trên “thi thể Tokiko” để không ai phát hiện vết bớt của mình chưa từng nằm dưới mộ!' }
  },
  locations: [
    { id: 'yokohama', name: 'Văn phòng Mitarai Kiyoshi ở Yokohama', icon: '🔭',
      desc: 'Căn phòng ngập tràn sách chiêm tinh học, bản đồ sao và hồ sơ vụ án năm 1936.',
      points: [
        { id: 'p_azoth', name: 'Bản sao “Bản di cảo Azoth” (1936)', clue: 'c_azoth_diary',
          text: 'Những trang văn rùng rợn mô tả cách cắt 6 bộ phận của 6 thiếu nữ thuộc 6 cung hoàng đạo để tạo thành Azoth.' },
        { id: 'p_no_statue', name: 'Đặt câu hỏi với Mitarai về bức tượng', clue: 'c_no_statue',
          text: 'Mitarai bật cười: “Ishioka-kun, cậu nghĩ xem! Giết 6 người để làm tượng, thế mà tượng đâu? Chẳng có bức tượng nào hết, vì việc cắt xác phục vụ cho một bài toán khác!”' },
        { id: 'p_ink', name: 'Soi kính lúp bản thảo gốc của Heikichi', clue: 'c_heikichi_handwriting', requires: ['c_no_statue'],
          text: 'Những trang cuối chỉ đích danh 6 cô gái trong nhà Umezaki được viết bằng loại mực khác hẳn phần đầu!' }
      ] },
    { id: 'atelier', name: 'Hiện trường Xưởng vẽ đồi tuyết & Nhà Kazue', icon: '❄️',
      desc: 'Hồ sơ hiện trường vụ án mở màn tháng 2 và tháng 3 năm 1936.',
      points: [
        { id: 'p_locked', name: 'Sơ đồ xưởng vẽ khóa kín của Heikichi', clue: 'c_atelier_locked',
          text: 'Cửa chính cài chốt sắt, cửa phụ khóa tự động, chìa khóa nằm cạnh xác chết trên sàn.' },
        { id: 'p_transom', name: 'Kiểm tra cấu trúc ô thoáng trên cửa phụ', clue: 'c_slide_thread', requires: ['c_atelier_locked'],
          text: 'Ô thoáng nghiêng một góc 45 độ hướng thẳng về vị trí tìm thấy chìa khóa. Một viên đá lạnh đặt trên gờ gỗ là đủ để hẹn giờ cho chìa khóa rơi xuống!' },
        { id: 'p_kazue', name: 'Biên bản vụ sát hại Kazue', clue: 'c_kazue_murder',
          text: 'Kazue bị giết chỉ một tháng sau cha mình. Kẻ thủ ác lấy đi toàn bộ hồ sơ thừa kế.' },
        { id: 'p_law', name: 'Cây phả hệ & Quyền thừa kế nhà Umezaki', clue: 'c_inheritance_law',
          text: 'Toàn bộ tài sản chảy về một nhánh duy nhất sau khi Heikichi, Kazue và “6 cô gái” lần lượt qua đời.' }
      ] },
    { id: 'autopsy_archive', name: 'Kho lưu trữ Pháp y Quốc gia', icon: '🔬',
      desc: 'Nơi lưu giữ biên bản khám nghiệm 6 phần thi thể tìm thấy ở 6 tỉnh năm 1936.',
      points: [
        { id: 'p_six_files', name: 'Tổng hợp 6 biên bản khám nghiệm', clue: 'c_six_corpses',
          text: 'Mỗi tỉnh chỉ khám nghiệm phần thi thể tìm thấy tại địa phương mình rồi đem chôn cất, chưa từng đặt cả 6 phần thi thể cạnh nhau!' },
        { id: 'p_measure', name: 'Đối chiếu chiều dài xương của 6 thi thể', clue: 'c_height_anomaly', requires: ['c_six_corpses'],
          text: 'Bạn giật mình: trên cùng một “thi thể”, xương đùi lại thuộc về người cao 1m58 còn lồng ngực thuộc về người cao 1m50!' },
        { id: 'p_math', name: 'Sơ đồ cắt ghép của Mitarai Kiyoshi', clue: 'c_dissection_math', requires: ['c_height_anomaly'],
          text: 'Mitarai vẽ 5 hình người trên bảng rồi cắt thành 5 khúc: “Chỉ cần 5 cái xác, tráo đổi các khúc cho nhau, cảnh sát ở 6 tỉnh sẽ đếm thành 6 cái xác thiếu một bộ phận!”' },
        { id: 'p_scar', name: 'Hồ sơ bệnh án cũ của Tokiko', clue: 'c_tokiko_scar',
          text: 'Tokiko có vết bớt hình trăng khuyết ở hông trái — đúng bộ phận đã bị “cắt mất” khỏi cái xác mang tên Tokiko!' }
      ] },
    { id: 'kyoto_house', name: 'Ngôi nhà cổ ở Kyoto (40 năm sau)', icon: '🏮', requires: ['i_five_into_six'],
      desc: 'Nơi người phụ nữ thừa kế cuối cùng liên quan đến gia tộc Umezaki đang sinh sống.',
      points: [
        { id: 'p_truck', name: 'Hóa đơn vận tải lưu trữ năm 1936', clue: 'c_truck_rental',
          text: 'Chuyến xe tải chở đá lạnh đi qua 6 vùng mỏ năm 1936 được thanh toán bằng tiền rút từ tài khoản phụ của chi nhánh Umezaki.' },
        { id: 'p_old_woman', name: 'Cuộc gặp gỡ với người phụ nữ ẩn danh', clue: 'c_tokiko_alive',
          text: 'Bà lão mỉm cười bình thản khi Mitarai gọi thẳng tên thật của bà sau bốn thập kỷ: “Umezaki Tokiko”.' }
      ] }
  ],
  suspects: [
    { id: 'takegoshi', name: 'Cựu thanh tra Takegoshi', age: 68, avatar: '竹', color: '#457b9d',
      role: 'Điều tra viên phụ trách vụ án năm 1936',
      bio: 'Theo đuổi vụ án Azoth suốt nửa cuộc đời nhưng luôn bị mắc kẹt ở giả thuyết một gã đàn ông cuồng tín bên ngoài.',
      intro: 'Ông lão Takegoshi thở dài nhìn chồng hồ sơ ố vàng. “Bốn mươi năm rồi… tôi vẫn thấy cơn bão tuyết đêm đó trong mơ.”',
      topics: [
        { id: 't_1936', label: 'Về hiện trường phòng kín xưởng vẽ', lines: [
          ['them', 'Chốt sắt cài bên trong, chìa khóa cửa phụ nằm dưới đất. Hồi đó chúng tôi còn tưởng ông Heikichi bị ma quỷ sát hại.'] ] },
        { id: 't_six_bodies', label: 'Về 6 thi thể ở 6 vùng mỏ', lines: [
          ['them', 'Vì các xác được tìm thấy cách nhau hàng trăm cây số và cách nhau nhiều tuần, cảnh sát mỗi tỉnh tự khám nghiệm rồi hỏa táng luôn. Chúng tôi chỉ đối chiếu qua giấy tờ.'],
          ['partner', 'Và chính vì chỉ đối chiếu trên giấy tờ nên các ông đã cộng 5 người chết thành 6 người đấy!'] ] }
      ],
      presents: {
        c_dissection_math: { lines: [
          ['me', 'Ngài xem sơ đồ này đi: 5 thi thể bị cắt thành các đoạn rời rồi hoán đổi cho nhau sẽ tạo ra 6 bộ phận thi thể bị khuyết!'],
          ['narr', 'Ông Takegoshi đứng bật dậy, đôi tay run rẩy.'],
          ['them', 'Trời đất ơi… Vậy là cô gái thứ sáu chưa bao giờ chết!'] ] },
        c_slide_thread: { lines: [
          ['them', 'Đặt chìa khóa trên khối băng ở ô thoáng… Thảo nào khi chúng tôi phá cửa vào buổi trưa thì chỉ còn chiếc chìa khóa khô ráo trên sàn!'] ] }
      },
      defaultPresent: 'Cựu thanh tra Takegoshi lắc đầu. “Tôi đã già rồi, cậu hãy hỏi Mitarai xem.”'
    },
    { id: 'tokiko', name: 'Umezaki Tokiko (Người phụ nữ ẩn danh)', age: 61, avatar: '時', color: '#9b2226',
      role: 'Con gái của Umezaki Heikichi · “Nạn nhân thứ sáu” năm 1936',
      bio: 'Suốt 40 năm qua được cả nước Nhật cho là đã bị sát hại và cắt lấy phần hông để đúc tượng Azoth.',
      intro: 'Người phụ nữ tóc bạc ngồi bên hiên trà, ánh mắt tĩnh lặng nhìn Mitarai và bạn.',
      topics: [
        { id: 't_family_past', label: 'Cuộc sống trong gia đình Umezaki năm 1936', lines: [
          ['them', 'Ông Heikichi là một con quái vật đội lốt nghệ sĩ, còn những người chị em cùng cha khác mẹ thì coi mẹ con tôi như cỏ rác.'],
          ['them', 'Trong căn nhà đó, nếu không biến thành ác quỷ thì chỉ có nước bị nghiền nát.'] ] },
        { id: 't_azoth_meaning', label: 'Về cuốn nhật ký Azoth của ông Heikichi', lines: [
          ['them', 'Ông ta thực sự từng mơ tưởng đến bức tượng Azoth trong những cơn điên. Tôi chỉ giúp giấc mơ của ông ta trở thành chiếc mặt nạ hoàn hảo nhất cho mình.'] ] }
      ],
      presents: {
        c_tokiko_scar: { lines: [
          ['me', 'Bà có vết bớt hình trăng khuyết ở hông trái. Vì thế trong màn kịch năm 1936, cái xác mang tên Tokiko bắt buộc phải là cái xác bị cắt mất phần hông!'],
          ['them', '…Ngài Mitarai quả thực đã nhìn thấu bốn mươi năm sương mù.'] ] },
        c_heikichi_handwriting: { lines: [
          ['me', 'Chính bà đã viết thêm chương cuối vào Bản di cảo Azoth để dẫn dắt cảnh sát tin vào nghi lễ cắt xác 6 cung hoàng đạo.'],
          ['them', 'Nếu không có câu chuyện giả kim thuật kỳ bí ấy, cảnh sát sẽ tự hỏi ngay từ đầu: tại sao hung thủ lại phải cắt khúc các thi thể?'] ] }
      },
      defaultPresent: 'Bà lão khẽ nhấp ngụm trà, không nói gì thêm.'
    }
  ],
  combos: [
    { a: 'c_atelier_locked', b: 'c_slide_thread', result: 'i_ice_lock_trick' },
    { a: 'c_azoth_diary', b: 'c_no_statue', result: 'i_fake_azoth_motive' },
    { a: 'c_heikichi_handwriting', b: 'c_no_statue', result: 'i_fake_azoth_motive' },
    { a: 'c_height_anomaly', b: 'c_dissection_math', result: 'i_five_into_six' },
    { a: 'i_fake_azoth_motive', b: 'c_dissection_math', result: 'i_five_into_six' },
    { a: 'i_five_into_six', b: 'c_tokiko_scar', result: 'i_tokiko_culprit' },
    { a: 'i_five_into_six', b: 'c_tokiko_alive', result: 'i_tokiko_culprit' }
  ],
  hints: [
    { until: 'i_ice_lock_trick', text: 'Hãy kiểm tra xưởng vẽ đồi tuyết và ô thoáng phía trên cửa phụ để giải mã cách chiếc chìa khóa rơi vào phòng kín.' },
    { until: 'i_fake_azoth_motive', text: 'Hỏi Mitarai ở văn phòng Yokohama về nghịch lý “không có bức tượng Azoth” rồi kết hợp với Bản di cảo Azoth.' },
    { until: 'c_dissection_math', text: 'Hãy vào Kho lưu trữ Pháp y Quốc gia, kiểm tra 6 biên bản khám nghiệm và đối chiếu số đo chiều dài xương.' },
    { until: 'i_five_into_six', text: 'Kết hợp sai lệch chiều cao xương (hoặc động cơ giả Azoth) với Sơ đồ cắt ghép 5 thành 6 của Mitarai.' },
    { until: 'i_tokiko_culprit', text: 'Khi đã mở khóa ngôi nhà cổ ở Kyoto và biết về vết bớt ở hông của Tokiko, hãy ghép với suy luận “5 thành 6”!' }
  ],
  finalHint: 'Bí ẩn bốn mươi năm của bức tượng Azoth đã có lời giải hoàn chỉnh. Hãy đến Bảng suy luận, Ishioka-kun!',
  questions: [
    { id: 'q1', q: 'Bằng cách nào chiếc chìa khóa cửa phụ lại nằm bên trong xưởng vẽ khóa kín của họa sĩ Heikichi?',
      options: ['Heikichi tự khóa cửa rồi đột tử', 'Hung thủ dùng nam châm kéo chìa khóa qua khe cửa', 'Hung thủ khóa cửa từ bên ngoài rồi đặt chìa khóa trên một khối đá lạnh ở ô thoáng dốc; khi băng tan, chìa khóa trượt rơi vào phòng còn nước bốc hơi', 'Cảnh sát làm rơi chìa khóa khi phá cửa'],
      answer: 2, support: ['i_ice_lock_trick', 'c_slide_thread', 'c_atelier_locked'] },
    { id: 'q2', q: 'Vì sao suốt 40 năm không ai tìm thấy bức tượng nữ thần Azoth được ghép từ 6 bộ phận cơ thể?',
      options: ['Bức tượng đã bị nấu chảy thành vàng', 'Bức tượng được giấu ở nước ngoài', 'Vì bức tượng Azoth chưa bao giờ tồn tại — nghi thức giả kim chỉ là cái cớ để hung thủ cắt rời các thi thể mà không bị nghi ngờ mục đích thật', 'Hung thủ chết trước khi ghép xong'],
      answer: 2, support: ['i_fake_azoth_motive', 'c_no_statue', 'c_heikichi_handwriting'] },
    { id: 'q3', q: 'Mục đích thật sự của việc cắt rời các thi thể và chôn ở 6 tỉnh khác nhau là gì?',
      options: ['Để lập trận đồ chiêm tinh yểm bùa', 'Áp dụng bài toán cắt ghép: cắt 5 thi thể thành các đoạn rồi tráo đổi cho nhau để biến 5 nạn nhân thật thành 6 cái xác trên biên bản pháp y, giúp người thứ 6 giả chết', 'Để phi tang hung khí trong các mỏ khoáng sản', 'Do hung thủ không chở hết cùng lúc'],
      answer: 1, support: ['i_five_into_six', 'c_dissection_math', 'c_height_anomaly'] },
    { id: 'q4', q: 'Vì sao cái xác được nhận định là của Umezaki Tokiko lại bị cắt mất đúng phần hông?',
      options: ['Vì Tokiko thuộc cung Thiên Bình ứng với phần hông', 'Vì hông của Tokiko có vết bớt hình trăng khuyết bẩm sinh — cắt bỏ phần hông trên cái xác ghép giả làm Tokiko sẽ ngăn pháp y nhận ra đó không phải cô ta', 'Do vết thương chí mạng nằm ở hông', 'Sự trùng hợp ngẫu nhiên'],
      answer: 1, support: ['c_tokiko_scar', 'i_tokiko_culprit'] },
    { id: 'q5', q: 'Ai là hung thủ thật sự đứng sau toàn bộ chuỗi án mạng Chiêm Tinh năm 1936?',
      options: ['Họa sĩ Umezaki Heikichi giả chết', 'Người con gái riêng Kazue', 'Umezaki Tokiko — người được cho là nạn nhân thứ sáu', 'Cựu thanh tra Takegoshi'],
      answer: 2, support: ['i_tokiko_culprit', 'c_tokiko_alive', 'c_heikichi_handwriting'] },
    { id: 'q6', q: 'Động cơ cốt lõi khiến Tokiko thực hiện kế hoạch tàn khốc này là gì?',
      options: ['Cuồng tín tôn giáo chiêm tinh', 'Trả thù sự hà khắc, khinh miệt trong gia đình Umezaki và thâu tóm quyền thừa kế gia sản dưới thân phận người họ hàng còn sống', 'Bị một tổ chức bí mật sai khiến', 'Để bảo vệ người yêu'],
      answer: 1, support: ['c_inheritance_law', 'i_tokiko_culprit'] }
  ],
  truth: [
    'Suốt bốn mươi năm, cả giới điều tra Nhật Bản bị cuốn vào ma trận chiêm tinh học của “Bản di cảo Azoth” và đi tìm một gã đàn ông cuồng tín đã sát hại cả gia đình Umezaki để đúc tượng nữ thần bất tử.',
    'Nhưng Mitarai Kiyoshi đã lật ngược toàn bộ bàn cờ bằng một câu hỏi giản dị: Tại sao phải cắt rời 6 thi thể mà không bao giờ ghép lại thành tượng? Câu trả lời: Việc cắt xác không phải để tạo ra 1 bức tượng từ 6 người — mà để tạo ra **6 cái xác từ 5 người chết**!',
    'Umezaki Tokiko và mẹ mình bị cha và các chị em trong gia đình đối xử tàn tệ suốt nhiều năm. Năm 1936, Tokiko viết thêm chương cuối vào cuốn sổ chiêm tinh của cha, sát hại ông trong xưởng vẽ rồi dùng khối đá lạnh ở ô thoáng để biến căn phòng thành mật thất khóa kín. Sau đó cô sát hại người chị Kazue để mở đường thừa kế.',
    'Trong chuyến đi định mệnh tháng Tư, Tokiko đầu độc 5 người chị em còn lại. Để bản thân hoàn toàn biến mất khỏi diện tình nghi, cô chặt đầu cả 5 thi thể, cắt rời thành từng đoạn (ngực, bụng, hông, đùi, bắp chân) rồi tráo đổi các đoạn cơ thể của 5 người thành 6 phần thi thể “bị khuyết một bộ phận” và đem chôn ở 6 tỉnh khác nhau. Riêng phần thi thể đóng giả làm chính Tokiko bị khuyết mất phần hông — nơi cô có vết bớt bẩm sinh!',
    'Khi chân tướng được Mitarai vạch trần sau bốn thập kỷ, Tokiko đã chọn kết thúc cuộc đời mình, khép lại một trong những kỳ án vĩ đại nhất lịch sử văn học trinh thám.'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Án mạng Chiêm tinh” (占星術殺人事件 / The Tokyo Zodiac Murders, 1981) của Shimada Soji — được bình chọn là một trong những tiểu thuyết trinh thám đánh đố (Honkaku) xuất sắc nhất mọi thời đại.'
});
