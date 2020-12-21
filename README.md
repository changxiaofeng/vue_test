# vue_test

> my first vue_test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue-test

# git使用说明

``` bash
# 第一步：创建一个本地的版本库（其实也就是一个文件夹）；
          （1）可以右击新建文件夹TEST；
          （2）也可以右击打开Git bash命令行窗口通过命令创建；   $ mkdir TEST
# 第二步：cd TEST 
          git init
# 第三步：把项目粘贴到这个本地Git仓库；
          git add .   把该目录下的所有文件添加到仓库(不包括删除的文件)。这个过程可以用git status来查看当前状态；
          git add -A  提交所有变化
          git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
# 第四步：git commit -m "这里写本次提交的注释"    用git commit把项目提交到仓库；
             
	截至到此，我们本地Git仓库的工作做完了，下面就到了链接远程仓库（也就是连接Github）;

# 第五步：创建SSH KEY。
          先看下C盘目录下有没有.ssh目录，有的话看下里卖弄有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，
          没有就通过下面命令创建。
        （1）$ ssh-keygen -t rsa -C "youremail@example.com"    然后一路回车，创建成功后，就可以在.ssh目录下看到文件了；
# 第六步：Github -> Settings -> SSH and GPG KEYS -> New SSH key -> Title随便填，把刚才id_rsa.pub里面的内容复制到Title
          下面的Key内容框里面，最后点击Add SSH key，这样就完成了SSH Key的加密。
# 第七步：在Github上创建一个Git仓库。
# 第八步：把Github创建的仓库和本地仓库进行关联；
          $ git remote add origin https://github.com/changxiaofeng/vue_test.git
# 第九步：把本地库的所有内容推送到远程仓库（也就是Github）；
          $ git push -u origin master      由于新建的远程仓库是空的，所以要加上-u这个参数
          $ git push origin master           下次再从本地库上传

# git基本用法：
git stash   回退到上次上传代码的状态
``