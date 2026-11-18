/* =========================================================================
 * VỤ ÁN 12 — MƯỜI HAI NHÁT DAO TRÊN CHUYẾN TÀU BÃO TUYẾT
 * Phỏng theo Murder on the Orient Express (1934) — Agatha Christie
 * Bản giao hưởng suy luận bất hủ của Hercule Poirot trên toa tàu Calais.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'orient-express',
  order: 12,
  collection: 'world-classics',
  author: 'Agatha Christie',
  title: 'Mười Hai Nhát Dao Trong Bão Tuyết',
  original: 'Murder on the Orient Express · 1934 · Agatha Christie (Hercule Poirot)',
  kanji: '十二',
  theme: { a: '#131b2e', b: '#1e3a5f', accent: '#e0b354' },
  difficulty: 5,
  par: 38,
  tagline: 'Mười hai nhát dao mang lực tay trái ngược nhau, một câu tiếng Pháp của kẻ không biết ngoại ngữ, và một bồi thẩm đoàn giữa đêm tuyết.',
  playerRole: 'Bạn là Monsieur Bouc — Giám đốc Công ty Đường sắt Quốc tế Wagon-Lit, đồng hành cùng người bạn già Hercule Poirot và bác sĩ Constantine trên chuyến tàu Tốc hành Phương Đông.',
  partner: {
    name: 'Hercule Poirot',
    title: 'Thám tử người Bỉ — Hành khách khoang số 1 toa Istanbul-Calais',
    avatar: 'P',
    color: '#1e3a5f'
  },
  briefing: [
    'Đêm thứ hai trên hành trình từ Istanbul về Calais, đoàn tàu Tốc hành Phương Đông bị kẹt cứng giữa một trận bão tuyết dữ dội ở biên giới Nam Tư lúc 00:30 sáng. Không một ai có thể lên hoặc xuống khỏi toa tàu ngủ.',
    'Sáng hôm sau, doanh nhân người Mỹ Samuel Ratchett — kẻ vừa hôm qua từng đề nghị thuê Poirot bảo vệ mạng sống nhưng bị ông từ chối — được phát hiện chết cứng trên giường trong khoang số 2. Cửa khoang khóa chặt từ bên trong bằng cả chốt lẫn dây xích an toàn; cửa sổ mở toang nhưng bên ngoài lớp tuyết dày không hề có một dấu chân nào!',
    'Bác sĩ Constantine sững sờ trước thi thể: trên ngực Ratchett có đúng 12 vết đâm — có nhát sâu hoắm xuyên cả xương của một bàn tay cực khỏe, có nhát chỉ sượt qua da của một người yếu sức, có nhát đâm từ góc thuận tay phải và có cả nhát đâm của người thuận tay trái!',
    'Poirot nhìn khắp hành lang toa tàu chật kín những hành khách đến từ Anh, Mỹ, Nga, Ý, Thụy Điển, Hungary và Đức: “Mon cher Bouc, tại sao một hiện trường lại có nhiều manh mối mâu thuẫn đến thế? Trừ khi… đó không phải là tác phẩm của một người!”'
  ],
  clues: {
    c_twelve_wounds: { title: 'Mười hai vết dao kỳ dị trên thi thể', icon: '🗡️', type: 'evidence',
      desc: 'Nạn nhân bị thuốc ngủ liều mạnh trong cốc nước nên không chống cự. Trên ngực có đúng 12 nhát dao: 3 nhát rất mạnh của người thuận tay phải, 2 nhát chéo góc của người thuận tay trái, và nhiều nhát yếu ớt của phụ nữ hoặc người già.' },
    c_watch_0115: { title: 'Chiếc đồng hồ quả quýt vỡ dừng ở 01:15', icon: '⌚', type: 'evidence',
      desc: 'Trong túi ngực áo pijama của Ratchett có chiếc đồng hồ quả quýt bị đè móp dừng ở 01:15. Nhưng không ai đi ngủ lại nhét đồng hồ quả quýt nặng vào túi áo pijama khi đã có móc treo đồng hồ ngay đầu giường!' },
    c_french_voice: { title: 'Câu trả lời bằng tiếng Pháp lúc 00:37', icon: '🔔', type: 'testimony',
      desc: 'Nhân viên trưởng toa Pierre Michel khai: lúc 00:37 (ngay sau khi tàu kẹt tuyết), chuông từ khoang Ratchett reo. Khi ông gõ cửa hỏi, một giọng nói từ trong khoang đáp bằng tiếng Pháp chuẩn xác: “Không có gì đâu, tôi bấm nhầm thôi!”' },
    c_no_french: { title: 'Ratchett hoàn toàn mù tiếng Pháp', icon: '🇺🇸', type: 'testimony',
      desc: 'Thư ký riêng Hector MacQueen xác nhận: ông chủ Ratchett chỉ nói được tiếng Anh kiểu Mỹ, hoàn toàn không biết một từ tiếng Pháp nào. Vậy người nói tiếng Pháp trong khoang lúc 00:37 chính là kẻ sát nhân!' },
    c_burnt_note: { title: 'Mảnh giấy cháy dở: “DAISY ARMSTRONG”', icon: '🔥', type: 'evidence',
      desc: 'Poirot dùng lưới sắt hơ nóng mảnh giấy cháy trong gạt tàn, làm hiện lên dòng chữ: “—member little Daisy Armstrong”. Ratchett chính là tên trùm mafia Cassetti — kẻ đã bắt cóc và giết bé gái 3 tuổi Daisy Armstrong 5 năm trước rồi dùng tiền mua chuộc nhân chứng thoát tội!' },
    c_armstrong_tragedy: { title: 'Bi kịch gia đình Đại tá Armstrong', icon: '🥀', type: 'evidence',
      desc: 'Sau cái chết của bé Daisy: mẹ cô bé là Sonia Armstrong (con gái nữ diễn viên kịch Linda Arden) sinh non rồi qua đời; Đại tá Armstrong tự sát; còn cô hầu gái người Pháp Susanne nhảy lầu tự vẫn vì bị cảnh sát nghi oan.' },
    c_handkerchief_h: { title: 'Chiếc khăn tay thêu chữ “H” và Tẩu thuốc', icon: '🧣', type: 'evidence',
      desc: 'Trên sàn khoang Ratchett rơi một chiếc khăn tay voan cực đắt tiền thêu chữ “H” và một que thông tẩu thuốc của Đại tá Arbuthnot — như thể hai hung thủ khác nhau cùng đánh rơi đồ!' },
    c_cyrillic_n: { title: 'Bí mật chữ “Н” trong bảng chữ cái Nga', icon: '👑', type: 'evidence',
      desc: 'Poirot nhận ra: chữ “H” thêu trên chiếc khăn tay thực chất là chữ “Н” viết hoa trong tiếng Nga (tương đương chữ N trong tiếng Latinh) — chiếc khăn thuộc về Công nương Nga Natalia Dragomiroff, mẹ đỡ đầu của Sonia Armstrong!' },
    c_grease_passport: { title: 'Vết dầu mỡ trên hộ chiếu Bá tước phu nhân', icon: '🛂', type: 'evidence',
      desc: 'Hộ chiếu của Bá tước phu nhân Elena Andrenyi có một vết dầu mỡ mới tinh làm nhòe chữ cái đầu thành “Elena”. Tên thật chưa sửa của cô là “Helena Goldenberg” — em gái ruột của Sonia Armstrong!' },
    c_hubbard_door: { title: 'Cửa thông sang khoang số 3 của bà Hubbard', icon: '🚪', type: 'evidence',
      desc: 'Khoang số 2 của Ratchett khóa dây xích bên trong, nhưng lại có cửa thông trực tiếp sang khoang số 3 của bà Hubbard! Hung thủ đã đi ra qua khoang của bà Hubbard rồi khóa chốt lại. Và trên túi xách của bà Hubbard có giấu chính con dao găm dính máu!' },
    c_wagon_uniform: { title: 'Bộ đồng phục nhân viên đường sắt thiếu cúc', icon: '🧥', type: 'evidence',
      desc: 'Khám xét hành lý các hành khách: bộ đồng phục nhân viên đường sắt giả (bị đứt một chiếc cúc rơi ở hành lang) được giấu trong vali của cô hầu phòng người Đức Hildegarde Schmidt — cựu đầu bếp trưởng nhà Armstrong!' },
    c_cross_alibis: { title: 'Mạng lưới ngoại phạm chéo của 12 hành khách', icon: '🕸️', type: 'evidence',
      desc: 'Mỗi hành khách trên toa đều làm chứng ngoại phạm cho một người khác vào khung giờ 01:00–01:30: người Anh làm chứng cho người Mỹ, người Thụy Điển làm chứng cho người Đức, Bá tước làm chứng cho vợ mình… dù họ khai chưa từng quen biết nhau!' },
    c_linda_arden: { title: 'Thân phận thật của bà Caroline Hubbard', icon: '🎭', type: 'testimony',
      desc: 'Poirot đối chiếu giọng nói và phong thái: bà khách người Mỹ ồn ào Caroline Hubbard ở khoang số 3 chính là đại minh tinh sân khấu bi kịch Linda Arden — mẹ ruột của Sonia Armstrong và là bà ngoại của bé Daisy!' },

    i_fake_time_0115: { title: 'Thời điểm tử vong thật sự là 00:37, không phải 01:15', icon: '🧩', type: 'insight',
      desc: 'Giọng nói tiếng Pháp lúc 00:37 chứng minh hung thủ đã ở trong khoang Ratchett lúc đó! Chiếc đồng hồ vỡ chỉ 01:15 trong túi pijama là do hung thủ cố tình vặn kim rồi đập vỡ nhét vào túi để toàn bộ hành khách có ngoại phạm lúc 01:15!' },
    i_household_revenge: { title: 'Toàn bộ toa tàu đều thuộc gia đình Armstrong', icon: '🧩', type: 'insight',
      desc: 'Công nương Nga (mẹ đỡ đầu), Bá tước phu nhân (dì ruột), bà Hubbard (bà ngoại Linda Arden), MacQueen (con trai công tố viên), Michel (cha của cô hầu gái Susanne), đại tá Arbuthnot (bạn thân), đầu bếp, quản gia, tài xế, bảo mẫu… tất cả đều là những người gắn bó máu thịt với gia đình Armstrong!' },
    i_twelve_jurors: { title: 'Bồi thẩm đoàn 12 người trên chuyến tàu bão tuyết', icon: '🧩', type: 'insight',
      desc: 'Vì sao có 12 nhát dao với lực tay trái phải khác nhau và mạng lưới ngoại phạm chéo hoàn hảo? Vì khi luật pháp bất lực trước đồng tiền của Cassetti, 12 con người đã tự lập nên một bồi thẩm đoàn 12 người: lần lượt từng người bước qua khoang số 3 của bà Hubbard vào đâm một nhát dao công lý trong bóng tối, để không một ai biết nhát dao của ai mới là nhát chí mạng!' }
  },
  locations: [
    { id: 'cabin2', name: 'Khoang số 2 — Hiện trường vụ án Ratchett', icon: '🛌',
      desc: 'Khoang ngủ hạng nhất trên toa Istanbul-Calais, cửa sổ mở ra bức tường tuyết trắng xóa.',
      points: [
        { id: 'p_wounds', name: 'Khám nghiệm 12 vết đâm trên thi thể', clue: 'c_twelve_wounds',
          text: 'Bác sĩ Constantine lắc đầu: “Thật vô lý! Có vết đâm mạnh như búa bổ, lại có vết sượt nhẹ, vừa có nhát thuận tay phải vừa có nhát thuận tay trái!”' },
        { id: 'p_watch', name: 'Chiếc đồng hồ quả quýt trong túi pijama', clue: 'c_watch_0115',
          text: 'Mặt kính vỡ dừng ở 01:15. Poirot nhíu mày: “Ai lại nhét đồng hồ quả quýt nặng trịch vào túi ngực áo pijama khi đi ngủ?”' },
        { id: 'p_ashtray', name: 'Phục hồi mảnh giấy cháy trong gạt tàn', clue: 'c_burnt_note',
          text: 'Dưới sức nóng, dòng chữ hiện lên rõ mồn một: “…member little Daisy Armstrong”. Ratchett chính là tên sát nhân Cassetti!' },
        { id: 'p_floor', name: 'Khăn tay thêu chữ “H” & Que thông tẩu', clue: 'c_handkerchief_h',
          text: 'Hai vật chứng hoàn toàn trái ngược nhau nằm ngay trên sàn khoang ngủ.' },
        { id: 'p_door3', name: 'Kiểm tra cửa thông sang khoang số 3', clue: 'c_hubbard_door',
          text: 'Cửa thông sang khoang bà Hubbard cài chốt phía bên bà Hubbard. Trong túi vải treo trên cửa của bà có giấu con dao găm dính máu!' }
      ] },
    { id: 'dining_car', name: 'Toa ăn — Thẩm tra Hồ sơ & Nhân chứng', icon: '🍽️',
      desc: 'Poirot và bạn ngồi đối chiếu lời khai và hộ chiếu của từng hành khách trên toa.',
      points: [
        { id: 'p_michel', name: 'Lời khai của nhân viên trưởng toa Pierre Michel', clue: 'c_french_voice',
          text: '“Đúng 00:37 khi chuông khoang số 2 reo, tôi gõ cửa thì có giọng bên trong trả lời bằng tiếng Pháp rằng bấm nhầm.”' },
        { id: 'p_macqueen', name: 'Xác minh với thư ký MacQueen về tiếng Pháp', clue: 'c_no_french',
          text: 'MacQueen khẳng định chắc nịch: “Ông Ratchett không biết một chữ tiếng Pháp nào!”' },
        { id: 'p_armstrong', name: 'Nhớ lại hồ sơ vụ án bé Daisy Armstrong', clue: 'c_armstrong_tragedy', requires: ['c_burnt_note'],
          text: 'Một bi kịch làm tan nát cả một gia đình: bé gái bị giết, mẹ sinh non qua đời, cha tự sát, cô hầu gái người Pháp nhảy lầu vì hàm oan.' },
        { id: 'p_alibis', name: 'Sơ đồ ngoại phạm của 12 hành khách', clue: 'c_cross_alibis',
          text: 'Tất cả 12 người trên toa đều làm chứng ngoại phạm cho nhau quanh mốc 01:15 — khít khao như một cỗ máy!' }
      ] },
    { id: 'luggage', name: 'Kiểm tra Hộ chiếu & Hành lý Hành khách', icon: '🧳', requires: ['c_burnt_note'],
      desc: 'Khám xét từng vali và giấy tờ tùy thân trên toa tàu Istanbul-Calais.',
      points: [
        { id: 'p_cyrillic', name: 'Đối chiếu chữ “H” với bảng chữ cái Nga', clue: 'c_cyrillic_n',
          text: 'Poirot mỉm cười: “Trong tiếng Nga, chữ Н chính là chữ N của Natalia Dragomiroff — mẹ đỡ đầu của Sonia Armstrong!”' },
        { id: 'p_passport', name: 'Soi vết dầu mỡ trên hộ chiếu Bá tước phu nhân', clue: 'c_grease_passport',
          text: 'Vết dầu mỡ cố tình che chữ H trong tên “Helena Goldenberg” — em gái ruột của bà Sonia Armstrong!' },
        { id: 'p_uniform', name: 'Vali của cô hầu phòng người Đức', clue: 'c_wagon_uniform',
          text: 'Bộ đồng phục nhân viên toa tàu bị đứt một chiếc cúc nằm gọn dưới đáy vali của cựu đầu bếp nhà Armstrong!' },
        { id: 'p_linda', name: 'Nhận diện thân phận thật của bà Hubbard', clue: 'c_linda_arden', requires: ['c_hubbard_door', 'c_grease_passport'],
          text: 'Poirot cúi đầu kính cẩn trước bà Hubbard: “Thưa bà, không ai trên thế giới có thể đạo diễn vở kịch này ngoài đại minh tinh sân khấu Linda Arden — mẹ của Sonia Armstrong!”' }
      ] }
  ],
  suspects: [
    { id: 'dragomiroff', name: 'Công nương Natalia Dragomiroff', age: 72, avatar: '皇', color: '#4a4e69',
      role: 'Quý tộc Nga lưu vong · Mẹ đỡ đầu của Sonia Armstrong',
      bio: 'Uy nghiêm, sắc sảo, đôi mắt sáng quắc như chim ưng. Thừa nhận ngay lập tức tình bạn sâu sắc với gia đình Armstrong.',
      intro: 'Công nương Dragomiroff tựa lưng vào ghế nhung. “Ngài Poirot, số phận đôi khi biết cách thực thi công lý tốt hơn tòa án của con người.”',
      topics: [
        { id: 't_sonia', label: 'Về gia đình Armstrong', lines: [
          ['them', 'Sonia là con gái đỡ đầu mà tôi yêu thương nhất. Còn tên Cassetti kia là một con quỷ không đáng được hít thở bầu không khí này.'] ] }
      ],
      presents: {
        c_cyrillic_n: { lines: [
          ['me', 'Chiếc khăn tay thêu chữ “H” ở hiện trường thực chất là chữ “Н” trong tiếng Nga — chữ cái đầu tên Natalia của Công nương!'],
          ['them', 'Ngài tinh mắt lắm. Và tôi sẽ không đòi lại chiếc khăn đó đâu.'] ] }
      },
      defaultPresent: 'Công nương nhìn bạn bằng ánh mắt lạnh lùng quý phái.'
    },
    { id: 'hubbard', name: 'Caroline Hubbard (Nghệ sĩ Linda Arden)', age: 58, avatar: '劇', color: '#9b2226',
      role: 'Hành khách khoang số 3 · Bà ngoại của bé Daisy Armstrong',
      bio: 'Đóng giả một phụ nữ Mỹ ồn ào hay phàn nàn, nhưng thực chất là nữ diễn viên bi kịch vĩ đại nhất sân khấu Broadway.',
      intro: 'Khi Poirot tập hợp tất cả hành khách tại toa ăn, vẻ ồn ào giả tạo trên gương mặt bà Hubbard biến mất, nhường chỗ cho thần thái uy nghiêm của một nghệ sĩ lớn.',
      topics: [
        { id: 't_night_h', label: 'Chuyện xảy ra trong khoang số 3 đêm qua', lines: [
          ['them', 'Cánh cửa thông giữa khoang số 3 của tôi và khoang số 2 của tên ác quỷ đó… chính là cánh cổng của tòa án tối cao đêm qua.'] ] }
      ],
      presents: {
        c_linda_arden: { lines: [
          ['partner', 'Thưa bà Linda Arden, suốt đời bà diễn những vai bi kịch, nhưng tối qua bà đã chọn đóng một vai hài để không ai nghi ngờ người phụ nữ ở khoang số 3 sát vách Ratchett!'],
          ['them', 'Khi tòa án nước Mỹ trả tự do cho kẻ đã giết cháu ngoại tôi, mười hai người chúng tôi đã quyết định lập lại một bồi thẩm đoàn của riêng mình.'] ] },
        c_twelve_wounds: { lines: [
          ['me', 'Mười hai người, mười hai nhát dao trong căn phòng tối — để không ai phải một mình mang gánh nặng là người kết liễu hắn!'],
          ['them', 'Nếu phải có một người chịu tội, hãy bắt một mình tôi. Chính tôi là người đã lên kế hoạch cho tất cả.'] ] }
      },
      defaultPresent: 'Bà Hubbard khẽ mỉm cười trầm mặc.'
    }
  ],
  combos: [
    { a: 'c_french_voice', b: 'c_no_french', result: 'i_fake_time_0115' },
    { a: 'c_watch_0115', b: 'c_no_french', result: 'i_fake_time_0115' },
    { a: 'c_cyrillic_n', b: 'c_grease_passport', result: 'i_household_revenge' },
    { a: 'c_armstrong_tragedy', b: 'c_linda_arden', result: 'i_household_revenge' },
    { a: 'c_twelve_wounds', b: 'i_household_revenge', result: 'i_twelve_jurors' },
    { a: 'c_cross_alibis', b: 'i_household_revenge', result: 'i_twelve_jurors' }
  ],
  hints: [
    { until: 'i_fake_time_0115', text: 'Hãy kiểm tra lời khai về câu tiếng Pháp lúc 00:37 và xác nhận của thư ký MacQueen rằng Ratchett không biết tiếng Pháp, rồi kết nối chúng!' },
    { until: 'c_burnt_note', text: 'Khám nghiệm gạt tàn trong khoang số 2 để phục hồi mảnh giấy cháy dở mang tên Daisy Armstrong.' },
    { until: 'i_household_revenge', text: 'Kiểm tra Hộ chiếu & Hành lý hành khách (chữ Н tiếng Nga, hộ chiếu Bá tước phu nhân, bà Linda Arden) rồi ghép lại để vạch trần mối liên hệ của họ với nhà Armstrong!' },
    { until: 'i_twelve_jurors', text: 'Kết hợp 12 vết đâm kỳ dị (hoặc sơ đồ ngoại phạm chéo) với suy luận “Toàn bộ toa tàu thuộc gia đình Armstrong”!' }
  ],
  finalHint: 'Hercule Poirot đã sẵn sàng đưa ra hai lời giải trước Monsieur Bouc và bác sĩ Constantine. Hãy đến Bảng suy luận!',
  questions: [
    { id: 'q1', q: 'Thân phận thật sự của doanh nhân triệu phú Samuel Ratchett là ai?',
      options: ['Một điệp viên chính phủ Mỹ', 'Trùm mafia Cassetti — kẻ từng bắt cóc và sát hại bé gái 3 tuổi Daisy Armstrong rồi dùng tiền thoát tội', 'Một nhà buôn cổ vật giả mạo', 'Anh trai của thư ký MacQueen'],
      answer: 1, support: ['c_burnt_note', 'c_armstrong_tragedy'] },
    { id: 'q2', q: 'Vì sao chiếc đồng hồ quả quýt trong túi pijama chỉ 01:15 nhưng thời điểm gây án thực sự lại là khoảng 00:37?',
      options: ['Đồng hồ bị hỏng từ hôm trước', 'Do chênh lệch múi giờ khi tàu đi qua biên giới', 'Lúc 00:37 hung thủ ở trong khoang Ratchett đã trả lời bằng tiếng Pháp (ngôn ngữ Ratchett không hề biết), sau đó cố tình vặn đồng hồ thành 01:15 để mọi người có bằng chứng ngoại phạm', 'Nhân viên toa tàu nhớ nhầm giờ'],
      answer: 2, support: ['i_fake_time_0115', 'c_french_voice', 'c_no_french', 'c_watch_0115'] },
    { id: 'q3', q: 'Tại sao trên thi thể Ratchett lại có đúng 12 vết đâm với lực tay rất mạnh, rất yếu, thuận tay phải và thuận tay trái lẫn lộn?',
      options: ['Hung thủ bị rối loạn đa nhân cách', 'Có hai sát thủ chuyên nghiệp đánh nhau trong phòng', 'Mười hai người đã lần lượt bước vào khoang trong bóng tối, mỗi người đâm một nhát dao như một bồi thẩm đoàn 12 người thực thi bản án tử hình', 'Để ngụy tạo vết thương của thú dữ'],
      answer: 2, support: ['i_twelve_jurors', 'c_twelve_wounds', 'c_cross_alibis'] },
    { id: 'q4', q: 'Chiếc khăn tay thêu chữ “H” rơi tại hiện trường thực chất thuộc về ai và vì sao?',
      options: ['Bà Caroline Hubbard', 'Hector MacQueen', 'Công nương Nga Natalia Dragomiroff — vì chữ “Н” viết hoa trong bảng chữ cái Kirin của tiếng Nga chính là chữ N trong tên Natalia', 'Cô hầu phòng Hildegarde Schmidt'],
      answer: 2, support: ['c_cyrillic_n', 'c_handkerchief_h'] },
    { id: 'q5', q: 'Bà khách người Mỹ ồn ào Caroline Hubbard ở khoang số 3 sát vách nạn nhân thực chất là ai?',
      options: ['Một nhà báo săn tin', 'Đại minh tinh sân khấu bi kịch Linda Arden — mẹ ruột của Sonia Armstrong và là bà ngoại của bé Daisy, người đã đạo diễn toàn bộ kế hoạch', 'Vợ cũ của Cassetti', 'Một nhân viên mật vụ'],
      answer: 1, support: ['c_linda_arden', 'i_household_revenge', 'c_hubbard_door'] },
    { id: 'q6', q: 'Trước sự thật về bồi thẩm đoàn 12 người của gia đình Armstrong, Poirot, Monsieur Bouc và bác sĩ Constantine đã chọn kết luận chính thức nào để báo cáo cảnh sát Nam Tư?',
      options: ['Bắt giữ toàn bộ 12 hành khách trên toa tàu', 'Chỉ bắt giữ một mình bà Linda Arden', 'Chấp nhận “Lời giải thứ nhất” của Poirot: một sát thủ lạ mặt của băng đảng mafia mặc đồng phục đường sắt đã lên tàu đâm Ratchett 12 nhát rồi trốn thoát qua bão tuyết', 'Kết luận Ratchett tự sát'],
      answer: 2, support: ['i_twelve_jurors', 'c_wagon_uniform'] }
  ],
  truth: [
    'Năm năm trước, tên trùm mafia Cassetti đã bắt cóc bé gái 3 tuổi Daisy Armstrong. Dù gia đình đã nộp đủ tiền chuộc, hắn vẫn sát hại đứa bé. Cú sốc khiến mẹ bé là Sonia Armstrong sinh non và qua đời, Đại tá Armstrong tự sát vì đau đớn, còn cô hầu gái người Pháp Susanne nhảy lầu tự vẫn vì bị nghi oan. Thế nhưng nhờ tiền bạc và thế lực ngầm, Cassetti được tòa tuyên trắng án rồi đổi tên thành Samuel Ratchett.',
    'Khi hệ thống pháp luật thất bại, mười hai con người từng yêu thương và gắn bó máu thịt với gia đình Armstrong — dẫn đầu bởi nữ diễn viên vĩ đại Linda Arden (trong vai bà Hubbard ồn ào ở khoang số 3) — đã tập hợp thành một “Bồi thẩm đoàn 12 người” chuẩn mực theo đúng truyền thống tư pháp.',
    'Kế hoạch của họ dự kiến thực hiện khi tàu dừng ở ga biên giới, nhưng trận bão tuyết bất ngờ làm đoàn tàu kẹt cứng giữa đồng không mông quạnh đã buộc họ phải ứng biến: họ vặn chiếc đồng hồ của Ratchett thành 01:15, rải các manh mối giả (khăn tay chữ Н, que thông tẩu, bộ đồng phục nhân viên đường sắt) và làm chứng ngoại phạm chéo cho nhau.',
    'Trong bóng tối của khoang số 2, sau khi Ratchett đã mê man vì thuốc ngủ, mười hai con người thuộc đủ mọi tầng lớp — từ Công nương Nga, Bá tước Hungary, Đại tá Anh cho đến người hầu phòng, tài xế, nhân viên gác toa (cha của cô hầu gái Susanne) — đã lần lượt bước qua cánh cửa thông từ khoang số 3 và đâm một nhát dao công lý.',
    'Khi Hercule Poirot trình bày xong cả hai lời giải — một lời giải đơn giản về “kẻ sát nhân mafia trốn qua cửa sổ” và lời giải thật sự về “12 vị bồi thẩm viên” — cả Giám đốc Monsieur Bouc lẫn bác sĩ pháp y Constantine đều đồng thanh xác nhận: kẻ sát nhân lạ mặt từ bên ngoài chắc chắn đã trốn thoát vào màn tuyết trắng!'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Án mạng trên chuyến tàu Tốc hành Phương Đông” (Murder on the Orient Express, 1934) của Agatha Christie — một trong những cốt truyện trinh thám nổi tiếng và nhân văn nhất mọi thời đại.'
});
