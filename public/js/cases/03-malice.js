/* =========================================================================
 * VỤ ÁN 3 — ÁC Ý
 * Phỏng theo 悪意 (Akui, 1996) — Series Kaga Kyoichiro
 * Lời thoại & cách dàn dựng manh mối được viết mới cho game; cơ chế phá
 * bằng chứng ngoại phạm đã được điều chỉnh/giản lược để phù hợp lối chơi.
 * ========================================================================= */
window.CASES = window.CASES || [];
window.CASES.push({
  id: 'malice',
  order: 3,
  title: 'Ác Ý',
  original: '悪意 · 1996 · Series Kaga Kyoichiro',
  kanji: '悪',
  theme: { a: '#1b1b1e', b: '#5c3d2e', accent: '#d4a373' },
  difficulty: 3,
  par: 30,
  tagline: 'Hung thủ nhận tội ngay từ đầu. Nhưng câu hỏi thật sự không phải “ai” — mà là “vì sao”.',
  playerRole: 'Bạn là thanh tra trẻ được phân công làm cộng sự cho Kaga Kyoichiro, sở cảnh sát Nerima.',
  partner: {
    name: 'Kaga Kyoichiro',
    title: 'Thanh tra — cựu giáo viên trung học',
    avatar: '加',
    color: '#354f52'
  },
  briefing: [
    'Tối trước ngày chuyển sang Vancouver định cư, nhà văn ăn khách Hidaka Kunihiko được phát hiện tử vong trong phòng làm việc tại nhà. Ông bị đánh vào đầu bằng chặn giấy rồi bị siết cổ bằng dây điện thoại.',
    'Người phát hiện thi thể là vợ ông — Hidaka Rie — và bạn thân từ thuở nhỏ của ông, nhà văn viết truyện thiếu nhi Nonoguchi Osamu.',
    'Nonoguchi từng là giáo viên cùng trường với Kaga trước khi Kaga gia nhập ngành cảnh sát. Anh ta hợp tác rất nhiệt tình: thậm chí còn viết hẳn một bản “ghi chép vụ án” gửi cho cảnh sát.',
    'Kaga nói với bạn: “Điều làm tôi bận tâm không phải ai đã giết ông ấy. Mà là trong căn phòng đó, có một thứ còn đáng sợ hơn cả lòng căm thù.”'
  ],
  clues: {
    c_body_hd: { title: 'Thi thể nhà văn', icon: '🖋️', type: 'evidence',
      desc: 'Hidaka Kunihiko bị đánh vào đầu bằng chặn giấy rồi bị siết cổ bằng dây điện thoại. Thời điểm tử vong: khoảng 17:00–18:00.' },
    c_room: { title: 'Phòng làm việc bị khóa', icon: '🚪', type: 'evidence',
      desc: 'Cửa phòng khóa từ bên trong, đèn tắt. Rie và Nonoguchi phải dùng chìa dự phòng lúc 20:00. Cửa sổ hướng ra vườn chỉ khép hờ — đủ cho một người trèo ra.' },
    c_boxes: { title: 'Những thùng đồ chuyển nhà', icon: '📦', type: 'evidence',
      desc: 'Thùng carton xếp chồng: sáng hôm sau vợ chồng Hidaka bay sang Vancouver. Ai muốn ra tay, đây là cơ hội cuối cùng.' },
    c_cat_grave: { title: 'Nấm mộ nhỏ trong vườn', icon: '🪦', type: 'evidence',
      desc: 'Góc vườn có một nấm mộ nhỏ đắp bằng tay của một con mèo, cắm một nhành hoa tươi. Tấm gỗ nhỏ ghi: “Xin lỗi em.”' },
    c_neighbor_cat: { title: 'Lời kể của bà hàng xóm', icon: '🐈', type: 'testimony',
      desc: '“Con mèo của tôi bị ai đó đầu độc. Chính ông Hidaka tìm thấy nó, tự tay chôn cất, còn sang tận nhà xin lỗi vì không trông được nó.”' },
    c_nonoguchi_story: { title: 'Lời khai của Nonoguchi', icon: '🗣️', type: 'testimony',
      desc: 'Nonoguchi: “Tôi ghé chơi lúc 15:00, về lúc 16:30. Đúng 18:00, Hidaka gọi điện đến nhà tôi, hẹn tôi 20:00 quay lại.” Nếu đúng thế, Hidaka còn sống lúc 18:00.' },
    c_oshima_call: { title: 'Nhân chứng cuộc gọi 18:00', icon: '📞', type: 'testimony',
      desc: 'Biên tập viên Oshima có mặt ở nhà Nonoguchi lúc 18:00. “Chuông reo chưa hết hồi thứ hai anh ấy đã nhấc máy, như đang chờ sẵn. Tôi chỉ nghe được tiếng anh ấy.”' },
    c_phone_record: { title: 'Dữ liệu viễn thông', icon: '📡', type: 'evidence',
      desc: 'Công ty viễn thông xác nhận: KHÔNG có cuộc gọi nào đến số nhà Nonoguchi trong khoảng 17:30–18:30 hôm đó.' },
    c_nonoguchi_notes: { title: '“Ghi chép vụ án” của Nonoguchi', icon: '📓', type: 'evidence',
      desc: 'Bản ghi chép Nonoguchi tự nguyện gửi cảnh sát. Trong đó, Hidaka hiện lên như một kẻ tàn nhẫn, thậm chí “từng tự miệng kể đã đầu độc con mèo hàng xóm vì nó phá vườn”.' },
    c_alarm: { title: 'Chiếc đồng hồ hẹn giờ', icon: '⏰', type: 'evidence',
      desc: 'Trên kệ phòng Nonoguchi: một đồng hồ hẹn giờ có chế độ chuông mô phỏng điện thoại, đặt cạnh máy điện thoại bàn. Giờ hẹn vẫn còn lưu: 18:00.' },
    c_notebooks: { title: 'Những cuốn sổ bản thảo', icon: '📚', type: 'evidence',
      desc: 'Hơn chục cuốn sổ chép tay toàn văn các tiểu thuyết nổi tiếng nhất của Hidaka — bằng chữ viết của Nonoguchi.' },
    c_notebook_new: { title: 'Mực còn quá mới', icon: '🔬', type: 'evidence',
      desc: 'Loại sổ này mới được sản xuất ba năm nay, trong khi vài tiểu thuyết đã in từ tám năm trước. Bản thảo gần như không có chỗ tẩy xóa — giống chép lại hơn là sáng tác.' },
    c_photo: { title: 'Bức ảnh bị cắt', icon: '🖼️', type: 'evidence',
      desc: 'Ảnh Nonoguchi đứng sát Hatsumi — người vợ đầu đã mất của Hidaka — trông như một cặp tình nhân. Mép ảnh có vết cắt bằng kéo.' },
    c_confession: { title: 'Lời nhận tội', icon: '⛓️', type: 'testimony',
      desc: 'Nonoguchi nhận tội giết Hidaka: “Tôi mới là người viết thật những cuốn sách đó. Hắn biết tôi từng ngoại tình với Hatsumi và dùng chuyện đó ép tôi viết thuê suốt bao năm.”' },
    c_excuse_copy: { title: 'Lời giải thích vụng về', icon: '🫥', type: 'testimony',
      desc: 'Nonoguchi: “Bản gốc cũ nát quá, tôi chép lại sang sổ mới cho gọn rồi vứt bản cũ đi.”' },
    c_rie_hatsumi: { title: 'Bức ảnh gốc', icon: '📷', type: 'testimony',
      desc: 'Rie tìm lại album cưới: bức ảnh gốc là ảnh tập thể đông người trong tiệc cưới đầu tiên của Hidaka. Hatsumi và Nonoguchi chỉ tình cờ đứng cạnh nhau.' },
    c_rie_writing: { title: 'Những đêm viết lách', icon: '🌙', type: 'testimony',
      desc: 'Rie: “Tôi đã thấy anh ấy viết từng trang mỗi đêm, sửa đi sửa lại đến sáng. Không ai viết thay anh ấy cả.”' },
    c_bullying: { title: 'Ký ức trường trung học', icon: '🏫', type: 'testimony',
      desc: 'Bạn học cũ kể: Nonoguchi từng bị bắt nạt tàn tệ, có lần còn bị ép tham gia hành hạ một bạn khác. Hidaka chứng kiến tất cả — và là người duy nhất đứng ra bênh vực Nonoguchi.' },
    c_hidaka_help: { title: 'Người bạn tử tế', icon: '🤝', type: 'testimony',
      desc: 'Chính Hidaka giới thiệu Nonoguchi với nhà xuất bản, và nhiều lần đề nghị viết chung khi sự nghiệp của Nonoguchi chững lại.' },
    c_nonoguchi_pale: { title: 'Lần đầu mất bình tĩnh', icon: '😶', type: 'testimony',
      desc: 'Khi nghe nhắc đến chuyện bị bắt nạt thời trung học, Nonoguchi lần đầu tiên tái mặt, giọng run lên: “Hắn… hắn đã kể với các anh à?”' },
    c_fujio: { title: 'Người phụ nữ giận dữ', icon: '😠', type: 'testimony',
      desc: 'Fujio Miyako phẫn nộ vì Hidaka lấy người anh quá cố của cô làm nguyên mẫu nhân vật. Tuy vậy, tối hôm đó cô dự một buổi họp có hơn mười nhân chứng.' },

    i_alibi_broken: { title: 'Cuộc gọi chưa từng tồn tại', icon: '🧩', type: 'insight',
      desc: 'Oshima nghe chuông reo, nhưng viễn thông không ghi nhận cuộc gọi nào. “Hidaka gọi lúc 18:00” chỉ là màn kịch một vai của Nonoguchi — bằng chứng ngoại phạm sụp đổ.' },
    i_fabricated: { title: 'Bằng chứng viết thuê là giả', icon: '🧩', type: 'insight',
      desc: 'Những cuốn sổ được chép lại SAU khi sách đã in. Không có bản gốc nào cả. “Nonoguchi là tác giả thật” là một lời nói dối được chuẩn bị công phu.' },
    i_notes_lie: { title: 'Ghi chép để bôi nhọ', icon: '🧩', type: 'insight',
      desc: 'Hidaka là người chôn con mèo và xin lỗi hàng xóm, nhưng ghi chép của Nonoguchi lại biến ông thành kẻ đầu độc nó. Bản ghi chép được viết ra để định hình cách cả thế giới nhìn Hidaka.' },
    i_photo_fake: { title: 'Mối tình được dựng lên', icon: '🧩', type: 'insight',
      desc: 'Bức ảnh “tình nhân” chỉ là một mảnh cắt từ ảnh tập thể. Chuyện ngoại tình với Hatsumi — cái cớ của việc “bị tống tiền” — cũng là bịa đặt.' },
    i_root: { title: 'Gốc rễ của ác ý', icon: '🧩', type: 'insight',
      desc: 'Hidaka đã chứng kiến khoảnh khắc nhục nhã nhất đời Nonoguchi — và sau đó còn tử tế với anh ta suốt bao năm. Thứ lòng tốt ấy, với Nonoguchi, là một vết thương không bao giờ lành.' },
    i_malice_plan: { title: 'Giết cả cái tên', icon: '🧩', type: 'insight',
      desc: 'Mục tiêu không chỉ là giết Hidaka. Nonoguchi muốn giết cả danh tiếng của ông: biến ông thành kẻ đạo văn, kẻ tống tiền, kẻ tàn nhẫn — vĩnh viễn, ngay cả sau khi chết.' }
  },
  locations: [
    { id: 'study', name: 'Nhà Hidaka — phòng làm việc', icon: '📚',
      desc: 'Giá sách đã dọn gần hết. Mùi giấy và mực in vẫn còn đậm.',
      points: [
        { id: 'p_body', name: 'Bàn viết', clue: 'c_body_hd',
          text: 'Thi thể gục trên sàn cạnh bàn viết. Chặn giấy bằng đồng dính máu, dây điện thoại quấn quanh cổ.' },
        { id: 'p_door', name: 'Cửa phòng & cửa sổ', clue: 'c_room',
          text: 'Ổ khóa không bị phá. Ngoài cửa sổ khép hờ, luống cỏ có vài dấu chân bị giẫm nát.' },
        { id: 'p_boxes', name: 'Những thùng carton', clue: 'c_boxes',
          text: 'Nhãn dán: “VANCOUVER — SÁCH”. Ngày bay: sáng mai.' }
      ] },
    { id: 'garden', name: 'Khu vườn & nhà hàng xóm', icon: '🐈',
      desc: 'Khu vườn nhỏ yên tĩnh, ngăn cách với nhà bên bằng một hàng rào thấp.',
      points: [
        { id: 'p_grave', name: 'Góc vườn khuất', clue: 'c_cat_grave',
          text: 'Một nấm đất nhỏ được vun cẩn thận, cắm nhành hoa còn tươi. Ai đó vẫn chăm nó đến tận ngày cuối cùng.' },
        { id: 'p_neighbor', name: 'Bấm chuông nhà bên', clue: 'c_neighbor_cat',
          text: 'Bà cụ hàng xóm lau nước mắt: “Ông Hidaka là người tốt. Ông ấy chôn con Mimi rồi sang tận nhà xin lỗi tôi.”' }
      ] },
    { id: 'publisher', name: 'Nhà xuất bản — biên tập viên Oshima', icon: '📰',
      desc: 'Oshima phụ trách sách của cả Hidaka lẫn Nonoguchi.',
      points: [
        { id: 'p_oshima', name: 'Hỏi về tối hôm đó', clue: 'c_oshima_call',
          text: '“Lúc 18:00 tôi đang ở nhà anh Nonoguchi bàn bản thảo. Điện thoại reo, anh ấy chụp lấy ngay: ‘À, Hidaka à…’ Tôi chỉ nghe được một phía thôi.”' },
        { id: 'p_career', name: 'Hỏi về hai nhà văn', clue: 'c_hidaka_help',
          text: '“Chính anh Hidaka giới thiệu anh Nonoguchi với chúng tôi. Mấy năm gần đây Nonoguchi bế tắc, anh Hidaka còn đề nghị viết chung.”' }
      ] },
    { id: 'hq', name: 'Phòng điều tra Nerima', icon: '🗂️',
      desc: 'Bàn làm việc của Kaga, chất đầy hồ sơ.',
      points: [
        { id: 'p_phone', name: 'Yêu cầu dữ liệu viễn thông', clue: 'c_phone_record', requires: ['c_oshima_call'],
          text: 'Bản fax từ công ty viễn thông đến vào buổi chiều. Kaga đọc rồi chuyển cho bạn, không nói gì.' },
        { id: 'p_notes', name: 'Phong bì Nonoguchi gửi đến', clue: 'c_nonoguchi_notes',
          text: 'Hàng chục trang viết tay, văn phong trôi chảy, giàu cảm xúc. Kaga lật từng trang rất chậm: “Viết hay quá. Hay đến mức đáng ngờ.”' }
      ] },
    { id: 'apartment', name: 'Căn hộ Nonoguchi', icon: '🔑', requires: ['i_alibi_broken'],
      desc: 'Có lệnh khám xét. Căn hộ gọn gàng của một người sống một mình.',
      points: [
        { id: 'p_shelf', name: 'Kệ cạnh điện thoại bàn', clue: 'c_alarm',
          text: 'Một chiếc đồng hồ hẹn giờ điện tử. Bạn bấm thử chế độ chuông: tiếng reo giống hệt điện thoại bàn.' },
        { id: 'p_notebooks', name: 'Thùng giấy dưới gầm giường', clue: 'c_notebooks',
          text: 'Mười hai cuốn sổ, mỗi cuốn là một tiểu thuyết của Hidaka, chép tay từ đầu đến cuối.' },
        { id: 'p_notebooks2', name: 'Soi kỹ chất liệu sổ', clue: 'c_notebook_new', requires: ['c_notebooks'],
          text: 'Mã sản xuất in mờ ở bìa sau. Bạn gọi cho nhà sản xuất văn phòng phẩm — dòng sổ này ra đời ba năm trước.' },
        { id: 'p_photo', name: 'Ngăn kéo bàn viết', clue: 'c_photo',
          text: 'Một bức ảnh cũ: Nonoguchi và Hatsumi đứng sát vai nhau. Một bên mép ảnh bị cắt không thẳng.' }
      ] },
    { id: 'school', name: 'Trường trung học cũ', icon: '🏫',
      desc: 'Ngôi trường nơi Hidaka và Nonoguchi từng học chung.',
      points: [
        { id: 'p_classmate', name: 'Gặp một bạn học cũ', clue: 'c_bullying',
          text: 'Người đàn ông ngập ngừng rất lâu: “Nonoguchi bị đám đó hành hạ khủng khiếp. Có lần chúng bắt cậu ấy… làm điều tương tự với một đứa khác. Hidaka thấy hết. Cậu ấy là người duy nhất dám đứng ra.”' },
        { id: 'p_yearbook', name: 'Kỷ yếu năm cuối',
          text: 'Trong ảnh lớp, Hidaka khoác vai Nonoguchi, cười rạng rỡ. Nonoguchi nhìn thẳng vào ống kính, không cười.' }
      ] }
  ],
  suspects: [
    { id: 'nonoguchi', name: 'Nonoguchi Osamu', age: 36, avatar: '野', color: '#52796f',
      role: 'Nhà văn thiếu nhi · bạn thân từ nhỏ của nạn nhân',
      bio: 'Cựu giáo viên tiểu học, từng là đồng nghiệp của Kaga. Nhã nhặn, nói năng chừng mực. Sự nghiệp văn chương lận đận.',
      intro: 'Nonoguchi mỉm cười buồn bã. “Lâu rồi không gặp, Kaga-kun. Không ngờ lại gặp trong hoàn cảnh này.”',
      topics: [
        { id: 't_day', label: 'Chiều hôm đó anh làm gì?', clue: 'c_nonoguchi_story', lines: [
          ['them', 'Tôi ghé chơi chào tạm biệt lúc 15:00, về khoảng 16:30.'],
          ['them', 'Đúng 18:00 Hidaka gọi đến nhà tôi, bảo 20:00 quay lại uống rượu tiễn. Lúc đó biên tập viên Oshima cũng ở nhà tôi.'] ] },
        { id: 't_hidaka', label: 'Về Hidaka', lines: [
          ['them', 'Hắn là một nhà văn tài năng. Và… là một người phức tạp hơn mọi người nghĩ.'],
          ['narr', 'Anh ta để lửng câu nói, như cố ý.'] ] },
        { id: 't_kaga', label: 'Thời còn đi dạy cùng Kaga', lines: [
          ['them', 'Kaga-kun hồi đó là giáo viên được học sinh quý nhất trường. Tôi luôn nghĩ cậu ấy sẽ là một thầy giáo giỏi cả đời.'],
          ['partner', 'Có những chuyện khiến người ta phải đổi nghề, Nonoguchi-san.'] ] },
        { id: 't_writing', label: 'Sự nghiệp viết lách', lines: [
          ['them', 'Truyện thiếu nhi không bán chạy như tiểu thuyết trinh thám. Nhưng tôi viết vì tôi thích.'] ] }
      ],
      presents: {
        c_phone_record: { clue: 'c_confession', lines: [
          ['me', 'Không có cuộc gọi nào đến nhà anh lúc 18:00.'],
          ['narr', 'Một khoảng im lặng dài. Rồi Nonoguchi thở ra, như trút được gánh nặng.'],
          ['them', 'Vậy là hết rồi. Phải, tôi đã giết hắn.'],
          ['them', 'Những cuốn sách đó… là tôi viết. Hắn biết tôi từng ngoại tình với Hatsumi và dùng chuyện đó ép tôi viết thuê suốt bao năm.'] ] },
        c_alarm: { lines: [
          ['them', 'Một chiếc đồng hồ thôi mà. Ai mà chẳng có.'] ] },
        c_notebook_new: { clue: 'c_excuse_copy', lines: [
          ['me', 'Những cuốn sổ này mới sản xuất ba năm trước.'],
          ['them', 'Bản gốc cũ nát quá, tôi chép lại sang sổ mới cho gọn rồi vứt bản cũ đi.'],
          ['partner', 'Chép lại mười hai cuốn tiểu thuyết bằng tay. Để làm gì, nếu không phải để cho ai đó nhìn thấy?'] ] },
        c_neighbor_cat: { lines: [
          ['them', 'Bà ta nhầm rồi. Chính Hidaka đã tự miệng kể với tôi.'] ] },
        c_bullying: { clue: 'c_nonoguchi_pale', lines: [
          ['me', 'Chúng tôi đã gặp bạn học cũ của anh.'],
          ['narr', 'Nụ cười trên mặt Nonoguchi biến mất. Lần đầu tiên, giọng anh ta run lên.'],
          ['them', 'Hắn… hắn đã kể với các anh à? Đó là chuyện của hai mươi năm trước.'] ] },
        c_photo: { lines: [
          ['them', 'Một kỷ niệm thôi. Hatsumi là người phụ nữ tuyệt vời.'] ] }
      },
      defaultPresent: 'Nonoguchi nhìn món đồ, mỉm cười lịch sự. “Tôi e là không hiểu ý cậu.”'
    },
    { id: 'rie', name: 'Hidaka Rie', age: 30, avatar: '理', color: '#a5a58d',
      role: 'Vợ thứ hai của nạn nhân',
      bio: 'Cựu biên tập viên văn học, kết hôn với Hidaka hai năm trước. Bình tĩnh, sắc sảo.',
      intro: 'Rie siết chặt chiếc khăn tay. “Ngày mai lẽ ra chúng tôi đã ở Vancouver.”',
      topics: [
        { id: 't_discovery', label: 'Lúc phát hiện thi thể', lines: [
          ['them', 'Tôi ra ngoài làm thủ tục và gặp bạn đến 19:30. Về nhà thì cửa phòng anh ấy khóa, gọi không thưa.'],
          ['them', 'Đúng lúc đó anh Nonoguchi đến, bảo được hẹn 20:00. Chúng tôi lấy chìa dự phòng mở cửa…'] ] },
        { id: 't_nonoguchi_r', label: 'Về Nonoguchi', lines: [
          ['them', 'Anh ấy là bạn thân nhất của chồng tôi. Kunihiko luôn lo cho anh ấy, như lo cho một người em.'] ] },
        { id: 't_hatsumi', label: 'Về người vợ đầu Hatsumi', lines: [
          ['them', 'Chị Hatsumi mất trong một tai nạn giao thông năm năm trước. Kunihiko chưa bao giờ nói một lời không hay về chị ấy.'] ] }
      ],
      presents: {
        c_photo: { clue: 'c_rie_hatsumi', lines: [
          ['them', 'Bức ảnh này… khoan đã.'],
          ['narr', 'Rie lấy ra cuốn album cưới cũ, lật vài trang rồi chỉ vào một tấm ảnh tập thể.'],
          ['them', 'Đây. Ảnh gốc là ảnh cả nhóm trong tiệc cưới đầu tiên của Kunihiko. Họ chỉ tình cờ đứng cạnh nhau. Ai đó đã cắt nó ra.'] ] },
        c_confession: { clue: 'c_rie_writing', lines: [
          ['them', 'Không thể nào! Tôi đã thấy anh ấy viết từng trang mỗi đêm, sửa đi sửa lại đến sáng.'],
          ['them', 'Không ai viết thay Kunihiko cả. Không ai.'] ] },
        c_cat_grave: { lines: [
          ['them', 'Con mèo nhà bên… Anh ấy buồn mấy ngày liền. Anh ấy tự đóng tấm gỗ đó.'] ] }
      },
      defaultPresent: 'Rie lắc đầu. “Tôi không biết gì về chuyện này.”'
    },
    { id: 'fujio', name: 'Fujio Miyako', age: 33, avatar: '藤', color: '#84a98c',
      role: 'Em gái một bạn học cũ của Hidaka',
      bio: 'Người anh quá cố của cô bị Hidaka lấy làm nguyên mẫu cho một nhân vật phản diện trong tiểu thuyết.',
      intro: 'Fujio khoanh tay. “Tôi biết các anh sẽ tìm đến tôi.”',
      topics: [
        { id: 't_anger', label: 'Mâu thuẫn với Hidaka', clue: 'c_fujio', lines: [
          ['them', 'Hắn biến anh tôi thành một kẻ tồi tệ trong sách, cho cả nước đọc. Tôi đã đòi hắn thu hồi cuốn sách.'],
          ['them', 'Nhưng tối hôm đó tôi ở buổi họp hội phụ huynh, có hơn mười người làm chứng. Các anh cứ kiểm tra.'] ] },
        { id: 't_brother', label: 'Về người anh', lines: [
          ['them', 'Anh tôi là một trong những kẻ cầm đầu đám bắt nạt hồi đó. Tôi biết. Nhưng anh ấy đã chết rồi — sao không để anh ấy yên?'] ] }
      ],
      presents: {
        c_nonoguchi_notes: { lines: [
          ['them', 'Nonoguchi? Anh tôi từng nói Nonoguchi là đứa “khó đoán nhất” trong lớp. Bề ngoài hiền lành, nhưng không bao giờ quên chuyện gì.'] ] }
      },
      defaultPresent: 'Fujio nhún vai. “Hỏi nhầm người rồi.”'
    }
  ],
  combos: [
    { a: 'c_oshima_call', b: 'c_phone_record', result: 'i_alibi_broken' },
    { a: 'c_nonoguchi_story', b: 'c_phone_record', result: 'i_alibi_broken' },
    { a: 'c_notebook_new', b: 'c_excuse_copy', result: 'i_fabricated' },
    { a: 'c_notebook_new', b: 'c_confession', result: 'i_fabricated' },
    { a: 'c_rie_writing', b: 'c_notebook_new', result: 'i_fabricated' },
    { a: 'c_neighbor_cat', b: 'c_nonoguchi_notes', result: 'i_notes_lie' },
    { a: 'c_cat_grave', b: 'c_nonoguchi_notes', result: 'i_notes_lie' },
    { a: 'c_rie_hatsumi', b: 'c_confession', result: 'i_photo_fake' },
    { a: 'c_rie_hatsumi', b: 'c_photo', result: 'i_photo_fake' },
    { a: 'c_bullying', b: 'c_hidaka_help', result: 'i_root' },
    { a: 'c_nonoguchi_pale', b: 'c_hidaka_help', result: 'i_root' },
    { a: 'i_fabricated', b: 'i_notes_lie', result: 'i_malice_plan' },
    { a: 'i_photo_fake', b: 'i_notes_lie', result: 'i_malice_plan' }
  ],
  hints: [
    { until: 'c_nonoguchi_story', text: 'Hãy bắt đầu từ người phát hiện thi thể. Mọi bằng chứng ngoại phạm đều có một điểm tựa.' },
    { until: 'c_oshima_call', text: 'Cuộc gọi lúc 18:00 có một nhân chứng. Nhân chứng ấy đã thực sự nghe thấy những gì?' },
    { until: 'i_alibi_broken', text: 'Một cuộc điện thoại luôn để lại dấu vết ở đâu đó ngoài căn phòng. Hãy đặt lời nhân chứng cạnh dữ liệu đó.' },
    { until: 'c_confession', text: 'Bằng chứng ngoại phạm đã sụp. Hãy cho anh ta thấy điều đó — và lắng nghe kỹ lý do anh ta đưa ra.' },
    { until: 'i_fabricated', text: 'Một người nhận tội quá dễ dàng thường đang bảo vệ một điều gì đó. Những cuốn sổ kia được viết KHI NÀO?' },
    { until: 'i_notes_lie', text: 'Đừng đọc bản ghi chép như một lời khai. Hãy đọc nó như một cuốn tiểu thuyết — và kiểm tra từng chi tiết với người thật.' },
    { until: 'i_photo_fake', text: 'Một bức ảnh bị cắt luôn có một phần bị giấu đi. Ai có thể giữ bản gốc?' },
    { until: 'i_root', text: 'Động cơ không nằm trong những cuốn sách. Nó nằm ở hai mươi năm trước, ở ngôi trường họ học chung.' },
    { until: 'i_malice_plan', text: 'Bản thảo giả, ghi chép giả, mối tình giả. Tất cả cùng nhắm vào một thứ — không phải mạng sống của Hidaka.' }
  ],
  finalHint: 'Chúng ta đã biết ai. Giờ hãy viết ra “vì sao” — ở Bảng suy luận.',
  questions: [
    { id: 'q1', q: 'Ai đã giết Hidaka Kunihiko?',
      options: ['Hidaka Rie', 'Nonoguchi Osamu', 'Fujio Miyako', 'Biên tập viên Oshima'],
      answer: 1, support: ['i_alibi_broken', 'c_confession', 'c_phone_record'] },
    { id: 'q2', q: 'Bằng chứng ngoại phạm lúc 18:00 được tạo ra như thế nào?',
      options: ['Một đồng phạm gọi điện giả giọng Hidaka', 'Hidaka thực sự đã gọi trước khi chết', 'Chuông giả từ đồng hồ hẹn giờ; Nonoguchi diễn một cuộc gọi không tồn tại trước mặt Oshima', 'Oshima nói dối để bao che'],
      answer: 2, support: ['c_alarm', 'i_alibi_broken', 'c_oshima_call'] },
    { id: 'q3', q: 'Những cuốn sổ bản thảo thực sự chứng minh điều gì?',
      options: ['Nonoguchi là tác giả thật của các tiểu thuyết', 'Hidaka đạo văn của Nonoguchi', 'Chúng được chép lại sau khi sách in — “chứng cứ viết thuê” là ngụy tạo', 'Rie mới là người viết'],
      answer: 2, support: ['i_fabricated', 'c_notebook_new', 'c_rie_writing'] },
    { id: 'q4', q: 'Chuyện Nonoguchi ngoại tình với Hatsumi là thật hay giả?',
      options: ['Thật — Hidaka đã tống tiền anh ta vì chuyện đó', 'Giả — bức ảnh bị cắt từ ảnh tập thể, câu chuyện được dựng lên để tạo động cơ giả', 'Thật, nhưng Hidaka không biết', 'Không thể xác định'],
      answer: 1, support: ['i_photo_fake', 'c_rie_hatsumi'] },
    { id: 'q5', q: 'Động cơ thật sự của Nonoguchi là gì?',
      options: ['Bị ép viết thuê suốt nhiều năm', 'Tình cũ với Hatsumi', 'Tranh giành tiền nhuận bút', 'Ác ý thuần túy bắt nguồn từ quá khứ — căm ghét người đã chứng kiến nỗi nhục của mình và còn tử tế với mình'],
      answer: 3, support: ['i_root', 'c_bullying', 'c_nonoguchi_pale'] },
    { id: 'q6', q: 'Vì sao Nonoguchi nhận tội dễ dàng như vậy?',
      options: ['Vì hối hận', 'Để được giảm án', 'Để dư luận tin vào động cơ giả anh ta dựng sẵn — hủy hoại danh tiếng Hidaka vĩnh viễn', 'Để bảo vệ Rie'],
      answer: 2, support: ['i_malice_plan', 'i_notes_lie', 'i_fabricated'] }
  ],
  truth: [
    'Chiều hôm đó, Nonoguchi không ra về lúc 16:30. Anh ta quay lại, đánh Hidaka bằng chặn giấy, siết cổ ông bằng dây điện thoại, rồi khóa cửa từ bên trong và trèo ra qua cửa sổ.',
    'Về đến nhà, anh ta đã cài sẵn một chiếc đồng hồ hẹn giờ có chuông giống hệt điện thoại. Đúng 18:00, chuông reo; Nonoguchi chộp lấy ống nghe và diễn một cuộc trò chuyện với “Hidaka” trước mặt biên tập viên Oshima. Một người chết không thể gọi điện — nên Hidaka phải còn sống lúc 18:00.',
    'Khi bằng chứng ngoại phạm sụp đổ, Nonoguchi nhận tội gần như ngay lập tức, kèm một động cơ nghe rất hợp lý: anh ta mới là tác giả thật, bị Hidaka tống tiền vì chuyện ngoại tình với Hatsumi. Những cuốn sổ chép tay, bức ảnh bị cắt, bản “ghi chép vụ án” đầy chi tiết bôi nhọ — tất cả đã được chuẩn bị từ lâu để chứng minh câu chuyện đó.',
    'Nhưng Kaga không chấp nhận một lời giải chỉ khớp về bề mặt. Sổ mới hơn sách. Ảnh bị cắt từ ảnh tập thể. Hidaka là người chôn con mèo, không phải kẻ đầu độc nó.',
    'Gốc rễ nằm ở hai mươi năm trước. Nonoguchi từng bị bắt nạt, từng bị ép hành hạ người khác — và Hidaka đã nhìn thấy tất cả. Hidaka không bao giờ nhắc lại; ông chỉ tử tế với bạn mình suốt bao năm, giúp đỡ, nâng đỡ. Với Nonoguchi, mỗi lần nhận lòng tốt ấy là một lần bị nhắc nhớ mình thấp kém ra sao.',
    'Đó là “ác ý”: không phải thù hận có lý do, mà là thứ căm ghét lặng lẽ, vô cớ, muốn hủy diệt không chỉ một con người mà cả tên tuổi của người đó — ngay cả sau khi chết.'
  ],
  sourceNote: 'Một trong những tác phẩm đặc sắc nhất của series Kaga Kyoichiro, được kể xen kẽ giữa ghi chép của hung thủ và của Kaga. Được xem là tiểu thuyết “whydunit” kinh điển. Bản tiếng Việt: “Ác ý”.'
});
