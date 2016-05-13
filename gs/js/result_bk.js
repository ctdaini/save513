        function account(dj) {
            //定义无伤残 
            var ylf = parseInt(document.getElementById("ylf").value, 10); //医疗费
            var ylf_10 = parseInt(document.getElementById("ylf_10").value, 10); //医疗费
            var ylf_09 = parseInt(document.getElementById("ylf_09").value, 10); //医疗费
            var ylf_08 = parseInt(document.getElementById("ylf_08").value, 10); //医疗费
            var ylf_07 = parseInt(document.getElementById("ylf_07").value, 10); //医疗费
            var ylf_06 = parseInt(document.getElementById("ylf_06").value, 10); //医疗费
            var ylf_05 = parseInt(document.getElementById("ylf_05").value, 10); //医疗费
            var ylf_04 = parseInt(document.getElementById("ylf_04").value, 10); //医疗费
            var ylf_03 = parseInt(document.getElementById("ylf_03").value, 10); //医疗费
            var ylf_02 = parseInt(document.getElementById("ylf_02").value, 10); //医疗费
            var ylf_01 = parseInt(document.getElementById("ylf_01").value, 10); //医疗费
            var gwylf_die = parseInt(document.getElementById("gwylf_die").value, 10); //工亡医疗费
            //住院天数
            var zyts = parseInt(document.getElementById("zyts").value, 10); //住院天数
            var zyts_10 = parseInt(document.getElementById("zyts_10").value, 10); //住院天数
            var zyts_09 = parseInt(document.getElementById("zyts_09").value, 10); //住院天数
            var zyts_08 = parseInt(document.getElementById("zyts_08").value, 10); //住院天数
            var zyts_07 = parseInt(document.getElementById("zyts_07").value, 10); //住院天数
            var zyts_06 = parseInt(document.getElementById("zyts_06").value, 10); //住院天数
            var zyts_05 = parseInt(document.getElementById("zyts_05").value, 10); //住院天数
            var zyts_04 = parseInt(document.getElementById("zyts_04").value, 10); //住院天数
            var zyts_03 = parseInt(document.getElementById("zyts_03").value, 10); //住院天数
            var zyts_02 = parseInt(document.getElementById("zyts_02").value, 10); //住院天数
            var zyts_01 = parseInt(document.getElementById("zyts_01").value, 10); //住院天数
            var zyts_die = parseInt(document.getElementById("zyts_die").value, 10); //住院天数
            //交通费
            var jtf = parseInt(document.getElementById("jtf").value, 10);
            var jtf_10 = parseInt(document.getElementById("jtf_10").value, 10); //交通费
            var jtf_09 = parseInt(document.getElementById("jtf_09").value, 10); //交通费
            var jtf_08 = parseInt(document.getElementById("jtf_08").value, 10); //交通费
            var jtf_07 = parseInt(document.getElementById("jtf_07").value, 10); //交通费
            var jtf_06 = parseInt(document.getElementById("jtf_06").value, 10); //交通费
            var jtf_05 = parseInt(document.getElementById("jtf_05").value, 10); //交通费
            var jtf_04 = parseInt(document.getElementById("jtf_04").value, 10); //交通费
            var jtf_03 = parseInt(document.getElementById("jtf_03").value, 10); //交通费
            var jtf_02 = parseInt(document.getElementById("jtf_02").value, 10); //交通费
            var jtf_01 = parseInt(document.getElementById("jtf_01").value, 10); //交通费
            var jtf_die = parseInt(document.getElementById("jtf_die").value, 10); //交通费
            //停工留薪期
            var tglxq = parseInt(document.getElementById("tglxq").value, 10); //停工留薪期
            var tglxq_10 = parseInt(document.getElementById("tglxq_10").value, 10); //停工留薪期
            var tglxq_09 = parseInt(document.getElementById("tglxq_09").value, 10); //停工留薪期
            var tglxq_08 = parseInt(document.getElementById("tglxq_08").value, 10); //停工留薪期
            var tglxq_07 = parseInt(document.getElementById("tglxq_07").value, 10); //停工留薪期
            var tglxq_06 = parseInt(document.getElementById("tglxq_06").value, 10); //停工留薪期
            var tglxq_05 = parseInt(document.getElementById("tglxq_05").value, 10); //停工留薪期
            var tglxq_04 = parseInt(document.getElementById("tglxq_04").value, 10); //停工留薪期
            var tglxq_03 = parseInt(document.getElementById("tglxq_03").value, 10); //停工留薪期
            var tglxq_02 = parseInt(document.getElementById("tglxq_02").value, 10); //停工留薪期
            var tglxq_01 = parseInt(document.getElementById("tglxq_01").value, 10); //停工留薪期
            //原工资
            var ygz = parseInt(document.getElementById("ygz").value, 10);
            var ygz_10 = parseInt(document.getElementById("ygz_10").value, 10); //原工资
            var ygz_09 = parseInt(document.getElementById("ygz_09").value, 10); //原工资
            var ygz_08 = parseInt(document.getElementById("ygz_08").value, 10); //原工资
            var ygz_07 = parseInt(document.getElementById("ygz_07").value, 10); //原工资
            var ygz_06 = parseInt(document.getElementById("ygz_06").value, 10); //原工资
            var ygz_05 = parseInt(document.getElementById("ygz_05").value, 10); //原工资
            var ygz_04 = parseInt(document.getElementById("ygz_04").value, 10); //原工资
            var ygz_03 = parseInt(document.getElementById("ygz_03").value, 10); //原工资
            var ygz_02 = parseInt(document.getElementById("ygz_02").value, 10); //原工资
            var ygz_01 = parseInt(document.getElementById("ygz_01").value, 10); //原工资
            var ygz_die = parseInt(document.getElementById("ygz_die").value, 10); //原工资
            //护理费
            var hlf00 = parseInt(document.getElementById("hlf00").value, 10);
            var hlf10 = parseInt(document.getElementById("hlf10").value, 10); //护理费
            var hlf09 = parseInt(document.getElementById("hlf09").value, 10); //护理费
            var hlf08 = parseInt(document.getElementById("hlf08").value, 10); //护理费
            var hlf07 = parseInt(document.getElementById("hlf07").value, 10); //护理费
            var hlf06 = parseInt(document.getElementById("hlf06").value, 10); //护理费
            var hlf05 = parseInt(document.getElementById("hlf05").value, 10); //护理费
            var hlf04 = parseInt(document.getElementById("hlf04").value, 10); //护理费
            var hlf03 = parseInt(document.getElementById("hlf03").value, 10); //护理费
            var hlf02 = parseInt(document.getElementById("hlf02").value, 10); //护理费
            var hlf01 = parseInt(document.getElementById("hlf01").value, 10); //护理费
            var hlf_die = parseInt(document.getElementById("hlf_die").value, 10); //护理费
            //辅助器具费
            var fzqjfy_06 = parseInt(document.getElementById("fzqjfy_06").value, 10);
            var fzqjfy_05 = parseInt(document.getElementById("fzqjfy_05").value, 10); //辅助器具费用
            var fzqjfy_04 = parseInt(document.getElementById("fzqjfy_04").value, 10); //辅助器具费用
            var fzqjfy_03 = parseInt(document.getElementById("fzqjfy_03").value, 10); //辅助器具费用
            var fzqjfy_02 = parseInt(document.getElementById("fzqjfy_02").value, 10); //辅助器具费用
            var fzqjfy_01 = parseInt(document.getElementById("fzqjfy_01").value, 10); //辅助器具费用
            //其他亲属2   
            var qtqso04 = parseInt(document.getElementById("qtqso04").value, 10);
            var qtqso03 = parseInt(document.getElementById("qtqso03").value, 10); //其他亲属2
            var qtqso02 = parseInt(document.getElementById("qtqso02").value, 10); //其他亲属2
            var qtqso01 = parseInt(document.getElementById("qtqso01").value, 10); //其他亲属2
            var qtqsodie = parseInt(document.getElementById("qtqsodie").value, 10); //其他亲属2
            //其他亲属1
            var qtqs04 = parseInt(document.getElementById("qtqs04").value, 10);
            var qtqs03 = parseInt(document.getElementById("qtqs03").value, 10);
            var qtqs02 = parseInt(document.getElementById("qtqs02").value, 10);
            var qtqs01 = parseInt(document.getElementById("qtqs01").value, 10);
            var qtqsdie = parseInt(document.getElementById("qtqsdie").value, 10);
            //计算结果   
            if (dj == "0") {

                var res_00 = ylf + (zyts * 35) + jtf + (tglxq * ygz) + hlf00;
                document.getElementById('test_jm').innerHTML = show_alert(res_00);
            } else if (dj == "10") {
                var res_100 = ylf_10 + (zyts_10 * 35) + jtf_10 + (tglxq_10 * ygz_10) + hlf10; //计算十级伤残中的无伤残总额
                var res_10 = res_100 + (ygz_10 * 7) + (ygz_10 * 1) + (ygz_10 * 4); //2016_03_23
                document.getElementById('test_jm').innerHTML = show_alert(res_10);
            } else if (dj == "09") {
                var res_090 = ylf_09 + (zyts_09 * 35) + jtf_09 + (tglxq_09 * ygz_09) + hlf09; //计算无伤残总额
                var res_09 = res_090 + (ygz_09 * 9) + ygz_09 * 2 + ygz_09 * 8;
                document.getElementById('test_jm').innerHTML = show_alert(res_09);
            } else if (dj == "08") {
                var ycx_08 = ygz_08 * 11 + ygz_08 * 4 + ygz_08 * 15; //一次性伤残补助金、工伤医疗金、就业补助金
                var res_080 = ylf_08 + (zyts_08 * 35) + jtf_08 + (tglxq_08 * ygz_08) + hlf08; //计算无伤残总额
                var res_08 = res_080 + ycx_08;
                document.getElementById('test_jm').innerHTML = show_alert(res_08);
            } else if (dj == "07") {
                var ycx_07 = ygz_07 * 13 + ygz_07 * 6 + ygz_07 * 25; //一次性伤残补助金、工伤医疗金、就业补助金
                var res_070 = ylf_07 + (zyts_07 * 35) + jtf_07 + (tglxq_07 * ygz_07) + hlf07; //计算无伤残总额
                var res_07 = res_070 + ycx_07;
                document.getElementById('test_jm').innerHTML = show_alert(res_07);
            } else if (dj == "06") {
                var ycx_06 = ygz_06 * 16 + ygz_06 * 8 + ygz_06 * 40; //一次性伤残补助金、工伤医疗金、就业补助金
                var scjt_06 = ygz_06 * 0.6;
                var res_060 = ylf_06 + (zyts_06 * 35) + jtf_06 + (tglxq_06 * ygz_06) + hlf06; //计算无伤残总额
                var res_06 = res_060 + ycx_06 + fzqjfy_06 + scjt_06;
                document.getElementById('test_jm').innerHTML = show_alert56(res_06, scjt_06);
            } else if (dj == "05") {
                var ycx_05 = ygz_05 * 18 + ygz_05 * 10 + ygz_05 * 50;
                var scjt_05 = ygz_05 * 0.7;
                var res_050 = ylf_05 + (zyts_05 * 35) + jtf_05 + (tglxq_05 * ygz_05) + hlf05; //计算无伤残总额
                var res_05 = res_050 + ycx_05 + fzqjfy_05 + scjt_05;
                document.getElementById('test_jm').innerHTML = show_alert56(res_05, scjt_05);
            } else if (dj == "04") {

                var ycx_04 = ygz_04 * 21; //一次性伤残补助金
                var scjt_04 = ygz_04 * 0.75;
                var gyqsfxj_04 = GetSel_po_4() * ygz_04 + qtqs04 * ygz_04 * 0.3 + qtqso04 * ygz_04 * 0.4; //供养抚恤金
                var res_040 = ylf_04 + (zyts_04 * 35) + jtf_04 + (tglxq_04 * ygz_04) + hlf04; //计算无伤残总额
                var res_04 = res_040 + ycx_04 + fzqjfy_04 + scjt_04 + GetSel_hldj4() + GetSelValue4() + gyqsfxj_04;
                document.getElementById('test_jm').innerHTML = show_alert14(res_04, scjt_04, GetSel_hldj4(), gyqsfxj_04);
            } else if (dj == "03") {
                var scjt_03 = ygz_03 * 0.8;
                var gyqsfxj_03 = GetSel_po_3() * ygz_03 + qtqs03 * ygz_03 * 0.3 + qtqso03 * ygz_03 * 0.4; //供养抚恤金
                var res_030 = ylf_03 + (zyts_03 * 35) + jtf_03 + (tglxq_03 * ygz_03) + hlf03; //计算无伤残总额
                var res_03 = res_030 + (ygz_03 * 23) + fzqjfy_03 + scjt_03 + GetSelValue3() + GetSel_hldj3() + gyqsfxj_03;
                document.getElementById('test_jm').innerHTML = show_alert14(res_03, scjt_03, GetSel_hldj3(), gyqsfxj_03);
            } else if (dj == "02") {
                var scjt_02 = ygz_02 * 0.85;
                var gyqsfxj_02 = GetSel_po_2() * ygz_02 + qtqs02 * ygz_02 * 0.3 + qtqso02 * ygz_02 * 0.4; //供养抚恤金
                var res_020 = ylf_02 + (zyts_02 * 35) + jtf_02 + (tglxq_02 * ygz_02) + hlf02; //计算无伤残总额
                var res_02 = res_020 + (ygz_02 * 25) + fzqjfy_02 + scjt_02 + GetSelValue2() + GetSel_hldj2() + gyqsfxj_02;
                document.getElementById('test_jm').innerHTML = show_alert14(res_02, scjt_02, GetSel_hldj2(), gyqsfxj_02);
            } else if (dj == "01") {
                var scjt_01 = ygz_01 * 0.9;
                var gyqsfxj_01 = GetSel_po_1() * ygz_01 + qtqs01 * ygz_01 * 0.3 + qtqso01 * ygz_01 * 0.4; //供养抚恤金
                var res_010 = ylf_01 + (zyts_01 * 35) + jtf_01 + (tglxq_01 * ygz_01) + hlf01; //计算无伤残总额
                var res_01 = res_010 + (ygz_01 * 25) + fzqjfy_01 + scjt_01 + GetSelValue1() + GetSel_hldj1() + gyqsfxj_01;
                document.getElementById('test_jm').innerHTML = show_alert14(res_01, scjt_01, GetSel_hldj1(), gyqsfxj_01);
            } else if (dj == "die") {
                var szbzj_die = 2451 * 6;
                var ycx_gw_bzj_die = 31195 * 20;
                var gyqsfxj_die = GetSel_po_die() * ygz_die + qtqsdie * ygz_die * 0.3 + qtqsodie * ygz_die * 0.4; //供养抚恤金
                var res_die = gwylf_die + (zyts_die * 35) + jtf_die + hlf_die + szbzj_die + ycx_gw_bzj_die + gyqsfxj_die;
                document.getElementById('test_jm').innerHTML = show_alert_die(res_die, gyqsfxj_die);
            }

        }

        function hide_alert() {
            window.location.reload();
        }

        function show_alert(result, alertHtml) {
            //var result;
            var dialog_title = "计算结果";
            var title_gspcj = "工伤赔偿金：";
            var title_yuan = "元";
            var alertHtml = '<div class="weui_dialog_alert">';
            alertHtml += '<div class="weui_mask"></div>';
            alertHtml += '<div class="weui_dialog">';
            alertHtml += ' <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + dialog_title + '</strong></div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_gspcj + result + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_ft">';
            alertHtml += ' <a href="javascript:hide_alert();"class="weui_btn_dialog primary">确定</a>';
            alertHtml += ' </div>';
            alertHtml += ' </div>';
            alertHtml += '</div>';
            return alertHtml;
        }

        function show_alert14(result, result2, result3, result4, alertHtml) {
            var dialog_title = "计算结果";
            var title_gspcj = "工伤赔偿金：";
            var title_scjt = "伤残津贴："
            var title_shhlf = "生活护理费：";
            var title_gyqsfxj = "供养亲属抚恤金：";
            var title_yuan = "元";
            var alertHtml = '<div class="weui_dialog_alert">';
            alertHtml += '<div class="weui_mask"></div>';
            alertHtml += '<div class="weui_dialog">';
            alertHtml += ' <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + dialog_title + '</strong></div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_gspcj + result + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_scjt + result2 + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_shhlf + result3 + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_gyqsfxj + result4 + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_ft">';
            alertHtml += ' <a href="javascript:hide_alert();"class="weui_btn_dialog primary">确定</a>';
            alertHtml += ' </div>';
            alertHtml += ' </div>';
            alertHtml += '</div>';
            return alertHtml;
        }

        function show_alert56(result, result2, alertHtml) {
            var dialog_title = "计算结果";
            var title_gspcj = "工伤赔偿金：";
            var title_scjt = "伤残津贴："
            var title_yuan = "元";
            var alertHtml = '<div class="weui_dialog_alert">';
            alertHtml += '<div class="weui_mask"></div>';
            alertHtml += '<div class="weui_dialog">';
            alertHtml += ' <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + dialog_title + '</strong></div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_gspcj + result + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_scjt + result2 + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_ft">';
            alertHtml += ' <a href="javascript:hide_alert();"class="weui_btn_dialog primary">确定</a>';
            alertHtml += ' </div>';
            alertHtml += ' </div>';
            alertHtml += '</div>';
            return alertHtml;
        }

        function show_alert_die(result, result2, alertHtml) {
            var dialog_title = "计算结果";
            var title_gspcj = "工伤赔偿金：";
            var title_gyqsfxj = "供养亲属抚恤金："
            var title_yuan = "元";
            var alertHtml = '<div class="weui_dialog_alert">';
            alertHtml += '<div class="weui_mask"></div>';
            alertHtml += '<div class="weui_dialog">';
            alertHtml += ' <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + dialog_title + '</strong></div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_gspcj + result + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_bd">' + title_gyqsfxj + result2 + title_yuan + '</div>';
            alertHtml += ' <div class="weui_dialog_ft">';
            alertHtml += ' <a href="javascript:hide_alert();"class="weui_btn_dialog primary">确定</a>';
            alertHtml += ' </div>';
            alertHtml += ' </div>';
            alertHtml += '</div>';
            return alertHtml;
        }

        function GetSel_hldj4() { //护理等级的值

            var objSel = document.getElementById("select_hldj_04");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            hdj2 = hdj2 * 2451;
            return hdj2;
        }

        function GetSel_hldj3() { //护理等级的值

            var objSel = document.getElementById("select_hldj_03");

            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            hdj2 = hdj2 * 2451;
            return hdj2;
        }

        function GetSel_hldj2() { //护理等级的值

            var objSel = document.getElementById("select_hldj_02");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            hdj2 = hdj2 * 2451;
            return hdj2;
        }

        function GetSel_hldj1() { //护理等级的值

            var objSel = document.getElementById("select_hldj_01");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            hdj2 = hdj2 * 2451;
            return hdj2;
        }

        function GetSelValue4() {
            //安家补助费
            var objSel = document.getElementById("select_hk_04");
            var aj1 = objSel.value;
            var aj2 = parseInt(aj1);
            return aj2;
        }

        function GetSelValue3() {
            //安家补助费
            var objSel = document.getElementById("select_hk_03");
            var hdj1 = objSel.value;
            var hdj2 = parseInt(hdj1);
            return hdj2;
        }

        function GetSelValue2() {
            //安家补助费
            var objSel = document.getElementById("select_hk_02");
            var hdj1 = objSel.value;
            var hdj2 = parseInt(hdj1);
            return hdj2;
        }

        function GetSelValue1() {
            //安家补助费
            var objSel = document.getElementById("select_hk_01");
            var hdj1 = objSel.value;
            var hdj2 = parseInt(hdj1);
            return hdj2;
        }

        function GetSel_po_4() {
            //选择配偶
            var objSel = document.getElementById("select_po_04");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            return hdj2;
        }

        function GetSel_po_3() {
            //选择配偶
            var objSel = document.getElementById("select_po_03");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            return hdj2;
        }

        function GetSel_po_2() {
            //选择配偶
            var objSel = document.getElementById("select_po_02");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            return hdj2;
        }

        function GetSel_po_1() {
            //选择配偶
            var objSel = document.getElementById("select_po_01");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            return hdj2;
        }

        function GetSel_po_die() {
            //选择配偶
            var objSel = document.getElementById("select_po_die");
            var hdj1 = objSel.value;
            var hdj2 = parseFloat(hdj1);
            return hdj2;
        }

        function changeMenu4(Menutext4) {
            if (Menutext4 == "是") {
                document.all.po_4.style.display = "block";
                document.all.xs_qtqs04.style.display = "block";
            }
            if (Menutext4 == "否") {
                document.all.po_4.style.display = "none";
                document.all.xs_qtqs04.style.display = "none";
            }
        }

        function changeMenu3(Menutext3) {
            if (Menutext3 == "是") {
                document.all.po_3.style.display = "block";
                document.all.xs_qtqs03.style.display = "block";
            }
            if (Menutext3 == "否") {
                document.all.po_3.style.display = "none";
                document.all.xs_qtqs03.style.display = "none";
            }
        }

        function changeMenu2(Menutext2) {
            if (Menutext2 == "是") {
                document.all.po_2.style.display = "block";
                document.all.xs_qtqs02.style.display = "block";
            }
            if (Menutext2 == "否") {
                document.all.po_2.style.display = "none";
                document.all.xs_qtqs02.style.display = "none";
            }
        }

        function changeMenu1(Menutext1) {
            if (Menutext1 == "是") {
                document.all.po_1.style.display = "block";
                document.all.xs_qtqs01.style.display = "block";
            }
            if (Menutext1 == "否") {
                document.all.po_1.style.display = "none";
                document.all.xs_qtqs01.style.display = "none";
            }
        }

        function changeMenudie(Menutextdie) {
            if (Menutextdie == "是") {
                document.all.po_die.style.display = "block";
                document.all.xs_qtqsdie.style.display = "block";
            }
            if (Menutextdie == "否") {
                document.all.po_die.style.display = "none";
                document.all.xs_qtqsdie.style.display = "none";
            }
        }

        function changeMenu(Menutext) {
            if (Menutext == "无伤残") {
                document.all.ID_0.style.display = "block";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";

            }
            if (Menutext == "十级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "block";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }

            if (Menutext == "九级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "block";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "八级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "block";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "七级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "block";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "六级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "block";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "五级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "block";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "四级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "block";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "三级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "block";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "二级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "block";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "一级伤残") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "block";
                document.all.ID_die.style.display = "none";
            }
            if (Menutext == "工亡") {
                document.all.ID_0.style.display = "none";
                document.all.ID_10.style.display = "none";
                document.all.ID_09.style.display = "none";
                document.all.ID_08.style.display = "none";
                document.all.ID_07.style.display = "none";
                document.all.ID_06.style.display = "none";
                document.all.ID_05.style.display = "none";
                document.all.ID_04.style.display = "none";
                document.all.ID_03.style.display = "none";
                document.all.ID_02.style.display = "none";
                document.all.ID_01.style.display = "none";
                document.all.ID_die.style.display = "block";
            }

        }
