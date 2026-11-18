/* =========================================================================
 * VỤ ÁN 7 — BIỆT THỰ THẬP GIÁC ĐÀI (THẢM SÁT TRÊN ĐẢO CÔ LẬP)
 * Phỏng theo 十角館の殺人 (Jukkakukan no Satsujin, 1987) — Ayatsuji Yukito
 * Kiệt tác khai sinh trào lưu Shin-Honkaku (Tân Bản Cách) Nhật Bản.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'decagon-house',
  order: 7,
  collection: 'shin-honkaku',
  author: 'Ayatsuji Yukito',
  title: 'Biệt Thự Thập Giác Đài',
  original: '十角館の殺人 · 1987 · Ayatsuji Yukito (Shin-Honkaku)',
  kanji: '十',
  theme: { a: '#1b1929', b: '#52307c', accent: '#f4a261' },
  difficulty: 5,
  par: 38,
  tagline: 'Một sảnh chính mười cạnh, bảy tấm thẻ khắc tội lỗi, và kẻ sát nhân đi xuyên qua hai thế giới.',
  playerRole: 'Bạn là Kawaminami Takaaki — cựu thành viên Câu lạc bộ Trinh thám Đại học K, hợp tác cùng nhà ngoại cảm kiêm thám tử Shimada Kiyoshi.',
  partner: {
    name: 'Shimada Kiyoshi',
    title: 'Nhà nghiên cứu độc lập — bạn của mục sư trên đảo',
    avatar: '島',
    color: '#52307c'
  },
  briefing: [
    'Sáu tháng trước, trên hòn đảo hoang Tsunojima ngoài khơi Kyushu, kiến trúc sư lập dị Nakamura Seiji cùng vợ và hai người hầu bị sát hại rồi thiêu cháy trong “Biệt thự Xanh”. Người làm vườn biến mất không dấu vết. Chỉ còn lại công trình kỳ quái ông ta xây dở: “Biệt thự Thập Giác” với sảnh tròn mười cạnh như một mê cung hình học.',
    'Cuối tháng Ba năm nay, bảy thành viên Câu lạc bộ Trinh thám Đại học K (gọi nhau bằng biệt danh các nhà văn: Ellery, Poe, Carr, Leroux, Agatha, Orczy và Van) ra đảo Tsunojima cắm trại một tuần, hoàn toàn tách biệt với đất liền.',
    'Trong khi đó ở đất liền, bạn (Kawaminami) và các cựu thành viên nhận được bức thư nặc danh ký tên “Người đã chết Nakamura Seiji”, tố cáo cái chết vì ngộ độc rượu của nữ sinh Chiori một năm trước là do thành viên câu lạc bộ gây ra.',
    'Một tuần sau, cột khói đen bốc lên từ đảo Tsunojima. Toàn bộ nhóm sinh viên trên đảo đều tử nạn — ngoại trừ một sự thật kinh hoàng ẩn giấu sau chiếc cốc mười cạnh và bàn tay trái bị chặt đứt.'
  ],
  clues: {
    c_decagon_map: { title: 'Sơ đồ Biệt thự Thập Giác', icon: '🔟', type: 'evidence',
      desc: 'Sảnh chính có 10 cạnh đều nhau: 7 phòng ngủ cho 7 thành viên, 1 bếp, 1 phòng tắm và 1 lối vào. Bàn ăn giữa sảnh cũng có 10 cạnh và bộ 10 chiếc cốc gốm hình thập giác nhìn thoáng qua giống hệt nhau.' },
    c_seven_plaques: { title: 'Bảy tấm bảng gỗ phán xét', icon: '🪧', type: 'evidence',
      desc: 'Sáng ngày thứ hai trên đảo, trên bàn thập giác xuất hiện 7 tấm bảng gỗ ghi: “Nạn nhân thứ nhất” đến “Nạn nhân thứ năm”, “Thám tử” và tấm cuối cùng khắc bằng chữ đỏ: “HUNG THỦ”.' },
    c_orczy_body: { title: 'Thi thể thứ nhất: Orczy', icon: '🩸', type: 'evidence',
      desc: 'Nữ sinh Orczy bị siết cổ trong phòng riêng vào ngày thứ hai. Bàn tay trái bị cắt đứt mang đi mất, nhưng trên mặt bàn trang điểm của cô vẫn còn vết phấn son đang dở dang.' },
    c_carr_cyanide: { title: 'Thi thể thứ hai: Carr & Cốc cà phê', icon: '☕', type: 'evidence',
      desc: 'Trưa ngày thứ ba, Carr gục chết ngay sau khi uống cà phê pha từ bình chung. Giám định cho thấy chất độc kali xyanua KHÔNG nằm trong bình pha, mà được bôi khô sẵn ở đáy chiếc cốc Carr đã cầm.' },
    c_cup_handle: { title: 'Bí mật bộ 10 chiếc cốc thập giác', icon: '🏺', type: 'evidence',
      desc: 'Kiểm tra mảnh vỡ bộ cốc tại hiện trường: có 9 chiếc cốc có quai gắn ở mặt phẳng cạnh, riêng 1 chiếc cốc duy nhất có quai gắn ở GÓC nối hai cạnh. Ai biết chi tiết này có thể bỏ độc vào các cốc thường và chỉ chọn chiếc cốc quai góc cho mình!' },
    c_leroux_cliff: { title: 'Thi thể thứ ba: Leroux ở vách đá', icon: '🪨', type: 'evidence',
      desc: 'Tối ngày thứ ba, Leroux bị đánh vỡ sọ ở vách đá phía bắc đảo khi đi tìm lối hầm bí mật của Nakamura Seiji.' },
    c_agatha_lipstick: { title: 'Thi thể thứ tư: Agatha & Thỏi son độc', icon: '💄', type: 'evidence',
      desc: 'Ngày thứ tư, Agatha tử vong vì chất độc tẩm trong chính thỏi son môi cô để trên bàn phòng mình. Người duy nhất từng vào phòng cô để mượn đồ trang điểm tối hôm trước là… không ai cả, trừ người lấy bàn tay của Orczy!' },
    c_ring_hand: { title: 'Lý do bàn tay trái của Orczy bị cắt', icon: '💍', type: 'evidence',
      desc: 'Orczy có thói quen sơn móng tay bóng nhưng ngón áp út tay trái có vết sẹo bỏng cũ và đeo nhẫn đôi với bạn trai. Kẻ sát nhân không chặt tay vì nghi thức điên loạn — mà để dùng bàn tay đó ngụy trang hoặc che giấu dấu vết thuốc súng/chất độc khi gài bẫy!' },
    c_van_room_fire: { title: 'Vụ cháy thiêu rụi 3 thi thể cuối', icon: '🔥', type: 'evidence',
      desc: 'Đêm ngày thứ tư, dầu hỏa tưới khắp sảnh làm Biệt thự Thập Giác bốc cháy. Trong đống tro tàn tìm thấy thi thể của Poe, Ellery và một thi thể cháy đen trong phòng của Van.' },
    c_chiori_past: { title: 'Cái chết của Nakamura Chiori', icon: '🥀', type: 'testimony',
      desc: 'Một năm trước, Chiori — con gái duy nhất của kiến trúc sư Nakamura Seiji — tử vong vì ngộ độc rượu cấp tính trong buổi tiệc của Câu lạc bộ Trinh thám vì bị ép uống rượu khi có bệnh tim.' },
    c_chiori_lover: { title: 'Người yêu bí mật của Chiori', icon: '💌', type: 'evidence',
      desc: 'Trong cuốn nhật ký giấu kỹ ở nhà mục sư Nakamura Kosuke (em trai kiến trúc sư Seiji), Chiori viết cô đang yêu say đắm một đàn anh trong Câu lạc bộ Trinh thám mang tên viết tắt “M” — chính là Morisu (biệt danh Van Dine)!' },
    c_mainland_letter: { title: 'Bức thư tố cáo ở đất liền', icon: '✉️', type: 'evidence',
      desc: 'Bức thư ký tên Nakamura Seiji gửi đến căn hộ của bạn ở đất liền được bỏ vào hòm thư trực tiếp (không có dấu bưu điện) vào tối ngày thứ ba — đúng lúc cả 7 sinh viên đang ở ngoài đảo Tsunojima!' },
    c_rubber_dinghy: { title: 'Chiếc xuồng cao su cất giấu ở ghềnh đá', icon: '🚤', type: 'evidence',
      desc: 'Shimada phát hiện một khoang đá ngầm phía tây đảo có dấu vết neo xuồng cao su bơm hơi gắn động cơ điện giảm thanh, cùng một bộ đồ lặn khô. Từ đảo vào bờ biển đất liền chỉ mất 25 phút đường biển khi lặng gió!' },
    c_gardener_corpse: { title: 'Bộ hài cốt dưới hầm Biệt thự Xanh', icon: '💀', type: 'evidence',
      desc: 'Dưới hầm chứa củi của Biệt thự Xanh bị cháy 6 tháng trước có một bộ xương người mặc quần áo của người làm vườn đã mất tích — ông ta đã chết từ 6 tháng trước, không hề sống sót để giả làm bóng ma Nakamura Seiji!' },
    c_van_alibi_fake: { title: 'Màn kịch “căn bệnh đột ngột” của Van', icon: '🛏️', type: 'testimony',
      desc: 'Ghi chép nhật ký còn sót của Ellery: từ tối ngày thứ hai, Van cáo ốm nặng, khóa cửa nằm liệt giường trong phòng tối và quấn kín chăn để không ai nhìn rõ mặt — tạo thời gian trống suốt ban đêm để rời đảo bằng xuồng cao su!' },
    c_bottle_message: { title: 'Cái chai thủy tinh trôi dạt', icon: '🍾', type: 'evidence',
      desc: 'Một vỏ chai đựng mảnh giấy thú tội được thả trôi gần bờ biển để định hướng cảnh sát rằng “kẻ sát nhân đã tự trầm mình xuống biển sau khi đốt biệt thự”.' },

    i_no_outsider: { title: 'Không có “người thứ tám” trên đảo', icon: '🧩', type: 'insight',
      desc: 'Cả kiến trúc sư Nakamura Seiji lẫn người làm vườn đều đã chết từ 6 tháng trước. Mọi tin đồn về căn phòng bí mật và bóng ma của Seiji chỉ là mồi nhử để các nạn nhân tự nghi kỵ và đi tìm chỗ chết.' },
    i_cup_trick: { title: 'Thủ thuật chiếc cốc thập giác quai góc', icon: '🧩', type: 'insight',
      desc: 'Hung thủ bôi sẵn xyanua vào một hoặc nhiều cốc thường trong khay, còn bản thân luôn cầm chiếc cốc duy nhất có quai gắn ở góc cạnh. Ai bốc phải cốc độc là hoàn toàn ngẫu nhiên — nhằm đánh lừa rằng hung thủ không nhắm vào mục tiêu cố định.' },
    i_two_worlds_bridge: { title: 'Kẻ đi xuyên qua hai thế giới (Đảo & Đất liền)', icon: '🧩', type: 'insight',
      desc: 'Bức thư ở đất liền được bỏ vào hòm thư tối ngày thứ ba không phải do người trên đất liền gửi — mà do một người trên đảo giả ốm nằm trong phòng khóa kín, rồi dùng xuồng cao su vượt biển về đất liền trong đêm!' },
    i_van_mastermind: { title: 'Van Dine (Morisu) là hung thủ duy nhất', icon: '🧩', type: 'insight',
      desc: 'Để trả thù cho người yêu Chiori bị các thành viên câu lạc bộ ép uống rượu đến chết, Morisu (Van) đã dàn dựng toàn bộ vụ án liên hoàn trên đảo, giả chết trong đám cháy cuối cùng rồi quay lại đất liền như người sống sót hoặc nhân chứng ngoài cuộc.' }
  },
  locations: [
    { id: 'decagon', name: 'Sảnh chính Biệt thự Thập Giác', icon: '🔟',
      desc: 'Căn phòng 10 cạnh kỳ dị đã bị lửa tàn phá một phần, mùi khói và hóa chất vẫn còn nồng nặc.',
      points: [
        { id: 'p_map', name: 'Cấu trúc 10 cạnh & bàn trung tâm', clue: 'c_decagon_map',
          text: 'Shimada đứng giữa sảnh: “Mười cạnh đối xứng tuyệt đối. Khi tất cả các cửa đóng lại, người ta mất hoàn toàn phương hướng.”' },
        { id: 'p_plaques', name: 'Bảy tấm thẻ gỗ thu giữ được', clue: 'c_seven_plaques',
          text: 'Những tấm thẻ gỗ khắc chữ như trò chơi đóng vai: Nạn nhân thứ nhất, thứ hai… Thám tử, và Hung thủ.' },
        { id: 'p_carr', name: 'Hiện trường vụ đầu độc Carr', clue: 'c_carr_cyanide',
          text: 'Biên bản pháp y: bình cà phê hoàn toàn sạch. Chỉ riêng chiếc cốc của Carr có cặn kali xyanua ở đáy.' },
        { id: 'p_cups', name: 'Soi kỹ mảnh vỡ bộ 10 chiếc cốc gốm', clue: 'c_cup_handle', requires: ['c_carr_cyanide'],
          text: 'Bạn ghép các mảnh gốm lại: 9 chiếc có quai gắn ở mặt phẳng, nhưng chiếc thứ 10 lại gắn quai ngay trên đường gờ góc cạnh!' }
      ] },
    { id: 'rooms', name: 'Các phòng ngủ & Vách đá phía Bắc', icon: '🚪',
      desc: 'Hiện trường nơi các thành viên câu lạc bộ lần lượt ngã xuống.',
      points: [
        { id: 'p_orczy', name: 'Phòng của Orczy (Nạn nhân thứ nhất)', clue: 'c_orczy_body',
          text: 'Orczy bị siết cổ, bàn tay trái bị cắt đứt. Nhưng sao một kẻ giết người lạnh lùng lại tốn thời gian cắt bàn tay mang đi?' },
        { id: 'p_orczy_hand', name: 'Phân tích mục đích cắt bàn tay Orczy', clue: 'c_ring_hand', requires: ['c_agatha_lipstick'],
          text: 'Shimada trầm ngâm: “Hung thủ lấy lọ sơn móng và dụng cụ trang điểm từ phòng Orczy để gài bẫy Agatha, đồng thời cắt bàn tay có vết sẹo của Orczy để gây nhiễu nhận dạng!”' },
        { id: 'p_agatha', name: 'Phòng của Agatha (Nạn nhân thứ tư)', clue: 'c_agatha_lipstick',
          text: 'Thỏi son môi chứa độc xyanua. Một cái bẫy tinh vi nhắm vào thói quen tô lại môi sau bữa ăn của Agatha.' },
        { id: 'p_cliff', name: 'Vách đá phía Bắc (Leroux)', clue: 'c_leroux_cliff',
          text: 'Leroux bị đánh từ phía sau khi đang cúi tìm lối vào tầng hầm bí mật không hề tồn tại.' },
        { id: 'p_fire', name: 'Đống đổ nát sau vụ hỏa hoạn đêm thứ tư', clue: 'c_van_room_fire',
          text: 'Nhật ký còn sót của Ellery được tìm thấy trong hộp kim loại: tối ngày thứ hai, Van đã nằm liệt giường vì “sốt cao”.' }
      ] },
    { id: 'blue_house', name: 'Phế tích Biệt thự Xanh & Ghềnh đá Tây', icon: '🌊',
      desc: 'Nơi gia đình kiến trúc sư Nakamura Seiji thiệt mạng 6 tháng trước.',
      points: [
        { id: 'p_cellar', name: 'Hầm chứa củi dưới nền Biệt thự Xanh', clue: 'c_gardener_corpse',
          text: 'Dưới lớp gạch sập là hài cốt của người làm vườn mất tích từ 6 tháng trước. Không còn ai của gia đình Nakamura sống sót trên đảo!' },
        { id: 'p_cove', name: 'Hốc đá ngầm phía Tây đảo', clue: 'c_rubber_dinghy', requires: ['i_no_outsider'],
          text: 'Vết cao su ma sát trên đá và dây neo cất giấu: một chiếc xuồng cao su có động cơ điện từng cập vào đây trong đêm!' },
        { id: 'p_diary', name: 'Sổ ghi chép của Ellery trong hộp sắt', clue: 'c_van_alibi_fake',
          text: '“Van cứ trùm chăn kín mít trong phòng tối từ tối ngày thứ hai, bảo đừng ai làm phiền để cậu ta ngủ…”' }
      ] },
    { id: 'mainland', name: 'Đất liền — Nhà mục sư & Bờ biển', icon: '⛪',
      desc: 'Cuộc điều tra song song của bạn và Shimada Kiyoshi ở đất liền.',
      points: [
        { id: 'p_letter', name: 'Phong bì thư ký tên Nakamura Seiji', clue: 'c_mainland_letter',
          text: 'Không có tem hay dấu bưu cục. Bức thư được chính tay ai đó bỏ vào hòm thư ở đất liền vào đêm ngày thứ ba!' },
        { id: 'p_chiori', name: 'Hồ sơ vụ tử vong của Chiori 1 năm trước', clue: 'c_chiori_past',
          text: 'Chiori chết trong trại hè năm ngoái vì bị ép uống rượu mạnh. Các thành viên câu lạc bộ đã thống nhất giữ kín chuyện ép rượu.' },
        { id: 'p_pastor', name: 'Kỷ vật của Chiori tại nhà mục sư', clue: 'c_chiori_lover',
          text: 'Một cuốn sổ nhỏ ép hoa khô: “Anh M. hứa sẽ đưa em ra đảo Tsunojima của bố vào mùa xuân…” Trong câu lạc bộ chỉ có Morisu (Van) có tên thật bắt đầu bằng chữ M!' },
        { id: 'p_beach', name: 'Chiếc chai thủy tinh dạt vào bãi cát', clue: 'c_bottle_message',
          text: 'Mảnh giấy viết tay nằm trong chai rượu dạt vào bờ, như lời thú tội cuối cùng của kẻ sát nhân.' }
      ] }
  ],
  suspects: [
    { id: 'kosuke', name: 'Mục sư Nakamura Kosuke', age: 46, avatar: '紅', color: '#6d597a',
      role: 'Em trai của kiến trúc sư Nakamura Seiji · Chú ruột của Chiori',
      bio: 'Sống ẩn dật tại nhà thờ nhỏ trên đất liền. Sau cái chết của cháu gái Chiori và anh trai Seiji, ông suy sụp nặng.',
      intro: 'Mục sư Kosuke chắp tay trước ngực. “Đảo Tsunojima là nơi bị nguyền rủa ngay từ ngày anh trai tôi đặt viên gạch đầu tiên.”',
      topics: [
        { id: 't_seiji', label: 'Về anh trai Nakamura Seiji', lines: [
          ['them', 'Anh Seiji yêu con bé Chiori hơn mạng sống. Khi Chiori mất đột ngột năm ngoái, anh ấy gần như hóa điên và tự nhốt mình ngoài đảo.'],
          ['me', 'Ông có nghĩ anh trai ông vẫn còn sống trên đảo không?'],
          ['them', 'Tôi đã nhận diện chiếc nhẫn cưới trên thi thể cháy đen của anh ấy 6 tháng trước. Anh tôi đã chết thật rồi.'] ] },
        { id: 't_chiori_bf', label: 'Bạn trai của Chiori là ai?', lines: [
          ['them', 'Con bé kín tiếng lắm. Nó chỉ kể với tôi là cậu ấy học cùng Câu lạc bộ Trinh thám, tính tình trầm lặng nhưng rất thương nó.'] ] }
      ],
      presents: {
        c_chiori_lover: { lines: [
          ['me', 'Chữ “M” trong nhật ký của Chiori chính là Morisu — cậu sinh viên có biệt danh Van Dine trên đảo.'],
          ['them', 'Morisu… Tôi nhớ cậu sinh viên ấy! Trong đám tang Chiori, khi đám bạn kia chỉ lo nói chuyện phiếm thì cậu ấy đứng dưới mưa nhìn di ảnh con bé suốt ba tiếng đồng hồ!'] ] },
        c_mainland_letter: { lines: [
          ['them', 'Nét chữ in ghép này không phải của anh Seiji. Ai đó đã mượn danh anh tôi để phán xét bọn họ.'] ] }
      },
      defaultPresent: 'Mục sư Kosuke lắc đầu buồn bã. “Tôi chỉ biết cầu nguyện cho linh hồn chúng.”'
    },
    { id: 'morisu', name: 'Morisu — biệt danh “Van Dine”', age: 21, avatar: '守', color: '#355070',
      role: 'Thành viên Câu lạc bộ Trinh thám · Đối tượng nghi vấn trong hồ sơ',
      bio: 'Trầm lặng, ít nói nhất trong nhóm 7 sinh viên ra đảo. Là người duy nhất có chìa khóa kho thuyền cũ của gia đình.',
      intro: 'Bạn và Shimada đối diện với Morisu bên bờ biển khi chiếc chai thủy tinh trôi dạt vào bờ.',
      topics: [
        { id: 't_island', label: 'Chuyện gì đã xảy ra trên đảo?', lines: [
          ['them', 'Tất cả bọn họ… đều nghĩ bóng ma của Nakamura Seiji đang săn lùng từng người một trong tòa nhà mười cạnh đó.'],
          ['partner', 'Không có bóng ma nào cả, Morisu-kun. Chính cậu đã tạo ra bóng ma đó.'] ] },
        { id: 't_chiori_m', label: 'Về cái chết của Chiori một năm trước', lines: [
          ['them', 'Tối hôm đó tôi bị ốm nên không dự tiệc. Hôm sau đến nơi thì Chiori đã lạnh ngắt… còn Ellery, Carr, Poe và Agatha chỉ bàn nhau cách giấu vỏ chai rượu để khỏi bị nhà trường kỷ luật!'] ] }
      ],
      presents: {
        c_cup_handle: { lines: [
          ['me', 'Chiếc cốc thập giác có quai ở góc cạnh — cậu đã giữ chiếc cốc đó cho riêng mình để không bao giờ uống nhầm thuốc độc.'],
          ['them', '…Ông Nakamura Seiji rất thích những trò đố hình học. Tôi chỉ tận dụng thứ ông ấy để lại.'] ] },
        c_rubber_dinghy: { lines: [
          ['me', 'Cậu giả ốm nằm trong phòng khóa kín, rồi dùng xuồng cao su vượt biển về đất liền bỏ thư tố cáo để tạo cảm giác hung thủ ở đất liền và trên đảo là hai người khác nhau!'],
          ['narr', 'Morisu ngước nhìn bầu trời xám xịt trên mặt biển.'],
          ['them', 'Tôi muốn các người ở đất liền tin rằng Nakamura Seiji vẫn còn sống.'] ] },
        c_bottle_message: { lines: [
          ['partner', 'Cậu thả chiếc chai thú tội xuống biển, chờ xem nó có trôi vào bờ hay không — để giao phó phán quyết cuối cùng cho số phận.'],
          ['them', 'Chiori đã đợi tôi ở bờ biển này. Giờ thì mọi chuyện kết thúc thật rồi.'] ] }
      },
      defaultPresent: 'Morisu nhìn ra khơi xa, không đáp lời.'
    }
  ],
  combos: [
    { a: 'c_gardener_corpse', b: 'c_seven_plaques', result: 'i_no_outsider' },
    { a: 'c_carr_cyanide', b: 'c_cup_handle', result: 'i_cup_trick' },
    { a: 'c_mainland_letter', b: 'c_rubber_dinghy', result: 'i_two_worlds_bridge' },
    { a: 'c_van_alibi_fake', b: 'c_rubber_dinghy', result: 'i_two_worlds_bridge' },
    { a: 'i_two_worlds_bridge', b: 'c_chiori_lover', result: 'i_van_mastermind' },
    { a: 'i_cup_trick', b: 'c_chiori_lover', result: 'i_van_mastermind' }
  ],
  hints: [
    { until: 'i_no_outsider', text: 'Ai cũng sợ bóng ma của Nakamura Seiji hoặc người làm vườn mất tích. Hãy kiểm tra hầm chứa củi của Biệt thự Xanh rồi ghép với 7 tấm bảng gỗ.' },
    { until: 'i_cup_trick', text: 'Chất độc nằm ở đáy cốc chứ không phải trong bình cà phê. Hãy soi kỹ mảnh vỡ bộ 10 chiếc cốc thập giác ở sảnh chính.' },
    { until: 'c_rubber_dinghy', text: 'Sau khi biết không có người thứ tám trên đảo, hãy tìm ở ghềnh đá phía Tây xem làm cách nào một người có thể rời đảo.' },
    { until: 'i_two_worlds_bridge', text: 'Bức thư ở đất liền được bỏ vào hòm thư tối ngày thứ ba. Hãy kết hợp bức thư (hoặc màn giả ốm của Van) với chiếc xuồng cao su!' },
    { until: 'i_van_mastermind', text: 'Ai trong nhóm 7 sinh viên là người yêu bí mật chữ “M” của Chiori và có động cơ trả thù cả câu lạc bộ?' }
  ],
  finalHint: 'Mê cung mười cạnh đã lộ toàn bộ góc khuất. Hãy đến Bảng suy luận, Kawaminami-kun.',
  questions: [
    { id: 'q1', q: 'Sự thật về “bóng ma Nakamura Seiji” và người làm vườn mất tích trên đảo là gì?',
      options: ['Kiến trúc sư Nakamura Seiji còn sống và ẩn náu dưới tầng hầm', 'Người làm vườn là hung thủ thật sự', 'Cả hai đều đã chết từ 6 tháng trước — không có bất kỳ “người thứ tám” nào trên đảo, hung thủ là một trong 7 sinh viên', 'Mục sư Kosuke cải trang lên đảo'],
      answer: 2, support: ['i_no_outsider', 'c_gardener_corpse'] },
    { id: 'q2', q: 'Bằng cách nào hung thủ đầu độc Carr bằng cốc cà phê mà không sợ chính mình uống nhầm cốc có độc?',
      options: ['Hung thủ nhịn không uống cà phê hôm đó', 'Trong bộ 10 chiếc cốc thập giác có duy nhất 1 chiếc gắn quai ở góc nối hai cạnh — hung thủ giữ chiếc cốc đó cho mình và bôi sẵn độc vào cốc thường', 'Hung thủ bỏ độc vào đường viên sau khi rót', 'Carr tự uống thuốc độc'],
      answer: 1, support: ['i_cup_trick', 'c_cup_handle', 'c_carr_cyanide'] },
    { id: 'q3', q: 'Vì sao bức thư tố cáo lại xuất hiện ở hòm thư đất liền vào tối ngày thứ ba khi cả 7 sinh viên đang ở trên đảo?',
      options: ['Hung thủ thuê người giao thư hẹn giờ', 'Bưu điện giao trễ 3 ngày', 'Hung thủ trên đảo giả ốm nằm liệt giường trong phòng tối, rồi dùng xuồng cao su vượt biển về đất liền trong đêm để bỏ thư', 'Shimada Kiyoshi là đồng phạm'],
      answer: 2, support: ['i_two_worlds_bridge', 'c_rubber_dinghy', 'c_mainland_letter', 'c_van_alibi_fake'] },
    { id: 'q4', q: 'Mục đích thực sự của việc chặt bàn tay trái của nạn nhân đầu tiên (Orczy) là gì?',
      options: ['Thực hiện nghi lễ hiến tế', 'Gây hoảng loạn tâm lý, đánh lạc hướng rằng đây là tội ác của kẻ điên và che giấu việc hung thủ lấy đồ trang điểm từ phòng Orczy để gài bẫy thỏi son độc cho Agatha', 'Để mở khóa vân tay hầm bí mật', 'Vì Orczy nắm giữ mảnh áo của hung thủ'],
      answer: 1, support: ['c_ring_hand', 'c_agatha_lipstick', 'c_orczy_body'] },
    { id: 'q5', q: 'Hung thủ thực sự đứng sau toàn bộ thảm kịch Biệt thự Thập Giác là ai?',
      options: ['Ellery', 'Poe', 'Morisu — biệt danh “Van Dine”', 'Mục sư Nakamura Kosuke'],
      answer: 2, support: ['i_van_mastermind', 'c_chiori_lover', 'i_two_worlds_bridge'] },
    { id: 'q6', q: 'Động cơ của Morisu (Van Dine) là gì?',
      options: ['Độc chiếm kho báu của kiến trúc sư Nakamura Seiji', 'Trả thù cho người yêu bí mật là Nakamura Chiori — người đã tử vong năm trước vì bị các thành viên câu lạc bộ ép uống rượu rồi rủ nhau bưng bít', 'Muốn viết một cuốn tiểu thuyết trinh thám hoàn hảo', 'Do tranh chấp chức chủ nhiệm câu lạc bộ'],
      answer: 1, support: ['i_van_mastermind', 'c_chiori_lover', 'c_chiori_past'] }
  ],
  truth: [
    'Một năm trước, Nakamura Chiori — con gái kiến trúc sư Nakamura Seiji và là người yêu bí mật của Morisu (biệt danh Van Dine) — tử vong vì bị các thành viên trong Câu lạc bộ Trinh thám ép uống rượu quá mức rồi lạnh lùng che giấu sự thật.',
    'Khi cha mẹ Chiori bị sát hại trên đảo Tsunojima nửa năm sau đó, Morisu quyết định biến chính Biệt thự Thập Giác thành pháp trường phán xét những kẻ đã đẩy Chiori vào chỗ chết.',
    'Trên đảo, Morisu bày ra 7 tấm thẻ gỗ và lợi dụng nỗi sợ về “bóng ma Nakamura Seiji” để các thành viên tự nghi ngờ lẫn nhau. Cậu ta dùng thiết kế đặc biệt của bộ cốc mười cạnh (9 cốc quai phẳng, 1 cốc quai góc) để đầu độc Carr, lấy đồ trang điểm của Orczy để tẩm độc vào son môi của Agatha, và dụ Leroux ra vách đá.',
    'Táo bạo hơn cả: tối ngày thứ hai và thứ ba, Morisu giả ốm nằm trùm chăn trong phòng khóa kín, rồi lặng lẽ chui qua cửa sổ ra ghềnh đá phía Tây, lái xuồng cao su vượt biển về đất liền để bỏ các bức thư ký tên “Nakamura Seiji” vào hòm thư của các cựu thành viên — tạo nên ảo giác hoàn hảo rằng kẻ gửi thư ở đất liền và các nạn nhân trên đảo không thể là cùng một người.',
    'Đêm cuối cùng, sau khi hạ độc Poe và Ellery rồi phóng hỏa Biệt thự Thập Giác để ngụy tạo rằng cả “Van” cũng đã chết cháy trên đảo, Morisu quay về đất liền. Chỉ đến khi chiếc chai thủy tinh chứa lời thú tội mà cậu thả phó mặc cho sóng biển trôi dạt vào đúng chân Shimada và Kawaminami, toàn bộ sự thật chấn động của Thập Giác Đài mới được phơi bày.'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Tội ác ở Thập Giác Đài” (十角館の殺人, 1987) của Ayatsuji Yukito — tác phẩm mở đầu cho kỷ nguyên Shin-Honkaku (Tân Bản Cách) của văn học trinh thám Nhật Bản hiện đại.'
});
