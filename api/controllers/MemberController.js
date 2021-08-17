/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // action - view
    view: async function (req, res) {
        // var result = Member.getInvalidIdMsg(req.params);
        //if (result) return res.badRequest(message);
        const qschool = req.query.school || "";
        const qcode = req.query.code || "";
        {
            var member = await Member.find({
                where: { code: { contains: qcode }, school: { contains: qschool } },
                sort: 'code',
            });
        }

        if (!member) return res.notFound();
        return res.view('member/view', { 'member': member });
    },

    info: async function (req, res) {

        const qschool = req.query.school || "";
        const qcode = req.query.code || "";
        const qprogname = req.query.progname || "";
        const qstudylv = req.query.studylv || "";
        const qduration = req.query.duration || "";
        const qfirstyr = req.query.firstyr || "";
        const qinterview = req.query.interview || "";
        const qfunding = req.query.funding || "";
        const qsd = req.query.sd || "";

        {
            var member = await Member.findOne({
                where: { code: { contains: qcode }, school: { contains: qschool }, progname: { contains: qprogname }, studylv: { contains: qstudylv }, duration: { contains: qduration }, firstyr: { contains: qfirstyr }, interview: { contains: qinterview }, funding: { contains: qfunding }, sd: { contains: qsd } },
            })
        }
        return res.view('member/info', { 'member': member });
    },

    furtherinfo: async function (req, res) {
        return res.view('member/furtherinfo')
    },

    jupas: async function (req, res) {
        return res.view('member/jupas')
    },

    gov: async function (req, res) {
        return res.view('member/gov')
    },

    notes: async function (req, res) {
        return res.view('member/notes')
    },

    contact: async function (req, res) {
        return res.view('member/contact')
    },

    security: async function (req, res) {
        return res.view('member/security')
    },

    brief: async function (req, res) {
        return res.view('member/brief')
    },

    hku: async function (req, res) {
        return res.view('member/hku')
    },

    hkbu: async function (req, res) {
        return res.view('member/hkbu')
    },

    cityu: async function (req, res) {
        return res.view('member/cityu')
    },

    lingu: async function (req, res) {
        return res.view('member/lingu')
    },

    cuhk: async function (req, res) {
        return res.view('member/cuhk')
    },

    eduhk: async function (req, res) {
        return res.view('member/eduhk')
    },

    polyu: async function (req, res) {
        return res.view('member/polyu')
    },

    hkust: async function (req, res) {
        return res.view('member/hkust')
    },

    ouhk: async function (req, res) {
        return res.view('member/ouhk')
    },

    career: async function (req, res){
        return res.view('member/career')
    },

    arts: async function (req, res){
        return res.view('member/arts')
    },

    business: async function (req, res){
        return res.view('member/business')
    },

    socialsciences: async function (req, res){
        return res.view('member/socialsciences')
    },

    engineering: async function (req, res){
        return res.view('member/engineering')
    },

    science: async function (req, res){
        return res.view('member/science')
    },

    architecture: async function (req, res){
        return res.view('member/architecture')
    },

    comm: async function (req, res){
        return res.view('member/comm')
    },

    prehistory: async function (req, res) {

        var past = await History.find({

            where: {
                username: { contains: req.session.username },
            }
        });
        return res.view('member/prehistory', { 'past': past })
    },

    profile: async function (req, res) {

        if (req.method == "POST") {
            if (typeof req.body.code === "string") {
                req.body.code = [req.body.code];
            }
            for (var i = 0; i < req.body.code.length; i++) {
                await Profile.create({
                    username: req.session.username,
                    code: req.body.code[i],
                    checkbox: "yes"
                }).fetch();
            }
        }

        var profile = await Profile.find({
            where: {
                username: req.session.username,
            }
        })

        var wish = await Member.find({
            where: {
                code: { 'in': profile.map(p => p.code) }
            }
        });
        return res.view('member/profile', {'wish': wish || [] })
    }
}