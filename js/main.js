const LinksSocialMedia = {
  github = 'mayaemerson',
  facebook = 'emerson.maia.186',
  instagram = 'emersonmaiadp',
  twitter = 'maiaemersondev'
}

function ChargeSocialMedia(){
  for(let li of sociallinks.children){
    const social = li.getAttribute('class')
    li.children[0].href =`https://${social}.com/${LinksSocialMedia[social]}`;
  }
}