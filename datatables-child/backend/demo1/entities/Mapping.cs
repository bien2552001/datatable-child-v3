using AutoMapper;
using demo1.apexchart.entities.DTO_apex;
using demo1.apexchart.entities.model_apex;
using demo1.chapter10.model.userDto;
using demo1.chapter10.model.usermodel;
using demo1.currentchart.entities.DTO_Current;
using demo1.currentchart.entities.Model_Current;
using demo1.Dtso666.Dto_Dtso666;
using demo1.Dtso666.Entities_Dtso666;
using demo1.entities.DTO;
using demo1.entities.model;

namespace demo1.entities
{
    public class Mapping: Profile
    {
        public Mapping() 
        {
            CreateMap<PostDto, datamodel>();//Ánh xạ thuộc tính từ lớp Item đến lớp ItemDto

            CreateMap<datamodel, GetDto>();//Ánh xạ thuộc tính từ lớp Item đến lớp ItemDto

            //-----------------------------------DTSU666--------------------------------------

            // Ánh xạ cho phương thức Post
            CreateMap<DTSU666_Post_Dto, DTSU666_Model>();

            CreateMap<DTSU666_Model, DTSU666_Get_Dto>();

            CreateMap<DTSU666_DataShapping_Dto, DTSU666_Model>();

            //CreateMap<DTSU666_Model, DTSU666_Get_Dto>();



            //________________________________________USER_____________________________________________________

            CreateMap<RoleRequestDto, Role_Model>();


            CreateMap<RegisterRequestDto, User_Model>();


            CreateMap<User_Model, RegisterRequestDto>();



            //-----------------------------ApexChart-------------------------------------------------------

            CreateMap<PosrApexDto, ApexModel>();

            CreateMap<ApexModel, ApexDto>();



            //-----------------------------ApexChart-------------------------------------------------------

            CreateMap<PostCurrent, Current_Model>();

            CreateMap<Current_Model, CurrentDto>();




        }
    }
}
