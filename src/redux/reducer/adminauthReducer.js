const initialization = { Title: 0, isAuthenticated: 0,reservationDate:"", reservationContent:"", reservationstatus:"", reservationTime:""};

function reducer(state = initialization, action) {
  switch (action.type) {
    case "adminlogin":
      return {
        isAuthenticated: 1,
      };
    case "adminlogout":
        return {
        isAuthenticated: 0,
    };
    case "admin-login-front":
        return {
        isAuthenticated: 1,
    };
    case "adminrsvList":
        return {
        Title: 1,
        isAuthenticated: 1,
    };
    case "adminrsvframesetAdd":
        return {
        Title: 3,
        isAuthenticated: 1,
    }
    case "rsvSet1":
    return {
        Title: 1,
      isAuthenticated: 1,
      reservationContent: "朝と夕方（男性）",
      reservationTime: "05:00 ～ 19:00",
      reservationDate: action.date,
      reservationstatus: "0件 残5/5"
    };
    case "rsvSet2":
    return {
        Title: 1,
      isAuthenticated: 1,
      reservationContent: "朝と夕方（女性）",
      reservationTime: "05:00 ～ 19:00",
      reservationDate: action.date,
      reservationstatus: "0件 残2/2"
    };
    case "rsvSet3":
    return {
        Title: 1,
      isAuthenticated: 1,
      reservationContent: "朝のみ（男性）",
      reservationTime: "05:00 ～ 12:00",
      reservationDate: action.date,
      reservationstatus: "0件 残2/2"
    };
    case "rsvSet4":
    return {
        Title: 1,
      isAuthenticated: 1,
      reservationContent: "朝のみ（女性）",
      reservationTime: "05:00 ～ 12:00",
      reservationDate: action.date,
      reservationstatus: "0件 残2/2"
    };
    case "rsvSet5":
    return {
        Title: 1,
      isAuthenticated: 1,
      reservationContent: "朝夕方のみ（男性）",
      reservationTime: "12:00 ～ 19:00",
      reservationDate: action.date,
      reservationstatus: "0件 残5/5"
    };
    case "rsvSet6":
    return {
        Title: 1,
      isAuthenticated: 1,
      reservationContent: "夕方のみ（女性）",
      reservationTime: "12:00 ～ 19:00",
      reservationDate: action.date,
      reservationstatus: "0件 残5/5"
    };
    case "rsvframeset":
    return {
        Title: 2,
      isAuthenticated: 1
    };
    default:
      return "No";
  }
}

export default reducer;
