$('#searchBtn').on('click' ,function(){
    text = $('#crewSearch').val()
    $.get(`/teams/${text}`,function(data){
    $('#roster').empty()
    const source = $('#roster-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(data)
    $('#roster').append(newHTML) 
    $('#crewSearch').val('')
    })
})

const setDefaultImg = function (img) {
    img.src = 'https://p7.hiclipart.com/preview/729/435/787/basketball-sport-silhouette-clip-art-nba-players.jpg'
}