import {Injectable} from "@angular/core";

@Injectable()
export class Constants{
public HTTP = 'http://';
public SERVER_IP = 'localhost';
public SERVER_PORT = ':8080';
public SERVER_PATH= '/SWP49X/api';

// API
public LOGIN = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/login/";
public REGISTRATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/registration/";
public UPDATECOMPANYPROFILE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/updateCompanyProfile/";
public GETLISTCATALOG = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListCatalog/";


// HOME
public GET5NEWTENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/get5NewTender/";
public GETLISTBRANDBYCATALOG = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListBrandByCatalog/";

public CREATEPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/createPost/";
public GETLISTDESCRIPTION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListDescription/";
public CREATEPOSTDESCRIPTION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/createPostDescription/";
public GETLISTPOSTSUPPLIER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListPostSupplier/";
public SEARCHPOSTSUPPLIER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchPostSupplier/";
public GETLISTPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListPost/";
public SEARCHPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchPost/";
public SEARCHPOSTSTAFF = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchPostStaff/";
public VIEWPOSTDETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/viewPostDetail/";
public APPROVEPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/approvePost/";
public REVIEWPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/reviewPost/";
public GETLISTCOLOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListColor/";
public GETLISTSHIP = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListShip/";
//ratePost
public CHECKVOTEPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/checkVotePost/";
public VOTEPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/votePost/";
public GETLISTREVIEW = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListReview/";



public CREATEORDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/createOrder/";
public SEARCHORDERSUPPLIER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchOrderSupplier/";
public SEARCHORDERBUYER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchOrderBuyer/";
public SEARCHORDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchOrder/";
public CONFIRMORDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/confirmOrder/";
public VIEWORDERDETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/viewOrderDetail/";
public PAYMENTBUYER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/paymentBuyer/";
public CANCELORDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/cancleOrder/";
public CONFIRMSHIPPING = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/confirmShipping/";
public GETLISTCITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListCity/";
public GETLISTDISTRICT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListDistrict/";
public GETLISTWARD = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListWard/";



public CREATENEGOTIATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/createNegotiation/";
public SEARCHLISTNEGOTIATIONBUYER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchListNegotiationBuyer/";
public SEARCHLISTNEGOTIATIONSUPPLIER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchListNegotiationSupplier/";
public VIEWNEGOTIATIONDETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/viewNegotiationDetail/";
public UPDATENEGOTIATIONBUYER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/updateNegotiationBuyer/";
public GETLISTMESSAGE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListMessage/";
public SENDMESSAGE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/sendMessage/";
public CONFIRMNEGOTIATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/confirmNegotiation/";
public PAYMENTFORNEGOTIATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/paymentForNegotiation/";
public CANCLENEGOTIATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/cancleNegotiation/";




public SEARCHPRODUCT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchProduct/";
public SEARCHTENDERSUPPLIER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchTenderSupplier/";
public CANCLETENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/cancleTender/";
public SEARCHTENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchTender/";
public GETLISTSUPPLIERJOINTENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListSupplierJoinTender/";
public RATEBUYERTENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/rateBuyerTender/";
public RATESUPPLIERTENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/rateSupplierTender/";



public GETLISTPAYMENTMODE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getListPaymentMode/";
public CREATETENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/createTender/";
public SEARCHTENDERBUYER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchTenderBuyer/";
public VIEWTENDERDETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/viewTenderDetail/";
public CHECKBID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/checkBid/";
public BIDTENDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/bidTender/";
public VIEWTENDERHISTORYDETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/viewTenderHistoryDetail/";
public CHOOSEBIDDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/chooseBidder/";



// Group-Buying Deal
public CREATEDEAL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/createDeal/";
public SEARCHDEALSUPPLIER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchDealSupplier/";
public SEARCHDEALBUYER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchDealBuyer/";
public SEARCHDEAL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/searchDeal/";
public VIEWDEALDETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/viewDealDetail/";
public CHECKDEAL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/checkDeal/";
public JOINDEAL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/joinDeal/";
public PAYDEAL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/payDeal/";


// Thuật toán
public GETRECOMMENDEDLISTPOSTBYUSER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getRecommendedListPostByUser/";
public GETRECOMMENDEDLISTPOSTBYPOST = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getRecommendedListPostByPost/";

public GETTOP15POSTBYRATEDESC = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/getTop15PostByRateDesc/";


constructor(){}
}
