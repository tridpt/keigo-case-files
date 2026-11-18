/* =========================================================================
 * VỤ ÁN 9 — GIA TỘC INUGAMI (ĐÀN KOTO, CÚC VÀ RÌU)
 * Phỏng theo 犬神家の殺人 (Inugamike no Satsujin, 1951) — Yokomizo Seishi
 * Vụ án kinh điển nhất của thám tử tóc rối Kindaichi Kosuke.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'inugami-curse',
  order: 9,
  collection: 'shin-honkaku',
  author: 'Yokomizo Seishi',
  title: 'Gia Tộc Inugami: Cúc, Đàn & Rìu',
  original: '犬神家の殺人 · 1951 · Yokomizo Seishi (Kindaichi Kosuke)',
  kanji: '犬',
  theme: { a: '#1c1917', b: '#7f1d1d', accent: '#eab308' },
  difficulty: 5,
  par: 38,
  tagline: 'Ba bảo vật gia truyền biến thành ba hiện trường tử thần, hai chiếc mặt nạ trắng, và đôi chân nhô lên từ mặt hồ đóng băng.',
  playerRole: 'Bạn là luật sư trẻ Furudate, người bảo quản bản di chúc và hỗ trợ thám tử tư Kindaichi Kosuke tại dinh thự bên hồ Nasu.',
  partner: {
    name: 'Kindaichi Kosuke',
    title: 'Thám tử tư mặc kimono — đầu tóc rối bù mỗi khi suy luận',
    avatar: '金',
    color: '#7f1d1d'
  },
  briefing: [
    'Ông trùm tơ lụa vùng Shinshu — Inugami Sahei — qua đời, để lại khối tài sản khổng lồ cùng một bản di chúc châm ngòi cho máu chảy: toàn bộ gia sản và ba bảo vật gia truyền (Rìu, Đàn Koto, Hoa Cúc) sẽ trao cho thiếu nữ mồ côi Nonomiya Tamayo, với điều kiện cô phải kết hôn với một trong ba người cháu ngoại của ông là Sukekiyo, Suketake hoặc Sukeo.',
    'Trớ trêu thay, nếu Tamayo từ chối hoặc cả ba người cháu trai đều mất mạng, toàn bộ gia sản sẽ thuộc về Aonuma Shizuma — đứa con rơi của ông chủ Sahei với một nữ công nhân nghèo từng bị ba người con gái nhà Inugami (Matsuko, Takeko, Umeko) hành hạ tàn nhẫn.',
    'Đúng lúc công bố di chúc, người cháu cả Sukekiyo trở về từ chiến trường Miến Điện với gương mặt biến dạng ẩn sau chiếc mặt nạ cao su trắng toát. Và ngay sau đó, lời nguyền bùng phát: đầu của Suketake bị chặt đặt giữa khóm cúc, một thi thể cắm ngược hai chân lên mặt hồ băng, còn Sukeo bị siết cổ bằng dây đàn koto!',
    'Kindaichi gãi mái tóc rối bù của mình: “Tại sao lại phải chặt đầu cái xác rồi cắm ngược xuống hồ? Không phải vì nghệ thuật ma quái đâu — mà để đánh tráo thời điểm chết của hai con người!”'
  ],
  clues: {
    c_will_scroll: { title: 'Bản di chúc đẫm máu của Sahei', icon: '📜', type: 'evidence',
      desc: 'Trao quyền thừa kế cho Tamayo nếu cô cưới 1 trong 3 cháu trai (Sukekiyo, Suketake, Sukeo). Nếu cả 3 cháu trai chết, người thừa kế duy nhất sẽ là đứa con rơi Aonuma Shizuma.' },
    c_rubber_mask: { title: 'Chiếc mặt nạ cao su của Sukekiyo', icon: '🎭', type: 'evidence',
      desc: 'Người tự xưng là Sukekiyo trở về từ Miến Điện luôn đeo mặt nạ cao su trắng che kín mặt và nói giọng khàn đục. Khi bị ép điểm chỉ, dấu vân tay của anh ta ban đầu lại không khớp với vân tay thời học sinh của Sukekiyo!' },
    c_kiku_head: { title: 'Vụ thứ nhất: Thủ cấp giữa bồn Hoa Cúc', icon: '🌼', type: 'evidence',
      desc: 'Đầu của người cháu thứ hai — Suketake — được tìm thấy cắm giữa mô hình búp bê Hoa Cúc (Kiku) vào đêm 15/11. Vết cắt ở cổ có rất ít máu chảy ra tại hiện trường.' },
    c_lake_legs: { title: 'Đôi chân cắm ngược trên mặt hồ băng', icon: '🦵', type: 'evidence',
      desc: 'Sáng hôm sau, một phần thân người không đầu mặc quân phục của Suketake bị cắm ngược hai chân nhô lên khỏi mặt hồ Nasu. Tuy nhiên, phần thân này đã cứng đờ vì ngâm nước lạnh từ hơn 24 giờ trước và có vóc dáng nhỏ hơn Suketake!' },
    c_koto_murder: { title: 'Vụ thứ hai: Dây đàn Koto siết cổ Sukeo', icon: '🪕', type: 'evidence',
      desc: 'Người cháu thứ ba — Sukeo — bị đầu độc rồi quấn dây đàn Koto quanh cổ sau khi định cưỡng bức Tamayo. Hung thủ đã tạo dựng hiện trường theo bảo vật thứ hai: Đàn Koto.' },
    c_koki_axe: { title: 'Vụ thứ ba: Người đeo mặt nạ & Chiếc Rìu', icon: '🪓', type: 'evidence',
      desc: 'Một người đàn ông đeo mặt nạ cao su trắng, mặc đồ của Sukekiyo, bị phát hiện chết gục bên chiếc Rìu (Koki). Khi lột mặt nạ ra, gương mặt chằng chịt sẹo đó chính là đứa con rơi Aonuma Shizuma!' },
    c_two_soldiers: { title: 'Hồ sơ quân y từ chiến trường Miến Điện', icon: '🪖', type: 'evidence',
      desc: 'Cả Sukekiyo thật và Aonuma Shizuma đều chiến đấu trong cùng một đơn vị ở Miến Điện! Shizuma bị mảnh đạn phá hủy khuôn mặt và đã khống chế Sukekiyo thật để mạo danh bước vào nhà Inugami trước.' },
    c_ceiling_hideout: { title: 'Căn gác mái trên phòng bà Matsuko', icon: '🕯️', type: 'evidence',
      desc: 'Trên trần phòng ngủ của bà cả Inugami Matsuko có dấu vết một người đàn ông thứ hai ẩn náu nhiều ngày liền, được chính bà Matsuko lén đưa cơm nước mỗi đêm — đó là Sukekiyo thật!' },
    c_blood_watch: { title: 'Chiếc đồng hồ quả quýt dính máu dừng ở 21:15', icon: '⌚', type: 'evidence',
      desc: 'Trong túi áo của Suketake có chiếc đồng hồ bị vỡ lúc 21:15 đêm 15/11 — thời điểm mà bà Matsuko đang ngồi đánh bài có đủ nhân chứng ở phòng khách dinh thự!' },
    c_kimono_thread: { title: 'Sợi tơ vàng của áo haori gia tộc', icon: '🧶', type: 'evidence',
      desc: 'Trong kẽ móng tay của thi thể dưới hồ có kẹt một sợi chỉ thêu hoa văn lá bách — chỉ có trên chiếc áo khoác haori của bà cả Inugami Matsuko.' },
    c_cats_eye_ring: { title: 'Lọ thuốc độc trong hộp trâm của bà Matsuko', icon: '🧪', type: 'evidence',
      desc: 'Loại thuốc độc dùng để sát hại Sukeo trùng khớp với hóa chất rửa ảnh cũ được cất trong hộp trâm cài tóc của bà Matsuko.' },
    c_swap_clothes: { title: 'Màn đánh tráo quần áo giữa hai thi thể', icon: '🧥', type: 'testimony',
      desc: 'Kindaichi chỉ ra: đêm 14/11, Shizuma đã bị đâm chết trước. Đến đêm 15/11, Suketake mới bị giết. Bằng cách chặt đầu cả hai và mặc quân phục của Suketake vào phần thân đã chết từ hôm trước của Shizuma rồi thả xuống hồ, thời điểm tử vong bị dịch chuyển để tạo bằng chứng ngoại phạm!' },

    i_double_mask: { title: 'Bí mật hai người đàn ông đeo mặt nạ', icon: '🧩', type: 'insight',
      desc: 'Có tới hai người luân phiên đeo mặt nạ cao su trong dinh thự: Aonuma Shizuma (kẻ mạo danh đến trước) và Sukekiyo thật (người trốn trên gác mái phòng mẹ mình là bà Matsuko).' },
    i_corpse_swap_alibi: { title: 'Thủ thuật tráo thân xác dưới mặt hồ', icon: '🧩', type: 'insight',
      desc: 'Phần thân cắm ngược dưới hồ là của Shizuma (chết đêm 14/11), nhưng lại mặc quần áo của Suketake (chết đêm 15/11). Nhờ tráo quần áo và chặt đầu, hung thủ khiến cảnh sát tin Suketake chết vào lúc bà Matsuko đang có bằng chứng ngoại phạm!' },
    i_mother_son_pact: { title: 'Đồng phạm bất đắc dĩ giữa hai mẹ con', icon: '🧩', type: 'insight',
      desc: 'Sukekiyo thật không giết người, nhưng vì thấy mẹ mình (bà Matsuko) cầm dao đứng bên xác chết, anh ta đã giúp mẹ chặt đầu và dàn dựng hiện trường Rìu — Đàn — Cúc để che đậy tội ác cho mẹ.' },
    i_matsuko_mastermind: { title: 'Bà cả Inugami Matsuko là hung thủ thật sự', icon: '🧩', type: 'insight',
      desc: 'Vì tình mẫu tử mù quáng muốn con trai duy nhất Sukekiyo thừa kế toàn bộ gia sản Inugami, bà Matsuko đã lần lượt sát hại Shizuma, Suketake và Sukeo.' }
  },
  locations: [
    { id: 'mansion', name: 'Dinh thự Inugami bên hồ Nasu', icon: '🏯',
      desc: 'Dinh thự cổ kính soi bóng xuống mặt hồ phẳng lặng như gương giữa mùa đông vùng Shinshu.',
      points: [
        { id: 'p_will', name: 'Phòng công bố di chúc', clue: 'c_will_scroll',
          text: 'Luật sư Furudate mở cuộn giấy: toàn bộ gia sản thuộc về Tamayo nếu cô kết hôn với một trong ba người cháu trai.' },
        { id: 'p_mask', name: 'Quan sát người đeo mặt nạ trắng', clue: 'c_rubber_mask',
          text: 'Chiếc mặt nạ cao su trắng bệch không một biểu cảm. Dấu vân tay đầu tiên của anh ta hoàn toàn không khớp với hồ sơ cũ.' },
        { id: 'p_records', name: 'Điện tín xác minh từ Cục Quân y', clue: 'c_two_soldiers', requires: ['c_rubber_mask'],
          text: 'Kindaichi vỗ đùi: “Cả Sukekiyo lẫn đứa con rơi Aonuma Shizuma đều ở cùng một đại đội tại Miến Điện!”' },
        { id: 'p_attic', name: 'Kiểm tra gác mái phòng bà Matsuko', clue: 'c_ceiling_hideout', requires: ['c_two_soldiers'],
          text: 'Chăn đệm và khay cơm giấu trên trần nhà: có một người đàn ông thứ hai đã trốn ở đây suốt tuần qua!' }
      ] },
    { id: 'lake_garden', name: 'Vườn Hoa Cúc & Mặt hồ đóng băng', icon: '🌊',
      desc: 'Hiện trường kỳ quái của vụ án mạng đầu tiên.',
      points: [
        { id: 'p_kiku', name: 'Bệ trưng bày búp bê Hoa Cúc (Kiku)', clue: 'c_kiku_head',
          text: 'Đầu của Suketake được cài giữa những đóa cúc vàng rực. Nhưng mặt đất quanh bệ hoa hầu như không có vết máu bắn.' },
        { id: 'p_legs', name: 'Mặt hồ Nasu — Đôi chân cắm ngược', clue: 'c_lake_legs',
          text: 'Hai chân mặc quần quân phục của Suketake nhô thẳng đứng lên khỏi lớp băng mỏng. Phần thân đã co cứng từ hơn một ngày trước!' },
        { id: 'p_watch', name: 'Túi áo quân phục & Chiếc đồng hồ vỡ', clue: 'c_blood_watch',
          text: 'Kim đồng hồ dừng ở 21:15 đêm 15/11 — đúng giờ bà Matsuko đang ngồi đánh bài trước mặt mọi người.' },
        { id: 'p_swap', name: 'Phân tích của Kindaichi về cái xác dưới hồ', clue: 'c_swap_clothes', requires: ['c_lake_legs', 'c_koki_axe'],
          text: 'Kindaichi nói lớn: “Phần thân dưới hồ thực chất là của Shizuma bị giết từ đêm 14, còn cái xác đeo mặt nạ bên chiếc Rìu mới là phần thân của Suketake được mặc đồ của Shizuma!”' }
      ] },
    { id: 'shrine_tower', name: 'Phòng Đàn Koto & Nhà kho Bảo vật', icon: '🪕',
      desc: 'Nơi xảy ra vụ án mạng thứ hai và thứ ba.',
      points: [
        { id: 'p_koto', name: 'Hiện trường cái chết của Sukeo', clue: 'c_koto_murder',
          text: 'Sukeo nằm bất động, cổ quấn sợi dây đàn Koto đứt đôi. Nhưng nguyên nhân tử vong thật sự là trúng độc!' },
        { id: 'p_koki', name: 'Nhà kho — Thi thể đeo mặt nạ bên chiếc Rìu', clue: 'c_koki_axe',
          text: 'Bên dưới chiếc mặt nạ cao su là gương mặt đầy sẹo của Aonuma Shizuma.' },
        { id: 'p_thread', name: 'Soi kẽ móng tay thi thể dưới hồ', clue: 'c_kimono_thread',
          text: 'Một sợi chỉ thêu vàng hình lá bách của chiếc áo haori mà chỉ trưởng nữ nhà Inugami là bà Matsuko mới được mặc.' },
        { id: 'p_poison', name: 'Khám xét hộp trâm cài trong phòng bà Matsuko', clue: 'c_cats_eye_ring', requires: ['c_kimono_thread'],
          text: 'Lọ độc chất giấu dưới lớp nhung đỏ trong hộp trâm gia truyền của bà Matsuko.' }
      ] }
  ],
  suspects: [
    { id: 'matsuko', name: 'Inugami Matsuko', age: 50, avatar: '松', color: '#7f1d1d',
      role: 'Trưởng nữ nhà Inugami · Mẹ ruột của Sukekiyo',
      bio: 'Kiêu hãnh, sắc lạnh và tôn thờ dòng máu chính thống của nhà Inugami. Bà coi con trai Sukekiyo là lẽ sống duy nhất.',
      intro: 'Bà Matsuko ngồi thẳng lưng bên lò sưởi, tay lần chuỗi hạt. “Gia sản họ Inugami chỉ thuộc về máu mủ của Sukekiyo mà thôi.”',
      topics: [
        { id: 't_will_m', label: 'Về bản di chúc của cha bà', lines: [
          ['them', 'Cha tôi đã lú lẫn rồi! Ông ta muốn ba chị em chúng tôi tự xé xác nhau vì con bé Tamayo và thằng con hoang của ả đàn bà Aonuma!'] ] },
        { id: 't_alibi_15', label: 'Đêm 15/11 bà ở đâu?', lines: [
          ['them', 'Đúng 21:15 đêm đó — giờ chiếc đồng hồ của Suketake vỡ — tôi đang ngồi đánh bài hoa ở phòng khách cùng luật sư Furudate và Tamayo.'] ] }
      ],
      presents: {
        c_kimono_thread: { lines: [
          ['me', 'Trong móng tay của Aonuma Shizuma có sợi chỉ vàng từ áo khoác haori của bà. Chính bà đã đâm chết Shizuma vào đêm 14/11!'],
          ['them', 'Thằng con hoang đó dám lẻn vào phòng tôi lúc nửa đêm và cười nhạo rằng nó sẽ cướp hết mọi thứ của Sukekiyo!'] ] },
        c_swap_clothes: { lines: [
          ['partner', 'Đêm 15/11, sau khi bà sát hại Suketake, con trai bà là Sukekiyo đã chặt đầu hai cái xác và đổi quần áo cho nhau để dùng chiếc đồng hồ vỡ lúc 21:15 làm bằng chứng ngoại phạm cho mẹ!'],
          ['narr', 'Chuỗi hạt trên tay bà Matsuko đứt tung, lăn tròn trên chiếu tatami.'],
          ['them', 'Sukekiyo… con trai tôi chỉ muốn cứu người mẹ tội lỗi này thôi!'] ] },
        c_cats_eye_ring: { lines: [
          ['me', 'Và để Sukekiyo không còn bất kỳ đối thủ nào tranh cưới Tamayo, bà đã dùng chất độc trong hộp trâm để giết nốt người cháu thứ ba là Sukeo.'],
          ['them', 'Tất cả… tất cả những gì tôi làm đều là vì Sukekiyo!'] ] }
      },
      defaultPresent: 'Bà Matsuko khẽ nhếch môi lạnh lùng. “Thứ đó thì nói lên được điều gì?”'
    },
    { id: 'sukekiyo', name: 'Inugami Sukekiyo (Người con trai thật)', age: 27, avatar: '清', color: '#475569',
      role: 'Con trai ruột của bà Matsuko · Cựu binh trở về từ Miến Điện',
      bio: 'Bị Aonuma Shizuma khống chế khi vừa về nước. Trốn trên gác mái của mẹ và chứng kiến bi kịch gia tộc.',
      intro: 'Chàng thanh niên tháo chiếc mặt nạ cao su, để lộ vết sẹo bên má nhưng ánh mắt hiền lành và đau đớn.',
      topics: [
        { id: 't_shizuma', label: 'Vì sao anh phải trốn trên gác mái?', lines: [
          ['them', 'Ở Miến Điện, Shizuma cứu mạng tôi nhưng khi biết chuyện thừa kế nhà Inugami, hắn đã ép tôi phải để hắn đóng giả làm tôi trước…'] ] },
        { id: 't_lake_s', label: 'Vì sao anh lại dựng hiện trường Rìu — Đàn — Cúc?', lines: [
          ['them', 'Đêm 14/11, tôi bước xuống thì thấy mẹ đã đâm chết Shizuma… Vì Shizuma đang mang danh tính của tôi, nếu phát hiện xác hắn, mẹ tôi sẽ bị bắt ngay lập tức!'] ] }
      ],
      presents: {
        c_swap_clothes: { lines: [
          ['me', 'Anh đã chặt đầu Shizuma và Suketake rồi đổi quần áo hai người cho nhau để bảo vệ mẹ mình.'],
          ['them', 'Tôi tưởng mẹ chỉ lỡ tay giết Shizuma để tự vệ… Tôi không ngờ chính sự che đậy của tôi lại khiến mẹ tiếp tục ra tay với cả Suketake và Sukeo!'] ] }
      },
      defaultPresent: 'Sukekiyo cúi đầu im lặng.'
    },
    { id: 'tamayo', name: 'Nonomiya Tamayo', age: 22, avatar: '珠', color: '#b45309',
      role: 'Người thừa kế chính trong di chúc · Cháu gái ân nhân của ông Sahei',
      bio: 'Thông minh, kiêu hãnh. Là tâm điểm của cuộc tranh giành đẫm máu nhưng trái tim cô chỉ hướng về Sukekiyo thật.',
      intro: 'Tamayo nhìn ra mặt hồ Nasu mờ sương. “Ngay từ lần đầu tiên chạm vào bàn tay người đeo mặt nạ, tôi đã biết đó không phải là anh Sukekiyo mà tôi từng yêu.”',
      topics: [
        { id: 't_impostor', label: 'Làm sao cô nhận ra kẻ đeo mặt nạ đầu tiên là giả?', lines: [
          ['them', 'Vân tay có thể giải thích là do vết bỏng, giọng nói có thể đổi vì vết thương… nhưng ánh mắt nhìn tôi với lòng thù hận thì không thể là của anh Sukekiyo.'] ] }
      ],
      presents: {
        c_will_scroll: { lines: [
          ['them', 'Ông cụ Sahei viết bản di chúc này không phải vì thương tôi, mà vì ông muốn nhìn thấy lòng tham của chính con cháu mình.'] ] }
      },
      defaultPresent: 'Tamayo khẽ lắc đầu.'
    }
  ],
  combos: [
    { a: 'c_rubber_mask', b: 'c_two_soldiers', result: 'i_double_mask' },
    { a: 'c_ceiling_hideout', b: 'c_two_soldiers', result: 'i_double_mask' },
    { a: 'c_lake_legs', b: 'c_swap_clothes', result: 'i_corpse_swap_alibi' },
    { a: 'c_blood_watch', b: 'c_swap_clothes', result: 'i_corpse_swap_alibi' },
    { a: 'i_double_mask', b: 'i_corpse_swap_alibi', result: 'i_mother_son_pact' },
    { a: 'c_kimono_thread', b: 'c_cats_eye_ring', result: 'i_matsuko_mastermind' },
    { a: 'i_mother_son_pact', b: 'c_cats_eye_ring', result: 'i_matsuko_mastermind' }
  ],
  hints: [
    { until: 'i_double_mask', text: 'Hãy kiểm tra người đeo mặt nạ ở dinh thự, điện tín từ Cục Quân y và căn gác mái phòng bà Matsuko rồi ghép chúng lại.' },
    { until: 'c_swap_clothes', text: 'Khám nghiệm đôi chân trên mặt hồ băng và thi thể bên chiếc Rìu ở nhà kho để mở phân tích của Kindaichi về màn tráo quần áo.' },
    { until: 'i_corpse_swap_alibi', text: 'Kết hợp đôi chân dưới hồ (hoặc chiếc đồng hồ vỡ lúc 21:15) với màn đánh tráo quần áo giữa hai thi thể.' },
    { until: 'i_mother_son_pact', text: 'Ghép suy luận “Hai người đeo mặt nạ” với “Thủ thuật tráo thân xác dưới mặt hồ”.' },
    { until: 'i_matsuko_mastermind', text: 'Kiểm tra sợi chỉ vàng trong móng tay thi thể và hộp trâm cài tóc của bà Matsuko, sau đó kết hợp chúng trong sổ tay!' }
  ],
  finalHint: 'Kindaichi đã gãi đầu xong rồi đấy! Hãy đến Bảng suy luận để khép lại bi kịch nhà Inugami.',
  questions: [
    { id: 'q1', q: 'Bí mật đằng sau người đàn ông đeo mặt nạ cao su trắng trở về từ Miến Điện là gì?',
      options: ['Đó là ông chủ Inugami Sahei giả chết', 'Có tới hai người cùng đeo mặt nạ cao su: đứa con rơi Aonuma Shizuma (mạo danh về trước) và Sukekiyo thật (trốn trên gác mái phòng mẹ)', 'Đó là luật sư Furudate cải trang', 'Sukekiyo bị mất trí nhớ hoàn toàn'],
      answer: 1, support: ['i_double_mask', 'c_two_soldiers', 'c_ceiling_hideout'] },
    { id: 'q2', q: 'Vì sao hung thủ lại chặt đầu thi thể và cắm ngược đôi chân lên mặt hồ băng Nasu?',
      options: ['Để thực hiện nghi lễ hiến tế thần hồ', 'Để đánh tráo phần thân của Shizuma (chết đêm 14/11) với quần áo của Suketake (chết đêm 15/11), làm sai lệch thời điểm tử vong và tạo bằng chứng ngoại phạm lúc 21:15', 'Vì không tìm được chỗ chôn xác', 'Để dọa Tamayo rời khỏi dinh thự'],
      answer: 1, support: ['i_corpse_swap_alibi', 'c_swap_clothes', 'c_lake_legs', 'c_blood_watch'] },
    { id: 'q3', q: 'Ai là hung thủ thật sự đã trực tiếp sát hại Shizuma, Suketake và Sukeo?',
      options: ['Aonuma Shizuma', 'Inugami Sukekiyo', 'Bà cả Inugami Matsuko — mẹ ruột của Sukekiyo', 'Nonomiya Tamayo'],
      answer: 2, support: ['i_matsuko_mastermind', 'c_kimono_thread', 'c_cats_eye_ring'] },
    { id: 'q4', q: 'Vai trò của người con trai Sukekiyo thật trong các vụ án là gì?',
      options: ['Là kẻ chủ mưu sai khiến mẹ mình', 'Hoàn toàn không biết gì', 'Thấy mẹ lỡ sát hại Shizuma nên đã giúp mẹ chặt đầu, tráo xác và dựng hiện trường Rìu — Đàn — Cúc để che tội cho mẹ', 'Là người đã đầu độc Sukeo'],
      answer: 2, support: ['i_mother_son_pact', 'i_corpse_swap_alibi'] },
    { id: 'q5', q: 'Phần thân cắm ngược dưới mặt hồ thực chất là của ai, và thi thể đeo mặt nạ bên chiếc Rìu thực chất là phần thân của ai?',
      options: ['Dưới hồ là Suketake, bên chiếc Rìu là Sukeo', 'Dưới hồ là phần thân của Aonuma Shizuma mặc đồ Suketake; bên chiếc Rìu là phần thân của Suketake ghép với đầu của Shizuma', 'Cả hai đều là người lạ', 'Dưới hồ là ông chủ Sahei'],
      answer: 1, support: ['c_swap_clothes', 'i_corpse_swap_alibi', 'c_koki_axe'] },
    { id: 'q6', q: 'Động cơ xuyên suốt của bà Inugami Matsuko là gì?',
      options: ['Trả thù cho cha mình', 'Tình mẫu tử mù quáng và lòng tham: muốn loại bỏ Shizuma cùng hai người cháu trai để con trai ruột Sukekiyo cưới được Tamayo và độc chiếm toàn bộ gia sản', 'Do bị Shizuma tống tiền', 'Muốn phá hủy ba bảo vật gia truyền'],
      answer: 1, support: ['i_matsuko_mastermind', 'c_will_scroll'] }
  ],
  truth: [
    'Bản di chúc độc địa của ông trùm Inugami Sahei đã biến dinh thự bên hồ Nasu thành một chiến trường gia tộc, nơi người con gái cả Inugami Matsuko sẵn sàng làm tất cả để bảo vệ quyền thừa kế cho đứa con trai duy nhất Sukekiyo.',
    'Khi chiến tranh kết thúc, đứa con rơi Aonuma Shizuma — người cũng bị thương ở mặt trong cùng đơn vị với Sukekiyo — đã khống chế Sukekiyo và đeo mặt nạ cao su bước vào dinh thự Inugami trước. Sukekiyo thật bí mật trở về sau và trốn trên gác mái phòng mẹ mình.',
    'Đêm 14/11, khi Shizuma lẻn vào phòng bà Matsuko tiết lộ thân phận thật và buông lời nhục mạ, bà Matsuko đã đâm chết hắn. Sukekiyo từ gác mái bước xuống thấy vậy liền quyết định giúp mẹ phi tang vì nếu xác Shizuma lộ ra, bà Matsuko sẽ bị bắt ngay.',
    'Đêm hôm sau (15/11), bà Matsuko tiếp tục sát hại người cháu thứ hai là Suketake. Để tạo bằng chứng ngoại phạm cho mẹ vào lúc 21:15, Sukekiyo đã chặt đầu cả hai thi thể, mặc bộ quân phục có chiếc đồng hồ vỡ lúc 21:15 của Suketake vào phần thân đã chết từ hôm trước của Shizuma rồi cắm ngược xuống mặt hồ băng, còn đầu của Suketake thì đặt lên bệ Hoa Cúc!',
    'Sau khi bà Matsuko đầu độc nốt người cháu thứ ba Sukeo bên dây đàn Koto, Kindaichi Kosuke đã bóc trần toàn bộ màn tráo xác kinh hoàng. Khi biết con trai đã gánh tội thay mình, bà Matsuko đã uống thuốc độc tự kết liễu trong làn khói thuốc lá trầm mặc của mình.'
  ],
  sourceNote: 'Phỏng theo kiệt tác “Gia tộc Inugami” (犬神家の殺人, 1951) của Yokomizo Seishi — tác phẩm tiêu biểu nhất của dòng trinh thám cổ điển Nhật Bản với hình ảnh đôi chân nhô lên từ mặt hồ đã trở thành biểu tượng điện ảnh.'
});
