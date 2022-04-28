cd ~/www;
rm -rf 200.html _nuxt/ articles favicon.ico *.png *.svg;
cp -r ~/eldemocrata-web/dist/* ~/www;
rm ~/www/articles;
ln -s ~/eldemocrata/storage/app/articles/ ~/public_html/articles;
