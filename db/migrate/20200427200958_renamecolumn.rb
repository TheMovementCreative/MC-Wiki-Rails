class Renamecolumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :pages, :ad__button, :ad_2_button 
  end
end
