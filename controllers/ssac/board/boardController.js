const con = require("../../modules/mysql");

const boardController = {
  readAlldata: (req, res) => {
    const sql = "select * from board";
    con.query(sql, (err, result) => {
      if (err)
        return res.status(400).json({
          message: "조회 실패",
        });
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    });
  },

  readIdxData: (req, res) => {
    const { idx } = req.params;
    const sql = "select * from board where idx =?";
    const params = [idx];
    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(400).json({
          message: "불러오기 실패",
        });
      res.status(200).json({
        message: "게시물을 불러왔습니다.",
        data: result,
      });
    });
  },

  saveData: (req, res) => {
    const { title, content, boardPw, writer } = req.body;
    const sql =
      "insert into board (title,content,boardPw,writer) values (?,?,?,?)";
    const params = [title, content, boardPw, writer];

    con.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "저장에 실패했습니다..",
        });
      }
      res.status(200).json({
        message: "저장 완료",
      });
    });
  },
  deleteData: (req, res) => {
    const { idx } = req.params;
    const sql = "select * from board where idx =?";
    const params = [idx];

    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(400).json({
          message: "삭제 실패",
        });
      res.status(200).json({
        message: "게시물을 삭제했습니다.",
        data: result,
      });
    });
  },
};

module.exports = boardController;
