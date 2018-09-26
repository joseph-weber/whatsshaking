class Cocktail

  require 'open-uri'
  require 'json'
  require 'net/http'


  def self.all()
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    cocktails = []
    response = Net::HTTP.get_response(URI.parse(url))
    response = response.body
      response = JSON.parse(response)
    response["drinks"].each do |cocktail|
      cocktails.push({
        "name" => cocktail["strDrink"]
        })
      end
      puts cocktails
      return cocktails
  end




end
