set -e
git pull
echo '开始拉取代码'
cnpm i
echo '安装模块依赖'
npm run build
echo '开始打包'
rm -rf ../../public/manage
mv manage ../../public
rm -rf ./manage
echo '打包完成 见项目移至public目录'
