const con = require("../../modules/mysql");

const authController = {
  signup: (req, res) => {
    const { id, name, passward } = req.body;
    const sql = "select id from user where id=?";
    const params = [id];
    con.query(sql.params, (err, result) => {
      if (err)
        return res.status(400).json({
          message: "중복된 아이디입니다.",
        });
      res.status(200).json({
        message: "아이디 사용이 가능합니다.",
        data: result,
      });
    });
    const sq2 = "insert into user ( id, name, password ) values (?, ?, ?)";
    const params2 = [id, name, passward];
    con.query(sq2, params2, (err, result) => {
      res.status(200).json({
        message: "가입이 완료 되었습니다. ",
        data: result,
      });
    });
  },
  singin: (req, res) => {
    const { id, passward } = req.body;
    const sql = "select * from user where id=? & passward =?";
    const params = [id, passward];
    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(400).json({
          message: "등록되지 않는 아이디입니다.",
        });
      if (req.body === result)
        return res.status(401).json({
          message: "비밀번호가 일치하지 않습니다.",
        });
      else {
        res.status(200).json({
          message: "로그인 성공",
          data: result,
        });
      }
    });
  },
};

module.exports = authController;
