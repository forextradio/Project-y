//Search by Enter Key

let searchInput = document.querySelector('.input')
let searchInputValue = searchInput.value


   searchInput.addEventListener('keydown',function(event)
    {
        //Category Search
        
        if( event.key === 'Enter')
        {
           
            sessionStorage.setItem('searchInputValue',searchInput.value)
            event.preventDefault()
            alert('success');
            
            if(searchInput.value === 'shoes' || searchInput.value === 'shoe' || searchInput.value === 'Shoe' || searchInput.value === 'Shoes' )
            {
                window.location.href = 'Shoes.html'
                alert('Shoes found')
            }
            else if(searchInput.value === 'bags' || searchInput.value === 'bag' || searchInput.value === 'Bags' || searchInput.value === 'Bag')
            {
                alert( 'Bags Found' )
                window.location.href = 'Bags.html'
            }
            else if(searchInput.value === 'Clothes' || searchInput.value === 'clothes' || searchInput.value === 'clothe' || searchInput.value === 'clothe')
            {
                alert( 'Clothes Found' )
                window.location.href = 'Clothes.html'
            }
            else if(searchInput.value === 'Perfumes' || searchInput.value === 'perfumes' || searchInput.value === 'perfume' || searchInput.value === 'Perfume')
            {
                alert( 'Perfumes Found' )
                window.location.href = 'Perfumes.html'
            }
            
        }
    })

