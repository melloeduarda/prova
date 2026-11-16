const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number (process.env.DB_PORT),
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    waitForConnection: true,
    connectionLimet: 10
});

export default conexao;