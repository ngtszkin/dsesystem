/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    homepage: async function (req, res) {
        return res.view('user/homepage')
    },

    login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');

        if (!req.body.username) return res.badRequest();
        if (!req.body.password) return res.badRequest();

        var user = await User.findOne({ username: req.body.username });

        if (!user) {
            res.status(401);
            return res.send("User not found");
        }

        const match = await sails.bcrypt.compare(req.body.password, user.password);

        if (!match) {
            res.status(401);
            return res.send("Wrong Password");
        }


        req.session.regenerate(function (err) {

            if (err) return res.serverError(err);

            req.session.username = req.body.username;

            req.session.password = req.body.password;

            sails.log("Session: " + JSON.stringify(req.session));

            return res.redirect('/member/inputscore');

        });



    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);



            return res.redirect("/user/homepage");

        });
    },

    register: async function (req, res) {

        if (req.method == "GET")
            return res.view('user/register');

        if (typeof req.body.User === "undefined")
            return res.badRequest("Form-data not received.");

        const saltRounds = 10;
        req.body.User.password = await sails.bcrypt.hash(req.body.User.password, saltRounds);

        await User.create(req.body.User);

        var user = await User.findOne({ username: req.body.User.username });

        req.session.regenerate(async function (err) {

            if (err) return res.serverError(err);

            req.session.username = user.username;

            req.session.email = user.email;
            await sails.helpers.sendSingleEmail({
                to: req.session.email,
                from: sails.config.custom.mailgunFrom,
                subject: 'Successful Registration of Programme Matching System',
                text:'Hello a new user!\n\nWelcome to Programme Matching System! We are happy to register our system. This is the confirmation email for the successful registration.\nHope the system can you plan your future!\n\nThanks,\nDeveloper of Programme Matching System',
            });
            sails.log("Session: " + JSON.stringify(req.session));

            return res.redirect('/member/inputscore');
        });

    },


    inputscore: async function (req, res) {

        return res.view('member/inputscore');

    },

    calc: async function (req, res) {
        //console.log(req.body.sum)

        const qcode = req.query.code || "";
        const qschool = req.body.school || "";
        const qprogname = req.query.progname || "";
        const qscoreform = req.query.scoreform || "";
        const qmeanscore = req.query.meanscore || "";
        const qsum = req.query.sum || "";

        const qnum1 = parseInt(req.body.num1) || 0;
        const qnum2 = parseInt(req.body.num2) || 0;
        const qnum3 = parseInt(req.body.num3) || 0;
        const qnum4 = parseInt(req.body.num4) || 0;
        const qnum5 = parseInt(req.body.num5) || 0;
        const qnum6 = parseInt(req.body.num6) || 0;
        const qnum7 = parseInt(req.body.num7) || 0;
        const qnum8 = parseInt(req.body.num8) || 0;
        const qnum9 = parseInt(req.body.num9) || 0;
        const qnum10 = parseInt(req.body.num10) || 0;
        const qnum11 = parseInt(req.body.num11) || 0;
        const qnum12 = parseInt(req.body.num12) || 0;
        const qnum13 = parseInt(req.body.num13) || 0;
        const qnum14 = parseInt(req.body.num14) || 0;
        const qnum15 = parseInt(req.body.num15) || 0;
        const qnum16 = parseInt(req.body.num16) || 0;
        const qnum17 = parseInt(req.body.num17) || 0;
        const qnum18 = parseInt(req.body.num18) || 0;
        const qnum19 = parseInt(req.body.num19) || 0;
        const qnum20 = parseInt(req.body.num20) || 0;
        const qnum21 = parseInt(req.body.num21) || 0;
        const qnum22 = parseInt(req.body.num22) || 0;
        const qnum23 = parseInt(req.body.num23) || 0;


        var count = 0;

        if (qnum1) { count++ }
        if (qnum2) { count++ }
        if (qnum3) { count++ }
        if (qnum4) { count++ }
        if (qnum5) { count++ }
        if (qnum6) { count++ }
        if (qnum7) { count++ }
        if (qnum8) { count++ }
        if (qnum9) { count++ }
        if (qnum10) { count++ }
        if (qnum11) { count++ }
        if (qnum12) { count++ }
        if (qnum13) { count++ }
        if (qnum14) { count++ }
        if (qnum15) { count++ }
        if (qnum16) { count++ }
        if (qnum17) { count++ }
        if (qnum18) { count++ }
        if (qnum19) { count++ }
        if (qnum20) { count++ }
        if (qnum21) { count++ }
        if (qnum22) { count++ }
        if (qnum23) { count++ }

        if (count >= 5) {

            var member = await Member.find({
                where: {
                    meanscore: { '<=': parseInt(req.body.sum) },
                    scoreform: '4C+1X',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member11 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'English + Chinese + 3 other subjects(eng2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member12 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 5',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member14 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 2 + qnum2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 5(chi2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member15 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 1.5 + qnum2 * 1.5 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 5(chi1.5eng1.5)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member16 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 1.5 + qnum2 * 2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 5(chi1.5eng2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member17 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 2 + qnum2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 5(chi2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member18 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 5(eng2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });


        }

        if (count > 5) {

            var member2 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member3 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(all1)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member4 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 1.5 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng1.5)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member5 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 * 1.5 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2maths1.5)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member6 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 * 2.5 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2maths2.5)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member7 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 * 2 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2maths2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member8 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 + qnum4 * 1.5 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2ls1.5)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member9 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 2 + qnum2 * 2 + qnum3 + qnum4 * 1.5 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2chi2ls1.5)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member10 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 1.25 + qnum2 * 1.25 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng1.25chi1.25)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member13 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: 'Best 6',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member19 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 * 2 + qnum2 * 2 + qnum3 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2chi2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

            var member20 = await Member.find({
                where: {
                    meanscore: { '<=': qnum1 + qnum2 * 2 + qnum3 * 2 + qnum4 + qnum5 + qnum6 + qnum7 + qnum8 + qnum9 + qnum10 + qnum11 + qnum12 + qnum13 + qnum14 + qnum15 + qnum16 + qnum17 + qnum18 + qnum19 + qnum20 + qnum21 + qnum22 + qnum23 },
                    scoreform: '4C+2X(eng2maths2)',
                    school: { contains: qschool },
                },
                sort: 'school',
            });

        }

        req.body.username = req.session.username;
        await History.create(req.body);

        console.log(qschool);
        return res.view('member/data', { 'member': req.body.sum, 'member1': member || [], 'member2': member2 || [], 'member3': member3 || [], 'member4': member4 || [], 'member5': member5 || [], 'member6': member6 || [], 'member7': member7 || [], 'member8': member8 || [], 'member9': member9 || [], 'member10': member10 || [], 'member11': member11 || [], 'member12': member12 || [], 'member13': member13 || [], 'member14': member14 || [], 'member15': member15 || [], 'member16': member16 || [], 'member17': member17 || [], 'member18': member18 || [], 'member19': member19 || [], 'member20': member20 || [] });
    },

    // search function
    search: async function (req, res) {
        const qcode = req.query.code || "";
        const qschool = req.query.school || "";
        const qprogname = req.query.progname || "";
        const qscoreform = req.query.scoreform || "";
        const qmeanscore = req.query.meanscore || "";

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 2;

        var h = {};
        if (qcode == "" && qschool == "" && qprogname == "" && qscoreform == "" && qmeanscore == "") {
            h = {};
        } else {
            if (qcode != "") {
                h.code = { contains: qcode };
            }
            if (qschool != "" && qschool != "nan") {
                h.school = qschool;
            }

            if (qscoreform != "") {
                h.scoreform = { '>=': qscoreform };
            }

            if (qmeanscore != "") {
                h.meanscore = qmeanscore;
            }
        }

        var member = await Member.find({
            //where: h,
            where: { school: { contains: qschool } },
            sort: 'school',
        });

        var numOfPage = Math.ceil(await member.length / numOfItemsPerPage);
        var noSearchSkip = numOfItemsPerPage * qPage;

        return res.view('member/searchU', { 'member': member, 'count': numOfPage, 'noSearchSkip': noSearchSkip });
    },

    // action - delete 
    delete: async function (req, res) {

        if (req.method == "GET") {

            var models = await Member.destroy({
                where: { code: { contains: req.params.code } }

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.redirect('/member/profile')
        }
    },

    delete1: async function (req, res) {

        if (req.method == "GET") {

            var modals1 = await User.destroy({
                where: { username: { contains: req.params.username } }
            }).fetch();

            if (modals1.length == 0) return res.notFound();

            return res.redirect('/user/administrator')
        }
    },

    admin: async function (req, res) {
        var person = await User.find()
        return res.view('user/administrator', { 'person': person || [] })
    },

    userlistemail: async function (req, res) {
        var models = await User.find();
        var html = await sails.reanderView('user/email_userlist', {
            users: models,
            layout: false
        });
    },
}

