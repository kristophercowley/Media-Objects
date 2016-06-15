(function(){
angular.module('my-app',[])

.controller('MainController',function(){
    var mc = this;
    mc.test = "test";
    mc.mediaObj = [
    {
        heading:"test1",
        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCP3eFIlapqYHlsUlUMbobPPGRPRz_BkKpcK4wW__DxwHkJEfY9A"
    },
     {
        heading:"test2",
        url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTejcOJcRLdRvxoP24GuDjpboc9kHUXRNmMyhDTaApiYG7rL69euw"
    },
     {
        heading:"test3",
        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGgAeNby1wmvqLe-R4kHJB_nk6jR5Tyw-o32OEzcbf5HOioQ4lkA"
    },
     {
        heading:"test4",
        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQE-ZfZ_kQT58ZdVYObxgJqgftHWaJpsu4jRjyo2zg5gjhGAlyNMQ"
    },
    {
        heading:"test5",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw55N4RhLSGGo0JyWANnr_MsGpXBwuTysTauRh5lTdQeNJU5JW"
    },
    {
        heading:"test6",
        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn5GiZ8_wqs6LvjdKEcYa8EQPs3fCBD-99Au4h5w5KFucMar4a"
    },
    {
        heading:"test7",
        url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnMOiet_7ynGIZXMFtL8fGH-nbMEdEPouFICji0F6KYbGEg6UE"
    }
]
})
}())