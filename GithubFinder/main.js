
const searchUser=document.querySelector('#searchUser');
searchUser.addEventListener('keyup',(e)=>
{
    let userName=e.target.value;    
    client_id='087c114326089663666c',
     client_secret='ba88942a1c365666450f497556cd626e496127d1'
    fetch(`https://api.github.com/users/${userName}?client_id=${client_id}&client_secret=${client_secret}`)
    // {
    //     method:'POST',
    //     headers:{
    //         'Accept':'application/json,text/plain,*/*',
    //         'Content-type':'application/json'
    //     },
    //     body:
    //         JSON.stringify({
    //             client_id:'087c114326089663666c',
    //             client_secret:'ba88942a1c365666450f497556cd626e496127d1'
    //         })
           
    //  }
     
    .then(response=>response.json())
    .then(user=>{
        
        
        //console.log(user)
        const profile=document.querySelector('#profile');
        profile.innerHTML=`<div class="card card-default text-medium">
        <div class="card-header">${user.name}</div>
        <div class="card-body">
            <div class='row'>
                <div class='col-md-3 col-sm-3'>
                    <img class='thumbnail avatar' src='${user.avatar_url}'>
                    <a class="btn btn-info btn-block" target="_blank" href="${user.html_url}">user profile</a>

                 </div>
                <div class='col-md-9'>
                    <span class="badge  badge-info text-medium">Public repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">public gist: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company:${user.company}</li>
                        <li class="list-group-item">website/blog:${user.blog}</li>
                        <li class="list-group-item">Location:${user.location}</li>
                        <li class="list-group-item">Member Since:${user.created_at}</li>
                    </ul>
                 </div>
            </div>
              
            
        </div>
      </div>
      <h3>Latest Repos</h3>
        <div id="repos"></div>
      `;
        return fetch(`https://api.github.com/users/${userName}/repos?client_id=${client_id}&client_secret=${client_secret}`)
        // {
        //     method:'POST',
        //     headers: {
        //         'Accept':'application/json,text/plain,*/*',
        //         'Content-type':'application/json'
        //     },
        //     body:
        //         JSON.stringify({
        //             client_id:'087c114326089663666c',
        //             client_secret:'ba88942a1c365666450f497556cd626e496127d1',
        //             per_page:5
        //         })
               
        //  }
         

    }).then(response=>response.json())
    .then(repos=>{
        const reposElement=document.querySelector('#repos');
        console.log(repos)
        repos.forEach(repo => {
            const card=document.createElement('div');
            card.className='card';
           card.innerHTML=`<div class="row">
           <div class="col-md-7">
                <ul class="list-group">
                    <li class="list-group-item"><strong>${repo.name}</strong>${repo.description}</li>
           
                 </ul>
             
          </div>
          <div class="col-md-3">
            <span class="badge  badge-info text-medium">Forks: ${repo.forks_count}</span>
            <span class="badge badge-primary">watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
          </div>
             <div class="col-md-2">
                <a href='${repo.html_url}' target='_blank' class='btn btn-info'>Repo Page</a>
             </div>
         </div>`;
            reposElement.appendChild(card);
        });
    })
    .catch(e=>{
        console.log(e)
    })
})