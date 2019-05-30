```bash
projname=foo
template=mobx-react
git clone https://github.com/phiresky/ts-boilerplates.git --single-branch --branch $template $projname
cd $projname
git remote rm origin
git checkout -b master
git branch -d $template
```
