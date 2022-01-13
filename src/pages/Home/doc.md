na home faço a validação de login buscando os tokens (authorization e refresh-token)
no localstorage e renovando pela rota /refresh-token

caso nao tenha os tokens redireciona para pagina de login
case o token nao seja valido e nao consiga renovar pelo /refresh-token redireciona para pagina de login

a cada 20 minutos tenta renovar o token pelo /refresh-token
