const productsData = [
    // ==================== MIỀN BẮC ====================
    { id: 1, name: "Phở Bò Hà Nội Truyền Thống", price: 50000, stock: 20, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Nước dùng hầm xương ngọt thanh, bánh phở mềm dai chuẩn vị thủ đô.", img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Bún Chả Quạt Hà Nội", price: 45000, stock: 15, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.8", desc: "Thịt ba chỉ nướng than hoa thơm phức ăn kèm bún tươi và nước chấm.", img: "https://mms.img.susercontent.com/vn-11134513-7r98o-lsvdm2owgom1cd@resize_ss1242x600!@crop_w1242_h600_cT" },
    { id: 3, name: "Bún Đậu Mắm Tôm Đặc Biệt", price: 60000, stock: 30, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.7", desc: "Đậu rán giòn rụm, chả cốm dẻo thơm, thịt luộc chấm mắm tôm nguyên chất.", img: "https://i-giadinh.vnecdn.net/2025/05/16/Bun-dau-mam-tom-6-vnexpress-17-9082-8722-1747388531.jpg" },
    { id: 4, name: "Bánh Cuốn Chả Mực Hạ Long", price: 40000, stock: 12, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.6", desc: "Bánh cuốn mỏng tang nhân mộc nhĩ hành phi ăn cùng chả mực Hạ Long.", img: "https://quangninhgate.vn/wp-content/uploads/2026/03/banh-cuon-cha-muc-ha-long-2.png" },
    { id: 5, name: "Chả Cá Lã Vọng Hà Nội", price: 99000, stock: 10, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Cá lăng ướp riềng mẻ nướng thơm phức ăn kèm bún, thì là và đậu phộng.", img: "https://cdn.hstatic.net/files/200000700229/article/cha-ca-la-vong-thumb_4adbac9946c14ba9abe41fafe63bb53c.jpg" },
    { id: 6, name: "Bún Riêu Cua Đồng", price: 50000, stock: 25, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.8", desc: "Nước dùng gạch cua béo ngậy kết hợp ốc giòn sần sật và cà chua.", img: "https://morico.vn/wp-content/uploads/2025/09/bun-rieu-cua-dong.jpeg" },
    { id: 7, name: "Bánh Xèo Hải Phòng", price: 35000, stock: 18, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.5", desc: "Bánh nhân tôm thịt mỏng giòn chấm nước mắm giấm tỏi đặc trưng.", img: "https://noithatcuhanoi.com/wp-content/uploads/2022/12/quan-banh-xeo-ngon-hai-phong-2.jpg" },
    { id: 8, name: "Nem Chua Thanh Hóa Chuẩn Vị", price: 36000, stock: 40, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.6", desc: "Nem chua giòn sần sật gói lá đinh lăng thơm nức mũi.", img: "https://media.sohuutritue.net.vn/files/trinhbinh/2023/09/27/nem-chua-chuan-thanh-hoa-1453.jpg" },
    { id: 9, name: "Bánh Đa Cua Hải Phòng", price: 55000, stock: 20, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.8", desc: "Bánh đa đỏ dai ngon nấu cùng bề bề, chả cá và rau rút.", img: "https://i-giadinh.vnecdn.net/2023/02/25/Buoc-12-thanh-pham-12-3879-1677318715.jpg" },
    { id: 10, name: "Xôi Xéo Hà Nội Truyền Thống", price: 30000, stock: 30, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.7", desc: "Xôi nếp dẻo thơm đậu xanh nghiền mịn và hành phi giòn rụm.", img: "https://i-giadinh.vnecdn.net/2024/10/04/Bc6Thnhphm16-1728034310-5421-1728034330.jpg" },
    { id: 11, name: "Bánh Ghẹ Hải Phòng", price: 45000, stock: 15, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.6", desc: "Thịt ghẹ tươi ngon bọc bột chiên giòn tan chấm tương ớt.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzoPcGkwrOP-SJ6xtrRSVU1eb44305Afqfp5ngDRs_-sAhr-6ZpcaMTg&s=10" },
    { id: 12, name: "Chè Lam Thạch Xá", price: 20000, stock: 50, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.5", desc: "Đặc sản bánh kẹo dẻo thơm vị gừng và bột nếp rang.", img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzpzcuwu6oulc1" },

    // ==================== MIỀN TRUNG ====================
    { id: 13, name: "Bún Bò Huế Chuẩn Vị Cố Đô", price: 55000, stock: 25, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Đậm đà hương vị sả ớt, mắm ruốc cùng thịt bò và chả cua thơm lừng.", img: "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/15/bun-bo-hue-2-0933.jpg" },
    { id: 14, name: "Mì Quảng Tôm Thịt Đặc Biệt", price: 55000, stock: 20, region: "Miền Trung", badge: "Miền Trung", rating: "4.9", desc: "Sợi mì vàng dai kết hợp tôm, thịt, trứng cút và rau sống tươi ngon.", img: "https://statics.vinpearl.com/cach-nau-mi-quang-tom-thit-anh-thumb_1631331111.jpg" },
    { id: 15, name: "Bánh Xèo Miền Trung", price: 40000, stock: 30, region: "Miền Trung", badge: "Miền Trung", rating: "4.7", desc: "Bánh kích thước nhỏ giòn rụm nhân tôm nhảy và giá đỗ tươi.", img: "https://www.nhahangthangloi.vn/datafiles/47505/upload/files/b%C3%A1nh%20x%C3%A8o.png" },
    { id: 16, name: "Cao Lầu Hội An Chính Gốc", price: 50000, stock: 15, region: "Miền Trung", badge: "Miền Trung", rating: "4.9", desc: "Sợi cao lầu dai đặc trưng kết hợp thịt xá xíu và da heo giòn.", img: "https://danangfantasticity.com/wp-content/uploads/2025/09/tong-hop-cac-mon-an-nhat-dinh-phai-thu-khi-den-da-nang-hoi-an-CAO-LAU-03.jpg" },
    { id: 17, name: "Bánh Bèo Chén Huế", price: 35000, stock: 40, region: "Miền Trung", badge: "Miền Trung", rating: "4.6", desc: "Bánh bột gạo mềm mịn phủ tôm cháy và mỡ hành thơm phức.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBayHrlwGuz3IPEICCs3HzV82mu4xsWWR8ukSfvycgiA&s=10" },
    { id: 18, name: "Bánh Canh Chả Cá Nha Trang", price: 45000, stock: 20, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Sợi bánh canh bột gạo dai mềm cùng chả cá chiên hấp đậm đà.", img: "https://bazantravel.com/cdn/medias/uploads/56/56498-cach-nau-banh-canh-cha-ca-nha-trang-700x496.jpg" },
    { id: 19, name: "Nem Lụi Huế Sả Thơm", price: 40000, stock: 25, region: "Miền Trung", badge: "Miền Trung", rating: "4.7", desc: "Thịt heo quết nhuyễn bọc sả nướng vàng chấm nước lèo đậu phộng.", img: "https://bestour.com.vn/uploads/nem-lui-hue-bestour2.jpg" },
    { id: 20, name: "Bánh Đập Vị Giòn Quảng Ngãi", price: 50000, stock: 30, region: "Miền Trung", badge: "Miền Trung", rating: "4.5", desc: "Bánh tráng nướng kẹp bánh ướt mềm chấm mắm nêm đậm đà.", img: "https://latravel.com.vn/wp-content/uploads/2025/03/2-27.jpg" },
    { id: 21, name: "Gỏi Cá Nam Ô Đà Nẵng", price: 120000, stock: 10, region: "Miền Trung", badge: "Miền Trung", rating: "4.7", desc: "Gỏi cá Nam Ô tinh hoa làng chài.", img: "https://dulichviet.com.vn/images/bandidau/am-thuc/goi-ca-nam-o-da-nang-du-lich-viet.jpg" },
    { id: 22, name: "Chả Ram Tôm Đất Bình Định", price: 50000, stock: 35, region: "Miền Trung", badge: "Miền Trung", rating: "4.9", desc: "Chả ram cuốn tôm đất nhỏ giòn rụm ăn hoài không ngán.", img: "https://dacsanbinhdinhquynhon.com/wp-content/uploads/2022/11/cha-ram-tom-dat-binh-dinh-0.jpg" },
    { id: 23, name: "Bánh Tráng Cuốn Thịt Heo Đà Nẵng", price: 65000, stock: 15, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Thịt heo luộc hai đầu da cuốn rau sống chấm mắm nêm tuyệt hảo.", img: "https://i-giadinh.vnecdn.net/2023/05/12/Bc8Thnhphm8-1683878266-7070-1683878300.jpg" },
    { id: 24, name: "Nước Mía", price: 25000, stock: 100, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.9", desc: "Thức uống thanh mát từ cây mía, làm dịu cơn khát ngày nắng nóng.", img: "https://kenh14cdn.com/2018/3/16/ngngmylinh2502-15211830065041378750703.jpg" },

    // ==================== MIỀN NAM ====================
    { id: 25, name: "Bánh Xèo Miền Tây", price: 50000, stock: 20, region: "Miền Nam", badge: "Miền Nam", rating: "4.7", desc: "Vỏ bánh vàng giòn, nhân tôm thịt đậm đà ăn kèm đĩa rau rừng tươi mát.", img: "https://tse2.mm.bing.net/th/id/OIP.6rs0Aaj49iFJPVcyfGAKbQHaET?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 26, name: "Hủ Tiếu Nam Vang Sài Gòn", price: 55000, stock: 25, region: "Miền Nam", badge: "Miền Nam", rating: "4.8", desc: "Nước lèo ngọt đậm đà từ xương hầm cùng tôm, thịt bằm, trứng cút.", img: "https://tse1.mm.bing.net/th/id/OIP.rLR0ET2uG-QNDaAa8zhnjwHaFP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 27, name: "Lẩu Mắm Miền Tây Nam Bộ", price: 180000, stock: 8, region: "Miền Nam", badge: "Miền Nam", rating: "4.9", desc: "Lẩu mắm đặc trưng đậm vị cá linh, tôm, mực và hàng chục loại rau đồng.", img: "https://www.nhahangquangon.com/wp-content/uploads/2015/10/nvl1394702800.jpg" },
    { id: 28, name: "Cơm Tấm Sườn Bì Chả Sài Gòn", price: 50000, stock: 40, region: "Miền Nam", badge: "Miền Nam", rating: "4.9", desc: "Cơm tấm hạt nhuyễn ăn kèm sườn nướng mật ong thơm lừng và bì chả.", img: "https://4.bp.blogspot.com/-eS206KQrCIU/WllEEQ9viWI/AAAAAAACCbM/DvyOiu6VG8YZbd6kdaCm3LoVsPlZurfPgCLcBGAs/s1600/image001.png" },
    { id: 29, name: "Bánh Khọt Vũng Tàu", price: 45000, stock: 30, region: "Miền Nam", badge: "Miền Nam", rating: "4.7", desc: "Bánh khọt tôm tươi đổ khuôn giòn rụm rắc tôm chấy béo ngậy.", img: "https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-khot-Co-Ba-Vung-Tau-1.jpg" },
    { id: 30, name: "Gỏi Ngó Sen Tôm Thịt", price: 60000, stock: 15, region: "Miền Nam", badge: "Miền Nam", rating: "4.6", desc: "Ngó sen giòn sần sật trộn tôm thịt chua ngọt ăn khai vị siêu ngon.", img: "https://storage.googleapis.com/onelife-public/goi_ngo_sen_tom_thit_thumbnail_0dd9d9acac/goi_ngo_sen_tom_thit_thumbnail_0dd9d9acac.jpg" },
    { id: 31, name: "Bún Mắm Miền Tây", price: 55000, stock: 20, region: "Miền Nam", badge: "Miền Nam", rating: "4.7", desc: "Bún chan nước mắm đậm đà ăn cùng heo quay, tôm, mực.", img: "https://tse2.mm.bing.net/th/id/OIP.1RvKP48sUPxR1tlAUnErmwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 32, name: "Bánh Pía Sóc Trăng", price: 75000, stock: 50, region: "Miền Nam", badge: "Đặc Sản", rating: "4.9", desc: "Bánh pía ngọt ngào thơm mùi sầu riêng đặc trưng Nam Bộ.", img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/Banh_pia_sau_rieng_cf299d9fde.jpg" },
    { id: 33, name: "Cá Lóc Nướng Trui Miền Tây", price: 130000, stock: 10, region: "Miền Nam", badge: "Miền Nam", rating: "4.8", desc: "Cá lóc nguyên con nướng rơm thơm lức cuốn bánh tráng rau sống.", img: "https://cdn.tgdd.vn/Files/2021/08/04/1372928/cach-lam-mon-ca-loc-nuong-trui-dan-da-dac-san-mien-tay-202206041532565016.jpg" },
    { id: 34, name: "Cà Phê Sữa Đá Sài Gòn", price: 35000, stock: 100, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.9", desc: "Cà phê rang xay đậm đặc kết hợp sữa đặc nguyên chất thơm ngon.", img: "https://cafesach.top/wp-content/uploads/2022/03/cach-pha-cafe-sua-sai-gon-1.jpg" },

    // ==================== TRÁNG MIỆNG & COMBO ====================
    { id: 35, name: "Chè Trôi Nước Gừng Ấm", price: 30000, stock: 25, region: "Tráng Miệng", badge: "Tráng Miệng", rating: "4.6", desc: "Viên chè dẻo mịn nhân đậu xanh ngọt bùi ngập trong nước đường gừng.", img: "https://bepnhatoi.net/wp-content/uploads/2025/05/bat-che-troi-nuoc-truyen-thong-nhan-dau-xanh-nuoc-gung-nong-hoi-rac-me-rang.webp" },
    { id: 36, name: "Bánh Flan Sữa tươi Caramel", price: 20000, stock: 40, region: "Tráng Miệng", badge: "Tráng Miệng", rating: "4.8", desc: "Bánh flan béo ngậy mềm mịn chan nước sốt caramel ngọt đắng.", img: "https://img.magnific.com/premium-photo/there-is-dessert-with-caramel-sauce-mint-leaves-it-generative-ai_1034475-31897.jpg" },
    { id: 37, name: "Matcha Late", price: 65000, stock: 100, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.9", desc: "Từ bột matcha đậm đặc kết hợp sữa tươi nguyên chất thơm ngon.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR208UfyeBTHoCxDy7Ko0uBRdxFTfKxQqKpW6UWGmbqlA&s=10" },
    { id: 38, name: "Combo 3 Miền Sum Vầy (Cho 2-3 người)", price: 220000, stock: 10, region: "Combo", badge: "Combo", rating: "5.0", desc: "Bao gồm Phở Bò Hà Nội, Bánh Bèo Huế và Bánh Xèo Miền Nam thưởng thức trọn vị.", img: "cobo sum vầy.jpg" },
    { id: 39, name: "Combo Hơi Thở Miền Bắc", price: 300000, stock: 10, region: "Combo", badge: "Combo", rating: "4.8", desc: "Set gồm Chả Cá Lã Vọng + Bún Chả + Bún Đậu Mắn Tôm Hà Nội và Bánh Cuốn Cao Bằng.", img: "https://huongvietmart.vn/wp-content/uploads/2022/09/san-pham-dac-trung-cua-mien-bac-va-mien-nam-2.png" },
    { id: 40, name: "Combo Cố Đô Miền Trung", price: 399000, stock: 10, region: "Combo", badge: "Combo", rating: "4.9", desc: "Set Các Món Ăn Đậm vị Truyền Thống.", img: "https://huongvietmart.vn/wp-content/uploads/2022/09/san-pham-dac-trung-cua-mien-bac-va-mien-nam-3.jpg" },
    { id: 41, name: "Combo Cơm Mẹ Nấu - Ấm Lòng Nam Bộ", price: 499000, stock: 10, region: "Combo", badge: "Combo", rating: "4.9", desc: "Set gồm Cơm Trắng + Canh Chua Cá Nục+ Khô Quẹt Và kèm Theo Các món Rau Ăn Cùng.", img: "https://monngonmoingay.com/wp-content/uploads/2025/07/thuc-don-7-ngay-trong-tuan-mien-nam-3.jpg" },
    { id: 42, name: "Combo Ăn Vặt 3 Miền Siêu Đỉnh", price: 149000, stock: 15, region: "Combo", badge: "Combo", rating: "4.7", desc: "Các Món Ăn Vặt Ưa Thích Của Các Bạn Nhỏ và người lớn.", img: "https://i.pinimg.com/736x/17/9f/37/179f375a14185dfed78fcdc52331ef26.jpg" },

    // ==================== MIỀN BẮC (BỔ SUNG) ====================
    { id: 43, name: "Phở Gà Ta Hà Nội", price: 45000, stock: 25, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.8", desc: "Thịt gà ta da giòn thịt ngọt, nước dùng lá chanh thơm nức.", img: "https://static.vinwonders.com/production/optimize_Pho-ga-Ha-Noi-05.jpg" },
    { id: 44, name: "Bún Thang Hà Thành", price: 55000, stock: 20, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Món ăn tinh tế kết hợp trứng tráng mỏng, giò lụa, thịt gà xé và tinh dầu cà cuống.", img: "https://bizweb.dktcdn.net/100/479/802/products/bun-thang-dac-biet.jpg?v=1709000645367" },
    { id: 45, name: "Bún Mọc Dọc Mùng", price: 45000, stock: 20, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.7", desc: "Bún nước dùng thanh ngọt, mọc thịt giòn dẻo cùng dọc mùng thanh mát.", img: "https://i-giadinh.vnecdn.net/2022/07/14/Buoc-8-8-2030-1657791673.jpg" },
    { id: 46, name: "Bánh Tôm Hồ Tây", price: 40000, stock: 25, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.6", desc: "Tôm nguyên con chiên giòn cùng khoai lang bào sợi, cuốn rau sống chấm nước mắm chua ngọt.", img: "https://cooponline.vn/tin-tuc/wp-content/uploads/2025/10/banh-tom-ho-tay-gion-rum-dam-da-huong-vi-truyen-thong-ha-noi-4.png" },
    { id: 47, name: "Bánh Cuốn Thanh Trì", price: 30000, stock: 30, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.7", desc: "Bánh tráng mỏng ướp mỡ hành thơm nức, ăn kèm chả quế.", img: "https://cdn3.ivivu.com/2022/09/b%C3%A1nh-cu%E1%BB%91n3.jpg" },
    { id: 48, name: "Mèn Mén Hà Giang", price: 35000, stock: 15, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.5", desc: "Món ăn đặc sản từ bột ngô đồ chín của đồng bào vùng cao Tây Bắc.", img: "https://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/052025/9_20250501100734.jpg" },
    { id: 49, name: "Thịt Trâu Gác Bếp Tây Bắc", price: 120000, stock: 30, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Thịt trâu hun khói củi mận, đậm đà gia vị mắc khén hạt dổi.", img: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/158953/Originals/cach-lam-thit-trau-gac-bep-bang-lo-nuong-4.jpg" },
    { id: 50, name: "Bún Ốc Nóng Hà Nội", price: 45000, stock: 20, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.8", desc: "Ốc nhồi giòn sần sật, nước dùng dấm mẻ chua thanh dịu nhẹ.", img: "https://statics.vinpearl.com/bun-oc-ha-noi-1_1680710776.jpg" },
    { id: 51, name: "Chả Rươi Hải Dương", price: 85000, stock: 15, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Chả rươi đúc trứng thơm lừng vỏ quýt và thì là.", img: "https://www.lorca.vn/wp-content/uploads/2023/10/1-57.jpg" },
    { id: 52, name: "Bánh Đúc Nóng Hà Nội", price: 25000, stock: 35, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.7", desc: "Bánh đúc dẻo quánh, phủ thịt bằm mộc nhĩ, hành phi và nước mắm ấm nóng.", img: "https://statics.vinpearl.com/banh-duc-nong-ha-noi-1_1680105125.jpg" },
    { id: 53, name: "Cơm Lam Gà Nướng Tây Bắc", price: 150000, stock: 10, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Xôi nếp nương nướng ống nứa ăn cùng gà đồi nướng mắc khén.", img: "https://heoquayhongyen.com/wp-content/uploads/2024/08/ga-nuong-tay-bac-com-lam-5.png" },
    { id: 54, name: "Khâu Nhục Lạng Sơn", price: 110000, stock: 12, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.8", desc: "Thịt ba chỉ hấp rục gia vị khoai môn và lá mắc mật đậm đà.", img: "https://statics.vinpearl.com/khau-nhuc-lang-son-5_1631333579.jpg" },
    { id: 55, name: "Vịt Quay Lạng Sơn", price: 130000, stock: 10, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.9", desc: "Thịt vịt béo ngậy nhồi lá mắc mật quay giòn rụm đậm vị.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21Baa-h-CJ-aG01b14N48B6iRhXQCaAaAr65yVsHiU8TOGBONUHFWCsk&s=10" },
    { id: 56, name: "Bánh Đa Kê Hà Nội", price: 20000, stock: 40, region: "Miền Bắc", badge: "Miền Bắc", rating: "4.5", desc: "Món ăn vặt tuổi thơ với hạt kê đồ chín, đậu xanh bào và đường kính.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibKlamaM9OjyB6TmJeFTwIQxtf9o-5IoyhIzN5HWGSM5uBOImOvPLt9xo&s=10" },
    { id: 57, name: "Cà Phê Trứng Hà Nội", price: 45000, stock: 50, region: "Đồ Uống", badge: "Đồ Uống", rating: "5.0", desc: "Cà phê phin đậm đà kết hợp lớp kem trứng đánh bông béo ngậy thơm lừng.", img: "https://dulichmaitravel.vn/upload/images/Cafe%20tr%E1%BB%A9ng%2C%20n%C3%A9t%20ri%C3%AAng%20c%E1%BB%A7a%20H%C3%A0%20N%E1%BB%99i%20(4).png" },
    { id: 58, name: "Trà Mơ Chùa Hương", price: 20000, stock: 60, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.7", desc: "Nước mơ ngâm đường chua ngọt thanh mát giải nhiệt mùa hè.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8w2svik1mKR2XN32S3cSFpMSsSGJyIUxlBmy4CYC7uOa3kQ7uCEWFDxk&s=10" },
    { id: 59, name: "Trà Sấu Hà Nội", price: 20000, stock: 60, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.8", desc: "Nước sấu ngâm gừng thơm giòn chua dịu đặc trưng mùa hè phố cổ.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5I6U4Wtn1eyw2KoR9On6Ke1UnNYD9-m6nk3qKg0DYMuM71tupXU0qNmU&s=10" },
    { id: 60, name: "Trà Shan Tuyết Hà Giang", price: 40000, stock: 40, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.9", desc: "Trà cổ thụ vùng cao thanh vị, chát dịu hậu ngọt sâu.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh070ct0Cp10BTvtz-msZa2n2botpJs_-D8HtEDuMbxkZ9VXMtcRkhA&s=10" },

    // ==================== MIỀN TRUNG (BỔ SUNG) ====================
    { id: 61, name: "Cơm Hến Huế", price: 50000, stock: 30, region: "Miền Trung", badge: "Miền Trung", rating: "4.7", desc: "Cơm nguội trộn thịt hến xào, bắp chuối, da heo chiên giòn và nước hến nóng hổi.", img: "https://static.vinwonders.com/production/com-hen-hue-2.jpg" },
    { id: 62, name: "Bún Hến Huế", price: 35000, stock: 30, region: "Miền Trung", badge: "Miền Trung", rating: "4.7", desc: "Bún tươi trộn hến xào đậm đà mắm ruốc và ớt sa tế cay xè.", img: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/09_2022/batch_bun-hen-tintuconoline.jpg" },
    { id: 63, name: "Bánh Bột Lọc Nhân Tôm Thịt", price: 40000, stock: 40, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Bánh bột lọc trong suốt dai dẻo nhân tôm rim đậm đà gói lá chuối.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZflQXwMaILLl4OtGpctGGM0umSvzdIl57Tbr4kz7dCA&s=10" },
    { id: 64, name: "Bánh Nậm Huế", price: 35000, stock: 35, region: "Miền Trung", badge: "Miền Trung", rating: "4.6", desc: "Bánh bột gạo mỏng mềm phủ tôm chấy đỏ cam hấp dẫn.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBx8pTLpbNmzOw9GKTqFvYMj5HuyZpiEFYSUBl4BxIQ&s=10" },
    { id: 65, name: "Bún Chả Cá Đà Nẵng", price: 45000, stock: 25, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Nước dùng ngọt từ bí đỏ và thơm, ăn kèm chả cá thát lát dai giòn.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-X0uvZSSEd5YhGbvLnYzwcqoF-Zsxk_aws3zWl8lTQ&s=10" },
    { id: 66, name: "Bún Mắm Nêm Đà Nẵng", price: 40000, stock: 25, region: "Miền Trung", badge: "Miền Trung", rating: "4.7", desc: "Bún tươi kèm thịt quay giòn rụm, mắm nêm cá nục thơm lừng.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AypFPd44GnUjclKQJVACgkz3esLbFwBpG20HilzaEw&s=10" },
    { id: 67, name: "Bánh Căn Phan Thiết", price: 35000, stock: 30, region: "Miền Trung", badge: "Miền Trung", rating: "4.6", desc: "Bánh căn đúc khuôn đất nướng giòn, chấm nước mắm cá kho cay nồng.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdI945wNTfh0ETZa_F5AgzhH9Pf-hou_ozDqzvsJYkwA&s=10" },
    { id: 68, name: "Bánh Hỏi Cháo Lòng Heo Quy Nhơn", price: 50000, stock: 20, region: "Miền Trung", badge: "Miền Trung", rating: "4.9", desc: "Bánh hỏi thoa mỡ hẹ ăn kèm đĩa lòng heo luộc tươi ngon.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHb4KEjn5Ksw3A2Qmh-rQdcgFESTfJE2vKwFPSPnqDyw&s=10" },
    { id: 69, name: "Phở Sắn Quảng Nam", price: 45000, stock: 15, region: "Miền Trung", badge: "Miền Trung", rating: "4.5", desc: "Sợi phở làm từ củ sắn dẻo thơm nấu cùng thịt cá nục.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD5bInjjhMf9L_-qqM5og9ejiJHrivjg5MTZqStgkxS4j9H25bgbbnuU&s=10" },
    { id: 70, name: "Cơm Gà Hội An", price: 55000, stock: 25, region: "Miền Trung", badge: "Miền Trung", rating: "4.9", desc: "Hạt cơm vàng ươm nấu nước dùng gà, xé phay thịt gà ta trộn hành tây.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMjcde4KUVadIXIn-Ie0tEPmuPNTxAY6-lYwtyhLzrw&s=10" },
    { id: 71, name: "Cơm Gà Phú Yên", price: 55000, stock: 20, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Cơm chiên mỡ gà thơm lừng chấm nước mắm tỏi ớt siêu cay.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxbXyM3v2K-egMMhnNEx6T5ZA1UPWZoweB8xd_HlKWA&s=10" },
    { id: 72, name: "Bánh Canh Nam Phổ", price: 40000, stock: 20, region: "Miền Trung", badge: "Miền Trung", rating: "4.6", desc: "Nước dùng bánh canh sền sệt màu đỏ gạch từ tôm tươi và chả quết.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGCBI4Ut54tDgEZoxODf4xco6eJTotOSyE0D2UxLhAQ&s=10" },
    { id: 73, name: "Bò Né Nha Trang", price: 150000, stock: 20, region: "Miền Trung", badge: "Miền Trung", rating: "4.8", desc: "Bò xèo chảo nóng hổi kèm trứng ốp la, pate béo ngậy và bánh mì.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvrlylvwpymrmRBm23NHOL4f_nTMDGy1wSUoUTVTo2A&s=10" },
    { id: 74, name: "Trà Cung Đình Huế", price: 30000, stock: 50, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.8", desc: "Trà thảo mộc từ 16 vị thảo dược quý thanh nhiệt, bổ dưỡng.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9dO4lyKo6JD8YNkxFBwAQOHSTwMwUn7nJsJ5sZJffA&s=10" },
    { id: 75, name: "Nước Mót Hội An", price: 25000, stock: 70, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.9", desc: "Trà thảo mộc chanh sả quế thơm mát dịu bôi mát tâm hồn.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_d3z-GBM2w9b5F8XxSrRcoX0qr3J9CsH4Jw0z12GRw&s=10" },

    // ==================== MIỀN NAM & KHÁC (BỔ SUNG) ====================
    { id: 76, name: "Bánh Canh Cua Sài Gòn", price: 65000, stock: 20, region: "Miền Nam", badge: "Miền Nam", rating: "4.9", desc: "Nước súp sền sệt béo bùi tôm cua, chả cá và huyết vịt.", img: "https://static.vinwonders.com/production/banh-canh-cua-sai-gon-1.jpg" },
    { id: 77, name: "Bún Thịt Nướng Chả Giò", price: 45000, stock: 30, region: "Miền Nam", badge: "Miền Nam", rating: "4.8", desc: "Thịt nướng ướp mật ong chiên vàng, chả giòn rụm chan nước mắm chua ngọt.", img: "https://file.hstatic.net/200000700229/article/bun-thit-nuong-cha-gio-1_049ecb6eac20407ab13217579cdb1c73.jpg" },
    { id: 78, name: "Hủ Tiếu Sa Đéc", price: 50000, stock: 20, region: "Miền Nam", badge: "Miền Nam", rating: "4.7", desc: "Sợi hủ tiếu trong dai đặc trưng xứ Đồng Tháp nêm nước sốt sền sệt.", img: "https://tse4.mm.bing.net/th/id/OIP.e-kTobT9xmR8dpnymc1E8QHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 79, name: "Lẩu Cá Linh Hoa Điên Điển", price: 195000, stock: 8, region: "Miền Nam", badge: "Miền Nam", rating: "5.0", desc: "Đặc sản mùa nước nổi Miền Tây vị chua thanh nhẹ quyến rũ.", img: "https://yummyday.vn/uploads/images/lau-ca-linh-4.jpg" },
    { id: 80, name: "Bánh Tráng Trộn Sài Gòn", price: 25000, stock: 50, region: "Miền Nam", badge: "Miền Nam", rating: "4.7", desc: "Bánh tráng trộn bò khô, xoài xanh, trứng cút và tôm chấy siêu cuốn.", img: "https://i.pinimg.com/originals/1d/62/25/1d6225c0382eb0adf51533f7e3ffb244.jpg" },
    { id: 81, name: "Bún Nước Lèo Trà Vinh", price: 50000, stock: 20, region: "Miền Nam", badge: "Miền Nam", rating: "4.8", desc: "Nước lèo nấu từ mắm bò hóc đậm vị ăn cùng heo quay giòn da.", img: "https://tse3.mm.bing.net/th/id/OIP.QoC5Y3Az8tU_RT_keJRqLgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 82, name: "Bánh Mì Sài Gòn Đầy Đủ", price: 30000, stock: 40, region: "Miền Nam", badge: "Miền Nam", rating: "4.9", desc: "Vỏ giòn rụm nhân pate béo, giò chả, xá xíu và dưa chua.", img: "https://tse3.mm.bing.net/th/id/OIP.m0sxIXEog560zUp2Fiq7CwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 83, name: "Bò Kho Bánh Mì", price: 55000, stock: 25, region: "Miền Nam", badge: "Miền Nam", rating: "4.8", desc: "Thịt nạm bò hầm mềm nhừ ngấm gia vị ngũ vị hương và húng cây.", img: "https://giadinh.mediacdn.vn/296230595582509056/2022/5/11/278582337-1165134994318038-526-6612-6552-1652155696-1652234228489-1652234229079612406569.jpg" },
    { id: 84, name: "Bún Suông Trà Vinh", price: 55000, stock: 15, region: "Miền Nam", badge: "Miền Nam", rating: "4.6", desc: "Chả tôm quết hình con suông dai ngon ngậy trong nước dùng me chua nhẹ.", img: "https://afamilycdn.com/150157425591193600/2022/12/27/anh-quynh-huong-1-16721165445491927223411-1672150454796-1672150454973221584951.jpg" },
    { id: 85, name: "Bánh Tằm Cà Mau", price: 45000, stock: 20, region: "Miền Nam", badge: "Miền Nam", rating: "4.7", desc: "Sợi bánh tằm to mềm chan sốt xíu mại cay thơm phức.", img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/15/1216925/275139146_2477317185.jpg" },
    { id: 86, name: "Bánh Tráng Nướng Đà Lạt", price: 25000, stock: 35, region: "Miền Nam", badge: "Miền Nam", rating: "4.8", desc: "Bánh tráng nướng than hồng phủ trứng, xúc xích, phô mai thơm phức.", img: "https://bepxua.vn/wp-content/uploads/2021/09/vshjsfdghjhvc.jpg" },
    { id: 87, name: "Dừa Tắc Sài Gòn", price: 25000, stock: 80, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.8", desc: "Nước dừa tươi ngọt mát hòa quyện hương tắc thơm lừng và cơm dừa dẻo.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHQkeHmjX77015fIKE9c9Ka70fAN4Rd8afnvPbQRiAg&s=10" },
    { id: 88, name: "Rau Má Đậu Xanh Sài Gòn", price: 35000, stock: 70, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.8", desc: "Rau má thanh mát xay cùng đậu xanh nhuyễn bùi béo.", img: "https://bepxua.vn/wp-content/uploads/2021/03/5-cong-thuc-rau-ma-mix-va-luu-y-khi-pha-che-3.jpg" },
    { id: 89, name: "Sữa Đậu Nành Đà Lạt", price: 20000, stock: 60, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.7", desc: "Sữa đậu nành nóng hổi béo nhẹ thơm phức lá dứa.", img: "https://tse1.explicit.bing.net/th/id/OIP.Ax_ciNPz8dxWphRcqmMVSQHaHv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 90, name: "Trà Dâu Tây Đà Lạt", price: 65000, stock: 50, region: "Đồ Uống", badge: "Đồ Uống", rating: "4.9", desc: "Trà đen đậm vị kết hợp mứt dâu tươi chua ngọt giải nhiệt cực đã.", img: "https://riverwayhotel.vn/images/menus/2024/06/10/tra-dau-ghep-anh-scaled-83.jpg" },
    { id: 91, name: "Chè Bưởi An Giang", price: 45000, stock: 30, region: "Tráng Miệng", badge: "Tráng Miệng", rating: "4.8", desc: "Cùi bưởi giòn sần sật phối đậu xanh dẻo mịn và nước cốt dừa béo ngậy.", img: "https://90sstore.vn/wp-content/uploads/2022/08/cach-nau-che-buoi-an-giang.png" },
    { id: 92, name: "Chè Ba Màu Nam Bộ", price: 45000, stock: 35, region: "Tráng Miệng", badge: "Tráng Miệng", rating: "4.7", desc: "Đậu đỏ, đậu xanh, bánh đắng lá nếp ngập trong nước cốt dừa béo thơm.", img: "https://tse2.mm.bing.net/th/id/OIP.WTPrj4sA3OMKGVbsWSewjgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
];

// ==========================================
// HỆ THỐNG QUẢN LÝ CỬA HÀNG ẨM THỰC 3 MIỀN
// ==========================================

// Giữ tồn kho đã lưu (sau khi có đơn hàng), các thông tin khác lấy từ productsData
const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
let products = productsData.map(p => {
    const saved = savedProducts.find(s => s.id === p.id);
    return saved ? { ...p, stock: saved.stock } : p;
});
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = 'all';

// Mã voucher: DISCOUNT10 giảm 10% tiền hàng, FREESHIP miễn phí vận chuyển (tính ở bước thanh toán)
const VOUCHERS = {
    DISCOUNT10: { text: 'Giảm 10% tiền hàng', percent: 10 },
    FREESHIP: { text: 'Miễn phí vận chuyển', freeShip: true }
};
let voucherCode = VOUCHERS[localStorage.getItem('appliedVoucher')] ? localStorage.getItem('appliedVoucher') : null;

// Áp dụng giao diện sáng/tối đã lưu ngay khi tải trang (tránh bị nháy)
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

if (products.length > 0) {
    localStorage.setItem('products', JSON.stringify(products));
}

// --- KHỞI TẠO KHI TẢI TRANG ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (document.getElementById('product-grid')) renderProducts(products);
    updateCartUI();
    updateWishlistUI();
    startCountdown();
    initScrollListener();
    if (document.getElementById('order-history-list')) renderOrderHistory();
    if (document.getElementById('admin-product-table')) renderAdminDashboard();
});

// --- CHẾ ĐỘ THÊM/ĐỔI THEME (LIGHT / DARK) ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// --- ĐẾM NGƯỢC THỜI GIAN FLASH SALE ---
function startCountdown() {
    let hours = 2, minutes = 45, seconds = 18;
    const hEl = document.getElementById('timer-hours');
    const mEl = document.getElementById('timer-minutes');
    const sEl = document.getElementById('timer-seconds');

    if (!hEl || !mEl || !sEl) return;

    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) hours--;
            }
        }
        hEl.textContent = String(hours).padStart(2, '0');
        mEl.textContent = String(minutes).padStart(2, '0');
        sEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// --- TÌM KIẾM, LỌC KHOẢNG GIÁ & SẮP XẾP SẢN PHẨM ---
function filterProducts() {
    applyFilters();

    // Tự động cuộn mượt xuống phần danh sách món khi đang nhập tìm kiếm
    const searchInput = document.getElementById('search-input');
    const productSection = document.getElementById('dishes');
    if (searchInput && searchInput.value.trim() && productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function filterByCategory(categoryKey, el) {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => card.classList.remove('active'));
    if (el) el.classList.add('active');

    currentCategory = categoryKey;
    applyFilters();

    const productSection = document.getElementById('dishes');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function applyFilters() {
    let result = [...products];

    // Lọc theo Danh mục Vùng Miền
    if (currentCategory !== 'all') {
        result = result.filter(p => {
            const region = (p.region || '').toLowerCase();
            const badge = (p.badge || '').toLowerCase();
            const key = currentCategory.toLowerCase();
            return region.includes(key) || badge.includes(key);
        });
    }

    // Lọc theo Tên/Từ khóa
    const searchInput = document.getElementById('search-input');
    if (searchInput && searchInput.value.trim() !== '') {
        const keyword = searchInput.value.toLowerCase().trim();
        result = result.filter(p => p.name.toLowerCase().includes(keyword));
    }

    // Lọc theo Khoảng Giá
    const priceFilter = document.getElementById('price-range-filter');
    if (priceFilter) {
        const val = priceFilter.value;
        if (val === 'under-50') result = result.filter(p => p.price < 50000);
        else if (val === '50-100') result = result.filter(p => p.price >= 50000 && p.price <= 100000);
        else if (val === 'above-100') result = result.filter(p => p.price > 100000);
    }

    // Sắp xếp Sản Phẩm
    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) {
        const sortVal = sortFilter.value;
        if (sortVal === 'price-asc') result.sort((a, b) => a.price - b.price);
        else if (sortVal === 'price-desc') result.sort((a, b) => b.price - a.price);
        else if (sortVal === 'rating-desc') result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    renderProducts(result);
}

// --- RENDER SẢN PHẨM & ĐÁNH GIÁ ---
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.2rem; padding: 20px;">Không tìm thấy món ăn phù hợp!</p>';
        return;
    }

    items.forEach(p => {
        const productReviews = reviews.filter(r => r.productId === p.id);
        const isLiked = wishlist.includes(p.id);
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.innerHTML = `
            <div class="dish-card__img-wrapper">
                <img src="${p.img}" alt="${p.name}" class="dish-card__img">
                <span class="dish-badge">${p.badge || p.region || 'Đặc Sản'}</span>
                <button class="btn-quickview" onclick="openQuickView(${p.id})"><i class="fa-solid fa-eye"></i> Xem nhanh</button>
                <button class="btn-wishlist ${isLiked ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="dish-card__content">
                <h4 class="dish-card__title">${p.name}</h4>
                <p class="dish-card__desc">${p.desc}</p>
                <p class="dish-card__info"><strong>Dự tính còn bán:</strong> ${p.stock ?? 0} suất</p>
                <p class="dish-card__rating"> ${p.rating} / 5 ⭐</p>
                <div class="dish-card__footer">
                    <span class="dish-card__price">${p.price.toLocaleString('vi-VN')} đ</span>
                    <button class="btn-add-dish" onclick="addToCart(${p.id})">+ Thêm vào giỏ</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- TÍNH NĂNG XEM NHANH (QUICK VIEW) ---
function openQuickView(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    const modal = document.getElementById('quickview-modal');
    const content = document.getElementById('quickview-content');
    if (!modal || !content) return;

    content.innerHTML = `
        <h3 style="margin-bottom: 10px;">${p.name}</h3>
        <div class="quickview-body">
            <img src="${p.img}" alt="${p.name}" class="quickview-img">
            <div class="quickview-info">
                <p><strong>Vùng miền:</strong> ${p.region}</p>
                <p><strong>Đánh giá:</strong> ⭐ ${p.rating} / 5</p>
                <p><strong>Dự tính còn bán:</strong> ${p.stock} suất</p>
                <p style="margin: 10px 0; color: var(--text-muted);">${p.desc}</p>
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">${p.price.toLocaleString('vi-VN')} đ</h3>
                <button class="btn-add-dish" onclick="addToCart(${p.id}); closeQuickViewModal();">+ Thêm vào giỏ hàng</button>
            </div>
        </div>
    `;
    modal.classList.add('open');
}

function closeQuickViewModal() {
    const modal = document.getElementById('quickview-modal');
    if (modal) modal.classList.remove('open');
}

function closeQuickView(e) {
    if (e.target.id === 'quickview-modal') closeQuickViewModal();
}

// --- YÊU THÍCH (WISHLIST) ---
function toggleWishlist(productId, btnEl) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        if (btnEl) btnEl.classList.remove('active');
        showToast('Đã xóa món khỏi danh sách yêu thích');
    } else {
        wishlist.push(productId);
        if (btnEl) btnEl.classList.add('active');
        showToast('Đã thêm vào danh sách yêu thích!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    if (document.getElementById('product-grid')) applyFilters();
}

function updateWishlistUI() {
    const countEl = document.getElementById('wishlist-count');
    if (countEl) countEl.textContent = wishlist.length;

    const container = document.getElementById('wishlist-items-container');
    if (!container) return;
    container.innerHTML = '';

    if (wishlist.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px 0;">Chưa có món ăn yêu thích nào!</p>';
        return;
    }

// Lấy key wishlist riêng cho user đang đăng nhập
function getWishlistKey() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return null;
    return 'wishlist-' + currentUser.id;
}

// Lấy danh sách ID sản phẩm yêu thích của user hiện tại
function getWishlist() {
    const key = getWishlistKey();
    if (!key) return [];
    return JSON.parse(localStorage.getItem(key)) || [];
}

// 1. Kiểm tra và cập nhật trạng thái tim đỏ/trắng cho tất cả sản phẩm trên trang shop
function checkWishlistUI() {
    const wishlist = getWishlist();
    
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        const productId = Number(btn.getAttribute('data-id'));
        if (wishlist.includes(productId)) {
            btn.classList.add('active');
            btn.innerHTML = '❤️'; // Tim đỏ / đầy
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '🤍'; // Tim trắng / rỗng
        }
    });
}

// Lắng nghe khi localStorage thay đổi (ví dụ: xóa wishlist ở trang Account)
window.addEventListener('storage', function(e) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    // Nếu key thay đổi đúng là wishlist của user hiện tại
    if (e.key === 'wishlist-' + currentUser.id) {
        checkWishlistUI(); // Cập nhật lại toàn bộ trạng thái tim đỏ/trắng trên trang Shop
        if (typeof updateWishlistUI === 'function') {
            updateWishlistUI();
        }
    }
});

// 2. Xử lý khi bấm nút tim ở trang shop
function toggleWishlist(productId, btnEl) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        if (typeof showMessage === 'function') {
            showMessage('❌ Vui lòng đăng nhập để sử dụng tính năng yêu thích!', 'error');
        } else {
            alert('Vui lòng đăng nhập để sử dụng tính năng yêu thích!');
        }
        window.location.href = 'login.html';
        return;
    }

    const key = getWishlistKey();
    let wishlist = JSON.parse(localStorage.getItem(key)) || [];
    productId = Number(productId);
    
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        // Đã có -> Xóa khỏi wishlist
        wishlist.splice(index, 1);
        if (btnEl) {
            btnEl.classList.remove('active');
            btnEl.innerHTML = '🤍';
        }
        if (typeof showToast === 'function') showToast('Đã xóa món khỏi danh sách yêu thích');
    } else {
        // Chưa có -> Thêm vào wishlist
        wishlist.push(productId);
        if (btnEl) {
            btnEl.classList.add('active');
            btnEl.innerHTML = '❤️';
        }
        if (typeof showToast === 'function') showToast('Đã thêm vào danh sách yêu thích!');
    }
    
    // Lưu vào localStorage theo đúng key của user
    localStorage.setItem(key, JSON.stringify(wishlist));
    
    // Cập nhật lại giao diện tổng thể
    updateWishlistUI();
    if (document.getElementById('product-grid')) applyFilters();
}

// 3. Cập nhật giao diện drawer hoặc tab wishlist ở trang shop
function updateWishlistUI() {
    const wishlist = getWishlist();
    const countEl = document.getElementById('wishlist-count');
    if (countEl) countEl.textContent = wishlist.length;

    const container = document.getElementById('wishlist-items-container');
    if (!container) return;
    container.innerHTML = '';

    if (wishlist.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px 0;">Chưa có món ăn yêu thích nào!</p>';
        return;
    }
}

    wishlist.forEach(id => {
        const item = products.find(p => p.id === id);
        if (!item) return;
        container.innerHTML += `
            <div class="cart-item-row">
                <div style="display: flex; gap: 10px; align-items: center;">
                    <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <div style="font-size: 0.95rem;"><strong>${item.name}</strong></div>
                        <div style="color: var(--secondary-color); font-size: 0.9rem;">${item.price.toLocaleString('vi-VN')} đ</div>
                        <button class="btn-add-dish" onclick="addToCart(${item.id})" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 4px;">+ Thêm giỏ</button>
                    </div>
                </div>
                <button onclick="toggleWishlist(${item.id})" style="color: red; border:none; background:none; cursor:pointer; font-size: 1.1rem;" title="Xóa">✕</button>
            </div>
        `;
    });
}

function toggleWishlistDrawer(open) {
    const drawer = document.getElementById('wishlist-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer || !overlay) return;

    if (open === true || (open !== false && !drawer.classList.contains('open'))) {
        closeAllDrawers();
        drawer.classList.add('open');
        overlay.classList.add('open');
    } else {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
    }
}

function closeAllDrawers() {
    const cartDrawer = document.getElementById('cart-drawer');
    const wishlistDrawer = document.getElementById('wishlist-drawer');
    const overlay = document.getElementById('cart-overlay');

    if (cartDrawer) cartDrawer.classList.remove('open');
    if (wishlistDrawer) wishlistDrawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
}

// --- THÔNG BÁO TOAST ---
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// --- QUẢN LÝ GIỎ HÀNG & MÃ GIẢM GIÁ ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock <= 0) {
        alert('Sản phẩm đã hết hàng!');
        return;
    }
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (cartItem.quantity >= product.stock) {
            alert('Đã vượt quá số lượng sản phẩm dự tính bán!');
            return;
        }
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
    toggleCartDrawer(true);
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    const product = products.find(p => p.id === productId);
    if (!item || !product) return;

    if (change > 0 && item.quantity >= product.stock) {
        alert('Số lượng sản phẩm mua cao hơn dự tính còn bán!');
        return;
    }

    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
    saveCart();
}

// Áp dụng mã, hoặc bỏ mã nếu đang có mã (mã được lưu để trang thanh toán dùng lại)
function applyVoucher() {
    const input = document.getElementById('voucher-code-input');
    if (voucherCode) {
        voucherCode = null;
        localStorage.removeItem('appliedVoucher');
        if (input) input.value = '';
        showToast('Đã bỏ mã giảm giá');
    } else {
        const code = input ? input.value.trim().toUpperCase() : '';
        if (!VOUCHERS[code]) {
            alert('Mã giảm giá không hợp lệ!');
            return;
        }
        voucherCode = code;
        localStorage.setItem('appliedVoucher', code);
        showToast(`Đã áp dụng ${code}: ${VOUCHERS[code].text}`);
    }
    updateCartUI();
}

function updateVoucherUI() {
    const input = document.getElementById('voucher-code-input');
    const btn = document.getElementById('btn-voucher');
    if (!input || !btn) return;
    if (voucherCode) input.value = voucherCode;
    input.disabled = !!voucherCode;
    btn.textContent = voucherCode ? 'Bỏ mã' : 'Áp dụng';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

// --- CẬP NHẬT GIAO DIỆN GIỎ HÀNG (PHẦN BỔ SUNG ĐÃ HOÀN THIỆN) ---
function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    const container = document.getElementById('cart-items-container');
    if (!container) return;
    updateVoucherUI();
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px 0;">Giỏ hàng của bạn đang trống!</p>';
        document.getElementById('cart-discount-amount').textContent = '0 đ';
        document.getElementById('cart-total-price').textContent = '0 đ';
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        container.innerHTML += `
            <div class="cart-item-row">
                <div style="display: flex; gap: 10px; align-items: center;">
                    <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <div style="font-weight: 600; font-size: 0.9rem;">${item.name}</div>
                        <div style="color: var(--secondary-color); font-size: 0.9rem;">${item.price.toLocaleString('vi-VN')} đ</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    });

    const voucher = VOUCHERS[voucherCode];
    const discountAmount = voucher && voucher.percent ? Math.round(subtotal * voucher.percent / 100) : 0;
    const total = subtotal - discountAmount;

    const discountEl = document.getElementById('cart-discount-amount');
    const totalEl = document.getElementById('cart-total-price');
    if (discountEl) discountEl.textContent = voucher && voucher.freeShip ? 'Miễn phí ship' : discountAmount.toLocaleString('vi-VN') + ' đ';
    if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN') + ' đ';
}

function toggleCartDrawer(forceOpen = null) {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('open');
    if (forceOpen === true || (forceOpen === null && !isOpen)) {
        closeAllDrawers();
        drawer.classList.add('open');
        overlay.classList.add('open');
    } else {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
    }
}

// --- CHUYỂN SANG TRANG THANHTOAN.HTML ---
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống! Vui lòng chọn món trước khi thanh toán.');
        return;
    }
    window.location.href = 'thanhtoan.html';
}

// --- SCROLL TO TOP LÊN ĐẦU TRANG ---
function initScrollListener() {
    const btn = document.getElementById('btn-back-to-top');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- LỊCH SỬ MUA HÀNG VÀ ĐÁNH GIÁ ---
function renderOrderHistory() {
    const container = document.getElementById('order-history-list');
    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = '<p>Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    container.innerHTML = orders.map(o => `
        <div style="border: 1px solid var(--border-color); padding: 15px; border-radius: 8px; margin-bottom: 15px; background: var(--card-bg);">
            <h4>Mã Đơn: #${o.id} - <span style="color: green;">${o.status}</span></h4>
            <p><small>Ngày đặt: ${o.date}</small></p>
            <p><strong>Người nhận:</strong> ${o.customer.name} (${o.customer.phone}) - ${o.customer.address}</p>
            <hr style="margin: 8px 0;">
            <div>
                ${o.items.map(i => `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin: 5px 0;">
                        <span>${i.name} x ${i.quantity}</span>
                        <button onclick="openReviewModal(${i.id}, '${i.name}')" style="font-size:0.8rem; background:#28a745; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Viết Đánh Giá</button>
                    </div>
                `).join('')}
            </div>
            <p style="text-align:right; font-weight:bold; color:var(--secondary-color); margin-top:8px;">Tổng tiền: ${o.total.toLocaleString('vi-VN')} đ</p>
        </div>
    `).join('');
}

function openReviewModal(prodId, prodName) {
    const comment = prompt(`Đánh giá cho sản phẩm: ${prodName}\nNhập nhận xét của bạn:`);
    const rating = prompt(`Nhập số sao đánh giá (từ 1 đến 5):`, "5");
    if (comment && rating) {
        reviews.push({ productId: prodId, comment, rating: Number(rating), date: new Date().toLocaleDateString('vi-VN') });
        localStorage.setItem('reviews', JSON.stringify(reviews));
        alert('Cảm ơn bạn đã đánh giá!');
        location.reload();
    }
}

// --- ADMIN CONTROL ---
function renderAdminDashboard() {
    const table = document.getElementById('admin-product-table');
    const totalRevenueEl = document.getElementById('admin-total-revenue');
    const totalSoldEl = document.getElementById('admin-total-sold');
    if (!table) return;

    let totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    let totalSold = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0);

    if (totalRevenueEl) totalRevenueEl.textContent = totalRevenue.toLocaleString('vi-VN') + ' đ';
    if (totalSoldEl) totalSoldEl.textContent = totalSold + ' sản phẩm';

    table.innerHTML = products.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.price.toLocaleString('vi-VN')} đ</td>
            <td><strong>${p.stock}</strong></td>
            <td><button onclick="updateStock(${p.id})" style="background:#007bff; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Cập nhật kho</button></td>
        </tr>
    `).join('');
}

function updateStock(id) {
    const newStock = prompt("Nhập số lượng sản phẩm dự tính bán mới:");
    if (newStock !== null) {
        const prod = products.find(p => p.id === id);
        if (prod) {
            prod.stock = parseInt(newStock) || 0;
            localStorage.setItem('products', JSON.stringify(products));
            renderAdminDashboard();
        }
    }
}