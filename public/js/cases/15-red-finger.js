/* =========================================================================
 * VỤ ÁN 15 — NGÓN TAY ĐỎ
 * Phỏng theo 赤い指 (Akai Yubi, 2006) — Higashino Keigo
 * Series Kaga Kyoichiro
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'red-finger',
  order: 15,
  collection: 'keigo',
  author: 'Higashino Keigo',
  title: 'Ngón Tay Đỏ',
  original: '赤い指 · 2006 · Series Kaga Kyoichiro',
  kanji: '指',
  theme: { a: '#240b15', b: '#9f1239', accent: '#fb7185' },
  difficulty: 4,
  par: 34,
  tagline: 'Trong ngôi nhà tưởng như bình thường ấy, ai mới là kẻ mất trí nhớ và ai là người tỉnh táo đến rơi nước mắt?',
  playerRole: 'Bạn là Matsumiya Shuhei — điều tra viên trẻ của Sở Cảnh sát Tokyo, sát cánh cùng người anh họ là Thanh tra Kaga Kyoichiro.',
  partner: {
    name: 'Kaga Kyoichiro',
    title: 'Thanh tra Cảnh sát — Bậc thầy đọc vị tâm lý gia đình',
    avatar: '加',
    color: '#9f1239'
  },
  briefing: [
    'Chiều mưa cuối thu tại một khu dân cư yên tĩnh ngoại ô Tokyo, thi thể bé gái tiểu học 7 tuổi Kasugaoka Yuka được phát hiện trong nhà vệ sinh công viên. Cô bé bị siết cổ tử vong, và kỳ lạ thay: trên ngón trỏ bàn tay phải của thi thể có quệt một vệt son môi màu đỏ tươi.',
    'Lần theo dấu vết quanh công viên, bạn và Thanh tra Kaga Kyoichiro tìm đến ngôi nhà của nhân viên văn phòng Maehara Akio (47 tuổi), nơi anh ta sống cùng người vợ Yaeko, cậu con trai 14 tuổi trầm cảm nghiện game Naoki và người mẹ già 74 tuổi đang mắc chứng lú lẫn tuổi già (Alzheimer) — bà Maehara Masako.',
    'Khi bị cảnh sát triệu tập, Maehara Akio đau khổ “thú nhận” rằng chính người mẹ già mất trí nhớ của mình (bà Masako) đã bóp cổ bé Yuka trong lúc lú lẫn rồi bôi thỏi son đỏ của bà lên tay đứa trẻ, còn anh ta vì thương mẹ nên chỉ mang xác ra công viên giấu!',
    'Theo luật pháp, một người già mắc chứng mất trí nhớ nặng sẽ không phải chịu trách nhiệm hình sự. Thế nhưng Kaga Kyoichiro chỉ nhìn vào chiếc ví tiền xu và đôi mắt của bà lão Masako rồi nói nhỏ với bạn: “Matsumiya này, ngón tay đỏ ấy không phải là dấu vết của sự điên loạn — mà là bản cáo trạng đau đớn nhất của một người mẹ.”'
  ],
  clues: {
    c_red_finger_corpse: { title: 'Vệt son đỏ trên ngón trỏ của thi thể bé Yuka', icon: '💄', type: 'evidence',
      desc: 'Trên ngón trỏ tay phải của bé Yuka có bôi một vệt son môi màu đỏ cổ điển. Tại nhà Maehara, Akio cố tình để lộ thỏi son cùng loại trên bàn của bà nội Masako để hướng cảnh sát kết luận bà lão lú lẫn là hung thủ.' },
    c_wheelbarrow_tracks: { title: 'Vết bánh xe đẩy làm vườn & Bao tải nhựa trong kho', icon: '🛒', type: 'evidence',
      desc: 'Con hẻm nối từ vườn sau nhà Maehara ra công viên có vết lún sâu của xe cút kít một bánh chở vật nặng 24kg — chứng minh một người đàn ông trưởng thành như Akio đã chở thi thể bé gái đi phi tang trong đêm mưa.' },
    c_anime_figure: { title: 'Mô hình Anime rơi dưới cống & Phòng của Naoki', icon: '🎮', type: 'evidence',
      desc: 'Bạn bè của bé Yuka khai cô bé đi theo một nam sinh lớn tuổi để xin mô hình hoạt hình. Dưới rãnh thoát nước trước cửa nhà Maehara có một mô hình Anime bị gãy khớp hoàn toàn với bộ sưu tập trong phòng cậu con trai 14 tuổi Maehara Naoki — trên đó có vân tay của cả Naoki và bé Yuka!' },
    c_akio_confession_gap: { title: 'Sự lúng túng của Akio về thời điểm bôi son đỏ', icon: '😰', type: 'testimony',
      desc: 'Khi Kaga hỏi xoáy Akio rằng “Vệt son đỏ nằm ở ngón tay nào của nạn nhân và bôi lúc nào?”, Akio ấp úng trả lời sai chi tiết — bởi chính Akio cũng KHÔNG HỀ BIẾT trên tay cái xác có vết son đỏ cho đến khi đọc báo và vội vàng lấy thỏi son của mẹ bày ra bàn!' },
    c_grandma_coins: { title: 'Cách đếm tiền xu lẻ chính xác tuyệt đối của bà Masako', icon: '👛', type: 'evidence',
      desc: 'Khi Kaga đưa bà cụ Masako đi ăn chè đậu đỏ với hóa đơn 368 yên, bà lão “bị Alzheimer nặng” đã rút tờ 500 yên kèm đúng 18 yên tiền xu lẻ (1 đồng 10 yên, 1 đồng 5 yên, 3 đồng 1 yên) để nhận lại chẵn 150 yên tiền thừa!' },
    c_sister_harumi_truth: { title: 'Lời kể của người chị gái Harumi về người mẹ già', icon: '🍵', type: 'testimony',
      desc: 'Chị gái của Akio là bà Harumi tiết lộ với Kaga: Bà Masako hoàn toàn minh mẫn! Từ mùa xuân năm nay, vì con dâu Yaeko đòi tống bà vào viện dưỡng lão và vì muốn ở lại canh chừng thằng cháu nội Naoki đang bị cha mẹ chiều hư, bà cụ mới cố tình giả vờ lú lẫn!' },
    c_garden_shed_lipstick: { title: 'Dấu vân tay của bà Masako trên bao tải trong vườn', icon: '🩸', type: 'evidence',
      desc: 'Đêm xảy ra án mạng, khi vợ chồng Akio giấu xác bé Yuka trong bao tải ngoài vườn chờ đêm khuya mang đi vứt, chính bà Masako đã lặng lẽ bước ra vườn, mở bao tải và TỰ TAY bôi thỏi son đỏ của mình lên ngón tay đứa bé!' },
    c_kaga_father_lesson: { title: 'Nước cờ cuối cùng trên bàn cờ Shogi của cha Kaga', icon: '♟️', type: 'testimony',
      desc: 'Người cha quá cố của Kaga từng dạy anh qua bàn cờ Shogi: “Khi một người mẹ cố tình tự nhận lấy nước cờ thua về mình, đó là lúc bà ấy đang mở đường sống duy nhất cho lương tâm của đứa con trai.”' },

    i_son_true_killer: { title: 'Cậu con trai Naoki giết người, cha mẹ đổ tội cho bà nội', icon: '🧩', type: 'insight',
      desc: 'Hung thủ thực sự sát hại bé Yuka là cậu con trai 14 tuổi Maehara Naoki. Vợ chồng Akio – Yaeko vì nuông chiều con mù quáng đã mang xác đi vứt, rồi nhẫn tâm lập mưu đổ tội giết người cho người mẹ già 74 tuổi bị cho là mất trí nhớ!' },
    i_grandma_not_senile: { title: 'Bà nội Masako hoàn toàn tỉnh táo, chỉ giả vờ lú lẫn', icon: '🧩', type: 'insight',
      desc: 'Khả năng tính nhẩm tiền xu phức tạp và lời khai của người con gái Harumi chứng minh bà Masako không hề bị Alzheimer. Bà đã chứng kiến toàn bộ tội ác của cháu nội và sự hèn nhát đến tàn nhẫn của vợ chồng con trai Akio.' },
    i_red_finger_message: { title: 'Ý nghĩa thật sự của “Ngón Tay Đỏ”', icon: '🧩', type: 'insight',
      desc: 'Chính bà Masako đã chủ động bôi son đỏ của mình lên ngón tay nạn nhân trước khi Akio mang xác đi vứt! Bà làm vậy để buộc cảnh sát phải tìm đến ngôi nhà này, đồng thời đặt con trai Akio trước bài kiểm tra nhân tính cuối cùng: hoặc quỳ xuống thú nhận sự thật, hoặc nhẫn tâm đẩy mẹ ruột vào địa ngục!' }
  },
  locations: [
    { id: 'park', name: 'Nhà vệ sinh Công viên & Hẻm sau', icon: '🌧️',
      desc: 'Hiện trường nơi phát hiện thi thể bé gái Kasugaoka Yuka trong cơn mưa chiều.',
      points: [
        { id: 'p_corpse', name: 'Ngón tay trỏ nhuộm son đỏ trên thi thể', clue: 'c_red_finger_corpse',
          text: 'Kaga cúi nhìn bàn tay nhỏ bé của nạn nhân: “Một vệt son môi màu đỏ tươi quệt dọc ngón trỏ tay phải. Đây không phải hành vi của kẻ biến thái, mà giống như một ký hiệu để lại cho cảnh sát.”' },
        { id: 'p_tracks', name: 'Dấu bánh xe cút kít dọc con hẻm bùn', clue: 'c_wheelbarrow_tracks',
          text: 'Vết bánh xe đẩy làm vườn lún sâu nối thẳng từ cổng sau nhà họ Maehara ra bậc tam cấp công viên.' }
      ] },
    { id: 'maehara_house', name: 'Ngôi nhà gia đình họ Maehara', icon: '🏡',
      desc: 'Ngôi nhà hai tầng bề ngoài êm ấm của vợ chồng Maehara Akio, cậu con trai Naoki và bà nội Masako.',
      points: [
        { id: 'p_drain', name: 'Rãnh thoát nước & Phòng của Naoki', clue: 'c_anime_figure',
          text: 'Bạn tìm thấy một mô hình Anime bị gãy giấu dưới cống thoát nước trước nhà — trùng khớp với bộ sưu tập trên kệ của cậu con trai 14 tuổi Naoki và có dấu vân tay của nạn nhân!' },
        { id: 'p_akio_lie', name: 'Chất vấn Akio về chi tiết vết son đỏ', clue: 'c_akio_confession_gap', requires: ['c_red_finger_corpse'],
          text: 'Khi bị hỏi vệt son bôi ở ngón tay nào, Akio đoán mò là ngón út — chứng tỏ hắn không hề biết trên xác có vết son cho đến khi cảnh sát phát hiện!' },
        { id: 'p_shed', name: 'Kiểm tra tấm bạt trong kho sân vườn', clue: 'c_garden_shed_lipstick', requires: ['i_grandma_not_senile', 'c_akio_confession_gap'],
          text: 'Trên mép bao tải trong vườn có dấu vân tay của bà Masako và vết son đỏ rơi vãi: chính bà cụ đã lén mở bao tải và quệt son lên ngón tay đứa bé trước khi Akio chở xác ra công viên!' }
      ] },
    { id: 'sweet_shop', name: 'Quán chè truyền thống & Nhà cô Harumi', icon: '🍵',
      desc: 'Nơi Thanh tra Kaga Kyoichiro âm thầm quan sát bà cụ Masako và trò chuyện với người con gái lớn.',
      points: [
        { id: 'p_purse', name: 'Quan sát chiếc ví tiền xu của bà Masako', clue: 'c_grandma_coins',
          text: 'Để trả 368 yên, bà lão “mất trí nhớ” rút tờ 500 yên cùng 18 yên tiền xu lẻ để nhận lại đúng 150 yên chẵn. Kaga khẽ mỉm cười: “Một bộ não tính nhẩm nhanh hơn cả thanh tra cảnh sát đấy Matsumiya ạ.”' },
        { id: 'p_harumi', name: 'Cuộc trò chuyện với chị gái Harumi', clue: 'c_sister_harumi_truth',
          text: 'Bà Harumi lau nước mắt: “Mẹ tôi không hề bị lú lẫn đâu! Bà chỉ đóng kịch từ mùa xuân vì sợ vợ thằng Akio tống bà vào trại dưỡng lão thôi!”' },
        { id: 'p_shogi', name: 'Bàn cờ Shogi kỷ niệm của cha Kaga', clue: 'c_kaga_father_lesson',
          text: 'Kaga nhớ lại lời người cha quá cố về tình mẫu tử: có những bậc cha mẹ sẵn sàng tự biến mình thành kẻ tội đồ để thức tỉnh đứa con lầm lạc.' }
      ] }
  ],
  suspects: [
    { id: 'akio', name: 'Maehara Akio', age: 47, avatar: '昭', color: '#334155',
      role: 'Nhân viên văn phòng · Người cha hèn nhát của Naoki',
      bio: 'Luôn trốn tránh trách nhiệm dạy con, giao phó mọi việc trong nhà cho vợ rồi nhẫn tâm đẩy tội giết người cho mẹ ruột khi tai họa ập đến.',
      intro: 'Maehara Akio ngồi co rúm trên ghế sofa, mồ hôi ướt đẫm cổ áo sơ mi.',
      topics: [
        { id: 't_mother', label: 'Lời cáo buộc người mẹ già 74 tuổi', lines: [
          ['them', 'Tôi… tôi thực sự không muốn nói ra điều này, nhưng mẹ tôi bị bệnh Alzheimer nặng lắm. Hôm đó tôi về nhà thì thấy mẹ tôi đã bóp cổ đứa bé rồi lấy son môi bôi lên tay nó như chơi búp bê…'],
          ['partner', 'Và vì thương mẹ nên ông mới dùng xe đẩy chở xác đứa bé ra công viên vứt ư, ông Maehara?'],
          ['them', 'Vâng! Pháp luật sẽ khoan hồng cho một bà lão mất trí nhớ mà, phải không thanh tra?!'] ] }
      ],
      presents: {
        i_son_true_killer: { lines: [
          ['me', 'Đừng đóng kịch nữa ông Maehara! Mô hình Anime dưới cống có vân tay của bé Yuka và con trai Naoki của ông. Chính Naoki đã sát hại cô bé, còn vợ chồng ông dựng hiện trường giả để đổ tội cho bà nội!'],
          ['them', 'Không…! Thằng Naoki mới 14 tuổi, nếu nó vào trại giáo dưỡng thì cuộc đời nó coi như chấm hết! Còn mẹ tôi thì đằng nào cũng chẳng nhớ gì nữa mà…!'] ] },
        i_red_finger_message: { lines: [
          ['partner', 'Ông tưởng mẹ ông không biết gì ư, ông Akio? Bà Masako hoàn toàn tỉnh táo! Chính bà ấy đã lén mở bao tải ngoài vườn và tự tay bôi thỏi son đỏ của mình lên ngón tay đứa bé trước khi ông mang xác đi vứt!'],
          ['me', 'Bà ấy cố tình để lại “Ngón tay đỏ” để kéo cảnh sát tới ngôi nhà này và cho ông cơ hội cuối cùng để làm một con người — vậy mà ông lại nhẫn tâm đẩy mẹ ruột xuống bùn đen!'],
          ['narr', 'Maehara Akio chết lặng như bị sét đánh, rồi đổ sụp xuống sàn nhà gào khóc trong sự hối hận tột cùng.'],
          ['them', 'Mẹ ơi…! Con xin lỗi mẹ… Chính con và thằng Naoki mới là kẻ có tội!'] ] }
      },
      defaultPresent: 'Akio cúi gằm mặt tránh ánh mắt của Kaga.'
    },
    { id: 'yaeko', name: 'Maehara Yaeko', age: 43, avatar: '八', color: '#be185d',
      role: 'Vợ của Akio · Người mẹ nuông chiều con mù quáng',
      bio: 'Coi cậu con trai Naoki là trung tâm vũ trụ, ghét bỏ mẹ chồng và là người đầu tiên xúi giục chồng đổ tội cho bà cụ.',
      intro: 'Bà Yaeko đứng chắn trước cửa phòng con trai Naoki với vẻ mặt phòng thủ dữ tợn.',
      topics: [
        { id: 't_naoki', label: 'Về cậu con trai Naoki', lines: [
          ['them', 'Thằng Naoki nhà tôi chỉ hơi nhút nhát thôi! Tất cả là tại bà già lú lẫn kia gây ra hết!'] ] }
      ],
      presents: {
        c_anime_figure: { lines: [
          ['me', 'Chính sự bao bọc mù quáng của bà đã biến Naoki thành kẻ giết người rồi trốn sau lưng cha mẹ và bà nội đấy, bà Yaeko!'],
          ['them', 'Tôi… tôi chỉ muốn bảo vệ con tôi thôi mà…!'] ] }
      },
      defaultPresent: 'Bà Yaeko quay mặt đi không nói.'
    },
    { id: 'masako', name: 'Maehara Masako', age: 74, avatar: '政', color: '#701a75',
      role: 'Người mẹ già 74 tuổi · “Bệnh nhân mất trí nhớ”',
      bio: 'Một người mẹ tần tảo nuôi lớn hai con sau khi chồng mất sớm. Bà đã chọn cách đau đớn nhất để cứu lấy phần người trong gia đình con trai.',
      intro: 'Bà cụ Masako ngồi lặng lẽ bên hiên nhà, đôi mắt nhìn xa xăm vào màn mưa.',
      topics: [
        { id: 't_memory', label: 'Hỏi thăm sức khỏe bà cụ', lines: [
          ['them', 'Các chú là bạn của thằng Akio à… Thằng Akio nhà tôi hồi nhỏ ngoan và trung thực lắm đấy…'] ] }
      ],
      presents: {
        i_grandma_not_senile: { lines: [
          ['partner', 'Bà Masako, món chè đậu đỏ hôm qua ngon lắm. Và cách bà tính nhẩm 18 yên tiền xu lẻ cũng thật tuyệt vời. Bà không cần phải giả vờ lú lẫn trước mặt cháu nữa đâu.'],
          ['narr', 'Đôi mắt đục mờ của bà cụ Masako bỗng ánh lên vẻ minh mẫn và trào dâng hai hàng nước mắt.'],
          ['them', 'Cậu thanh tra tinh tế quá… Tôi đã già rồi, chỉ mong trước khi nhắm mắt được thấy thằng Akio dũng cảm nhận lỗi như ngày nó còn thơ bé.'] ] }
      },
      defaultPresent: 'Bà cụ Masako chỉ mỉm cười hiền hậu.'
    }
  ],
  combos: [
    { a: 'c_wheelbarrow_tracks', b: 'c_anime_figure', result: 'i_son_true_killer' },
    { a: 'c_grandma_coins', b: 'c_sister_harumi_truth', result: 'i_grandma_not_senile' },
    { a: 'c_red_finger_corpse', b: 'c_garden_shed_lipstick', result: 'i_red_finger_message' },
    { a: 'i_grandma_not_senile', b: 'c_garden_shed_lipstick', result: 'i_red_finger_message' }
  ],
  hints: [
    { until: 'i_son_true_killer', text: 'Ai mới là kẻ sát hại bé Yuka và ai chở xác ra công viên? Hãy kết hợp Dấu bánh xe cút kít với Mô hình Anime dưới cống!' },
    { until: 'i_grandma_not_senile', text: 'Bà nội Masako có thực sự bị bệnh Alzheimer không? Hãy ghép Cách đếm tiền xu lẻ của bà cụ với Lời kể của người chị gái Harumi.' },
    { until: 'c_garden_shed_lipstick', text: 'Sau khi biết bà Masako hoàn toàn tỉnh táo và Akio không biết chi tiết vết son đỏ, hãy kiểm tra Kho sân vườn nhà Maehara!' },
    { until: 'i_red_finger_message', text: 'Vì sao trên tay nạn nhân lại có vệt son đỏ? Hãy kết hợp Vệt son đỏ trên thi thể (hoặc việc Bà Masako tỉnh táo) với Dấu vân tay của bà trên bao tải trong vườn!' }
  ],
  finalHint: 'Bí mật bi thương của “Ngón Tay Đỏ” đã sáng tỏ. Hãy bước tới Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Hung thủ thực sự sát hại bé Kasugaoka Yuka và người vận chuyển thi thể ra công viên là ai?',
      options: [
        'Bà nội Maehara Masako gây án trong cơn lú lẫn, còn Akio mang xác đi giấu',
        'Cậu con trai 14 tuổi Maehara Naoki sát hại bé Yuka trong phòng riêng; sau đó người cha Maehara Akio dùng xe đẩy làm vườn chở thi thể ra nhà vệ sinh công viên phi tang rồi bàn với vợ đổ tội cho người mẹ già',
        'Người vợ Maehara Yaeko một mình thực hiện toàn bộ vụ án',
        'Một kẻ lạ mặt đột nhập vào vườn nhà Maehara'
      ],
      answer: 1, support: ['i_son_true_killer', 'c_anime_figure', 'c_wheelbarrow_tracks'] },
    { id: 'q2', q: 'Sự thật về căn bệnh lú lẫn tuổi già (Alzheimer) của bà cụ Maehara Masako là gì?',
      options: [
        'Bà bị mất trí nhớ thật sự nên không nhận thức được hành vi của mình',
        'Bà hoàn toàn tỉnh táo và minh mẫn (được Kaga phát hiện qua cách tính nhẩm tiền xu lẻ), nhưng đã giả vờ lú lẫn từ vài tháng trước để không bị con dâu đuổi vào viện dưỡng lão và âm thầm quan sát gia đình con trai',
        'Bà bị vợ chồng Akio đầu độc bằng thuốc an thần mỗi ngày',
        'Bà chỉ mất trí nhớ vào ban đêm'
      ],
      answer: 1, support: ['i_grandma_not_senile', 'c_grandma_coins', 'c_sister_harumi_truth'] },
    { id: 'q3', q: 'Ai là người đã bôi vệt son môi màu đỏ lên ngón tay của thi thể bé Yuka và với mục đích gì?',
      options: [
        'Maehara Akio tự bôi son của mẹ lên xác nạn nhân ngay từ đầu để vu khống mẹ ruột',
        'Cậu con trai Naoki bôi son để đánh lạc hướng cảnh sát',
        'Chính bà nội Masako đã lén mở bao tải trong vườn và tự tay bôi thỏi son đỏ của mình lên ngón tay nạn nhân trước khi Akio mang xác đi vứt — nhằm cố tình dẫn cảnh sát đến nhà mình và buộc con trai Akio phải đối diện với lương tâm!',
        'Bé Yuka tự nghịch thỏi son trước khi chết'
      ],
      answer: 2, support: ['i_red_finger_message', 'c_garden_shed_lipstick', 'c_akio_confession_gap'] }
  ],
  truth: [
    'Khi về nhà và phát hiện cậu con trai 14 tuổi Naoki vừa sát hại bé gái hàng xóm Yuka, vợ chồng Maehara Akio – Yaeko thay vì đưa con đi đầu thú đã chọn cách hèn nhát và tàn nhẫn nhất: dùng xe đẩy chở xác bé gái ra công viên phi tang, rồi dựng kịch bản đổ toàn bộ tội giết người cho người mẹ già 74 tuổi bị cho là mất trí nhớ (bà Masako).',
    'Khi cảnh sát phát hiện vệt son đỏ trên ngón tay nạn nhân, Akio vội vã lấy thỏi son của mẹ bày ra bàn và mừng thầm rằng pháp luật sẽ không bỏ tù một người già bị Alzheimer.',
    'Thế nhưng Thanh tra Kaga Kyoichiro đã nhìn thấu tất cả: Bà Masako hoàn toàn minh mẫn! Bà chỉ giả vờ lú lẫn để được ở lại ngôi nhà của con trai. Đêm hôm đó, khi thấy vợ chồng Akio giấu xác đứa bé trong vườn, chính bà Masako đã lặng lẽ bước ra, dùng thỏi son đỏ của mình vẽ lên ngón tay bé gái.',
    '“Ngón tay đỏ” ấy vừa là dấu hiệu dẫn đường cho cảnh sát tìm đến nhà Maehara, vừa là phép thử cuối cùng mà người mẹ già dành cho đứa con trai mình dứt ruột đẻ ra. Khi biết được tấm lòng đau đớn của mẹ, Akio đã quỳ sụp xuống khóc rống lên và thú nhận toàn bộ sự thật.'
  ],
  sourceNote: 'Phỏng theo tiểu thuyết “Ngón Tay Đỏ” (赤い指, 2006) của Higashino Keigo — tác phẩm tiêu biểu nhất khắc họa chiều sâu nhân văn của hình tượng Thanh tra Kaga Kyoichiro.'
});
