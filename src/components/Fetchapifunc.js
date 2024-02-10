export const countsub = (num) => {
    // if (!isNaN(num)) {
    //     console.log(num)
    //     return ''
    // }
    if (num < 1000) {
        return num
    } else if (num < 1000000) {
        if (num < 100000) {
            return `${(num / 1000).toFixed(1)}K`;
        } else {
            return `${Math.floor(num / 1000)}K`;
        }
    } else {
        return `${Math.floor(num / 1000000)}M`;
    }
}

export const countdate = (date) => {
    const isoDateString = date;
    const gdate = new Date(isoDateString)
    const currentDate = new Date();
    var seconddifference = gdate.getSeconds() - currentDate.getSeconds();
    var minutedifference = gdate.getMinutes() - currentDate.getMinutes();
    var hourdifference = gdate.getHours() - currentDate.getHours();
    var timeDifference = gdate.getTime() - currentDate.getTime();
    var daysDifference = Math.abs(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)))
    if (daysDifference < 1) {
        if (hourdifference == 1) {
            return `1 hour ago`;
        } else if (hourdifference > 1) {
            return `${hourdifference} hours ago`;
        } else if (hourdifference < 1) {
            if (minutedifference > 1) {
                return `${minutedifference} minutes ago`;
            } else if (minutedifference == 1) {
                return `1 minute ago`;
            } else {
                if (seconddifference > 1) {
                    return `${seconddifference} seconds ago`;
                } else {
                    return `1 second ago`;
                }
            }
        }

    } else if (daysDifference > 365) {
        return `${Math.floor(daysDifference / 365)} years ago`;
    } else if (daysDifference == 365) {
        return `1 yeara ago`;
    } else if (daysDifference > 30) {
        return `${Math.floor(daysDifference / 30)} Months ago`;
    } else if (daysDifference == 30) {
        return `1 Month ago`;
    } else if (daysDifference > 7) {
        return `${Math.floor(daysDifference / 7)} Weeks ago`;
    } else if (daysDifference == 7) {
        return `1 week ago`;
    } else if (daysDifference == 1) {
        return `1 day ago`;
    } else {
        return `${daysDifference} days ago`;
    }

}
export const fetchdata = async (sidelink, option, setvideos, seterror) => {
    try {
        const response = await fetch(sidelink, option);
        const data = await response.json();
        console.log(data)
        setvideos(data.items);
        seterror(false);
    } catch (error) {
        console.log(error);
        seterror(true);
    }
};
export const fetchdata2 = async (sidelink, option, setvideos, setnextpagetoken, seterror) => {
    try {
        const response = await fetch(sidelink, option);
        const data = await response.json();
        setnextpagetoken(data.nextPageToken)
        setvideos(data.items)
        seterror(false)
    } catch (error) {
        console.log(error);
        seterror(true);
    }
};
export const fetchagain = async (link, option, setvideos, setnextpagetoken, seterror) => {
    try {
        console.log('fetching')
        const response = await fetch(link, option)
        const data = await response.json();
        setnextpagetoken(data.nextPageToken);
        setvideos((prev) => [...prev, ...data.items])
        seterror(false)
    } catch (error) {
        console.log(error)
        seterror(true);
    }

}
export const option1 = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_REACT_OPTION1_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_REACT_OPTION1_HOST,
    },
};
export const option2 = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_REACT_OPTION2_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_REACT_OPTION2_HOST,
    },
};
export const option3 = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_REACT_OPTION3_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_REACT_OPTION3_HOST,
    },
};
export const changeKey = {

}