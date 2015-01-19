require 'sinatra'

set :public_folder, '/var/www'

get '/' do
	"hey!"
end
