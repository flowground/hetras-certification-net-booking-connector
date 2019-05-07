# ![LOGO](logo.png) hetras Booking API Version 0 **flow**ground Connector

## Description

A generated **flow**ground connector for the hetras Booking API Version 0 API (version v0).

Generated from: https://api.apis.guru/v2/specs/hetras-certification.net/booking/v0/swagger.json<br/>
Generated at: 2019-05-07T17:42:18+03:00

## API Description



## Authorization

This API does not require authorization.

## Actions

### Get a list of offers for addon services for the specified guest stay details.

> With the addons request you can get a list of offers for addon services available for a specific rate, room type<br/>
>             and guest stay details.The channel code will define which rates will be returned based on the access control <br/>
>             configuration for related rates.

*Tags:* `Addons`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _required_ - Specifies the hotel id to request offers for.
* `arrivalDate` - _required_ - Date from when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
* `departureDate` - _required_ - Date until when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
            This is usually the departure date of the reservation.
* `channelCode` - _required_ - Channel Code the rate plan needs to be configured for.
* `adults` - _required_ - Number of adults per room.
* `rooms` - _required_ - Number of rooms.
* `roomType` - _required_ - Only return offers for the specified room type code.
* `ratePlanCode` - _required_ - Only return offers for the specified rate plan code.
* `expand` - _optional_ - Expand the rates breakdown if required.
    Possible values: None, Breakdown.

### Gets the availability and occupancy for a specific hotel and timespan.

> Read past occupancy and future availability for a specific hotel. You can also request the breakdown per room type.

*Tags:* `Availability`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _required_ - Specifies the hotel id to request the availability for.
* `from` - _required_ - Defines the first business day you would like to get availability numbers for.
* `to` - _required_ - Defines the last business day you would like to get availability numbers for. The maximum time span between <i>from</i>'and <i>to</i>
            is limited to 365 days.
* `expand` - _optional_ - You can expand the room types breakdown per business day for the availibility numbers if need be.
    Possible values: RoomTypes.
* `skip` - _optional_ - Amount of items to skip.
* `top` - _optional_ - Amount of items to select.
* `inlinecount` - _optional_ - Return total number of items for a given filter criteria.
    Possible values: None, AllPages.

### Gets a list of blocks.

> With this endpoint you can request a list of blocks for the hotel chain. Currently we only support to optionally<br/>
>             filter by the group code linked to the block. Additional filters will be available soon.

*Tags:* `Blocks`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _optional_ - Only return blocks for this specific hotel.
* `groupCode` - _optional_ - Filter the blocks by the specified group code
* `from` - _optional_ - Return all blocks where the block's last_departure is greater than specified date.
* `to` - _optional_ - Return all blocks where the block's last_departure is less than specified date.
* `status` - _optional_ - Return all blocks where the block status is one of the specified values.
    Possible values: Cancelled, Tentative, Definite.
* `ratePlanCodes` - _optional_ - Return all blocks that have related the specified comma-separated rate plans.
* `countDetails` - _optional_ - If true it will include also details of block count per each room type.
* `skip` - _optional_ - Amount of items to skip.
* `top` - _optional_ - Amount of items to select.
* `inlinecount` - _optional_ - Return total number of items for a given filter criteria.
    Possible values: None, AllPages.

### Get total blocks count that match the given filter criteria.

*Tags:* `Blocks`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _optional_ - Only return blocks for this specific hotel.
* `groupCode` - _optional_ - Filter the blocks by the specified group code
* `from` - _optional_ - Return all blocks where the block's last_departure is greater than specified date.
* `to` - _optional_ - Return all blocks where the block's last_departure is less than specified date.
* `status` - _optional_ - Return all blocks where the block status is one of the specified values.
    Possible values: Cancelled, Tentative, Definite.
* `ratePlanCodes` - _optional_ - Return all blocks that have related the specified comma-separated rate plans.
* `countDetails` - _optional_ - If true it will include also details of block count per each room type.

### Gets the details for a specific block.

> Read all informationen about a block including the numbers of blocked rooms per room type and business day.

*Tags:* `Blocks`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `blockCode` - _required_ - Specifies the block code. The block code is composed of the hotel code, a dash and the block code 
            as shown in the hetras UI.

### Find bookings matching the given filter criteria.

> Here you can easily find bookings matching various criteria. The booking you are looking for has to fullfill all the specified criteria<br/>
>             at the same time. So if you specify a customer name and a channel code you will get all bookings where the firstname or lastname of a guest or a <br/>
>             contact contains the specified value and that have been done through the defined channel.<br/>
>             A booking can consist of multiple reservations, so even if you are looking for a specific reservation which is part of a multi-room booking you will get<br/>
>             all reservations for this booking returned.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _optional_ - Only return bookings for this specific hotel.
* `cancellationId` - _optional_ - Return bookings for this cancellation id.
* `reservationNumber` - _optional_ - Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
            don't specify a hotel filter at the same time you could get back multiple bookings from different hotels.
* `customerName` - _optional_ - Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `customerEmail` - _optional_ - Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `customerId` - _optional_ - Return all bookings the id of one of the guests or the contact matches the specified value.
* `roomNumber` - _optional_ - Return all bookings having the specified room number assigned.
* `externalId` - _optional_ - Return all bookings exactly matching the specified external id. This filter is case sensitive.
* `companyName` - _optional_ - Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `companyId` - _optional_ - Return all bookings the id of the company or travel agent profile matches the specified value.
* `companyEmail` - _optional_ - Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `blockCode` - _optional_ - Return all bookings where the block code matches the specified value.
* `reservationStatuses` - _optional_ - Return all bookings where the reservation status is one of the specified values.
* `marketCodes` - _optional_ - Return all bookings where the market code is one of the specified values.
* `channelCodes` - _optional_ - Return all bookings where the channel code is one of the specified values.
* `subChannelCodes` - _optional_ - Return all bookings where the subchannel code is one of the specified values.
* `roomTypes` - _optional_ - Return all bookings where the room type is one of the specified values.
* `ratePlanCodes` - _optional_ - Return all bookings where the rate plan code is one of the specified values.
* `labels` - _optional_ - Return all reservations with at least one of the specified labels.
* `from` - _optional_ - Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
            one reservation arriving on the specified date or later.
* `to` - _optional_ - End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
            one reservation arriving on the specified date or earlier.
* `dateFilter` - _optional_ - Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates
            will then define the time range.
    Possible values: ArrivalDate, DepartureDate, StayDate, CreationDate, ModificationDate.
* `exclude` - _optional_ - To be able to request reservations without personal data based on GDPR.
    Possible values: Customers.
* `skip` - _optional_ - Amount of items to skip.
* `top` - _optional_ - Amount of items to select.
* `inlinecount` - _optional_ - Return total number of items for a given filter criteria.
    Possible values: None, AllPages.

### Create a new booking.

> Create a new booking as defined in the requests payload. You can get more information about the payload if you check out the<br/>
>             documentation for the reservation request model.<br /><br/>
>             Please also have a look at the <a href="https://developer.hetras.com/docs/tutorials" onfocus="this.blur()">Tutorials</a>.<br /><br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `sendConfirmation` - _optional_ - Whether to send a confirmation email to the primary guest

### Get total count of bookings matchung the given filter criteria.

> Get the count of all bookings matching your criteria. The bookings have to fullfill all the specified criteria<br/>
>             at the same time. So if you specify a customer name and a channel code you will get the count for all bookings where the firstname or lastname <br/>
>             of a guest or a contact contains the specified value and that have been done through the defined channel.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _optional_ - Only return bookings for this specific hotel.
* `cancellationId` - _optional_ - Return bookings for this cancellation id.
* `reservationNumber` - _optional_ - Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
            don't specify a hotel filter at the same time you could get back multiple bookings from different hotels.
* `customerName` - _optional_ - Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `customerEmail` - _optional_ - Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `customerId` - _optional_ - Return all bookings the id of one of the guests or the contact matches the specified value.
* `roomNumber` - _optional_ - Return all bookings having the specified room number assigned.
* `externalId` - _optional_ - Return all bookings exactly matching the specified external id. This filter is case sensitive.
* `companyName` - _optional_ - Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `companyId` - _optional_ - Return all bookings the id of the company or travel agent profile matches the specified value.
* `companyEmail` - _optional_ - Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
            and also stripping of any whitespaces.
* `blockCode` - _optional_ - Return all bookings where the block code matches the specified value.
* `reservationStatuses` - _optional_ - Return all bookings where the reservation status is one of the specified values.
* `marketCodes` - _optional_ - Return all bookings where the market code is one of the specified values.
* `channelCodes` - _optional_ - Return all bookings where the channel code is one of the specified values.
* `subChannelCodes` - _optional_ - Return all bookings where the subchannel code is one of the specified values.
* `roomTypes` - _optional_ - Return all bookings where the room type is one of the specified values.
* `ratePlanCodes` - _optional_ - Return all bookings where the rate plan code is one of the specified values.
* `labels` - _optional_ - Return all reservations with at least one of the specified labels.
* `from` - _optional_ - Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
            one reservation arriving on the specified date or later.
* `to` - _optional_ - End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
            one reservation arriving on the specified date or earlier.
* `dateFilter` - _optional_ - Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates
            will then define the time range.
    Possible values: ArrivalDate, DepartureDate, StayDate, CreationDate, ModificationDate.
* `exclude` - _optional_ - To be able to request reservations without personal data based on GDPR.
    Possible values: Customers.

### Load all reservations for one booking by confirmation id.

> A booking groups all reservations done in one single request and can be identified by the confirmation id.<br/>
>             Guests usually use the confirmation id to check in at the kiosk, on the website or mobile device. In hetras<br/>
>             all reservations of one booking share the room type, rate plan and number of guests per room.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking to load.
* `expand` - _optional_ - Specifies the expand type.
    Possible values: None, RoomRates.
* `exclude` - _optional_ - Specifies the exclude type.
    Possible values: None, Customers.

### Load a specific reservation from a booking.

> With this request you can load one specific reservation done with one booking request.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation to load.
* `expand` - _optional_ - Specifies the expand type.
    Possible values: None, RoomRates.
* `exclude` - _optional_ - Specifies the exclude type.
    Possible values: None, Customers.

### Partially updates a reservation.

> The hetras API is using this <a href="https://developer.hetras.com/docs/patch" onfocus="this.blur()" target="_blank">Patch Specification</a><br/>
>             to partially update an existing resource. Currently this call allows to update the following fields:<br/>
>             external_id, market_code, channel_code, subchannel_code, guarantee_type, comment, addon_services, labels, guests, contact and company.<br/>
>             <br /><br /><br/>
>             A request example:<br /><pre><br/>
>             [<br/>
>               {<br/>
>                 "op": "replace", "path": "/addon_services", "value": ["BREAKFAST", "PARKING"]<br/>
>               },<br/>
>               {<br/>
>                 "op": "add", "path": "/labels/-", "value": "MOBILE"<br/>
>               },<br/>
>               {<br/>
>                 "op": "replace", "path": "/guests/SHOW-1234", "value": { "customer_id": "SHOW-1234", "primary": false }<br/>
>               },<br/>
>               {<br/>
>                 "op": "add", "path": "/guests/-", "value": { "customer_id": "SHOW-5678", "primary": true }<br/>
>               }<br/>
>             ]<br/>
>             </pre><br /><br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation that has to be updated.

### Assign a room to a reservation.

> By default this API call assigns a random room, which has the proper room type, is not already assigned<br/>
>             to another reservation or has any maintenance status set for the stay period of the underlying reservation. If the<br/>
>             arrival date for the underlying reservation is the current business day dirty rooms are excluded by default. For reservation<br/>
>             arriving on any latter day the room condition is not taken into account.<br /><br/>
>             By specifiying the room selection criteria in the request body you can influence which room will be assigned. See the request model<br/>
>             for further details.<br /><br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation the room should be assigned to.

### Cancel one reservation.

> This request will cancel one specific reservation. It will show up in the hetras UI in the Cancellation and NoShow<br/>
>             processing screen and it will be up to the hotel staff to either charge or waive the cancellation fee.<br /><br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation to cancel.
* `sendConfirmation` - _optional_ - Whether to send a confirmation email to the primary guest

### Performs a check in operation for a reservation.

> With this call you can set a reservation to the status inhouse. It allows only single room reservations to be checked in.<br/>
>             The reservation must have assigned a vacant and clean room.<br /><br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation to be checked in.

### Performs a check out operation for a reservation.

> With this call you can set a reservation to the checkout status. It allows only single room reservations to be checked out.<br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation to be checked out.

### Post a payment token for a reservation.

> TBD.<br /><br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation to be checked in.

### Performs a chip and pin credit card authorization for a reservation.

> With this call you can trigger a terminal authorization prompt for a reservation guest. <br/>
>             For more details on how the API responds to errors please check our documentation on <br/>
>             <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

*Tags:* `Bookings`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `confirmationId` - _required_ - The confirmation id for the booking the reservation was made.
* `reservationNumber` - _required_ - Specifies the reservation number for the reservation to be checked in.

### Get a list of daily rates given a hotel Id, a channel code and a date range.

> With the rates request you can get a list of different daily rates. You will have to at least <br/>
>             specify the hotel, the channel code, and a calendar range. The channel code will define which rates will be <br/>
>             returned based on the access control configuration for the rates. Additionally rate plan codes may be specified in<br/>
>             the request in order to limit only those rates of the given plans, if they are not specified, it will return all the public rate plans.<br/>
>             If requested the caller may specify whether he wants policies or not.

*Tags:* `DailyRates`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _required_ - Define the hotel id to request the availability for.
* `from` - _required_ - Define the first business day you would like to get availability numbers for. The day should not be in the past.
* `to` - _required_ - Define the last business day you would like to get rates for (inclusive). The maximum time span between <i>'From'</i> and <i>'To'</i>
            is limited to 365 days. This can't be less than the 'From' date.
* `channelCode` - _required_ - Define the channel code in order to look up the rates for.
* `expand` - _optional_ - Define the sections you want to expand and get informed about rates for.
* `ratePlanCodes` - _optional_ - Define the codes of rate plans to show in the response. A list of comma ',' separated rate plan codes.
* `skip` - _optional_ - Amount of items to skip.
* `top` - _optional_ - Amount of items to select.
* `inlinecount` - _optional_ - Return total number of items for a given filter criteria.
    Possible values: None, AllPages.

### Get a list of room offers for the specified guest stay details.

> With the rates request you can get a list of different rate offers per room type. You will have to at least <br/>
>             specify the hotel, the arrival and departure date, number of adults per room and the channel code. The channel code<br/>
>             will define which rates will be returned based on the access control configuration for the rates.

*Tags:* `Rates`

#### Input Parameters
* `App-Id` - _required_ - Application identifier
* `App-Key` - _required_ - Application key.
* `hotelId` - _required_ - Specifies the hotel id to request offers for.
* `arrivalDate` - _required_ - Date of arrival for the guest in the ISO-8601 format "YYYY-MM-DD".
* `departureDate` - _required_ - Date of departure for the guest in the ISO-8601 format "YYYY-MM-DD".
* `channelCode` - _required_ - Channel Code the rate plan needs to be configured for.
* `adults` - _required_ - Number of adults per room.
* `rooms` - _optional_ - Number of rooms (default is 1).
* `roomType` - _optional_ - Only return offers with rates for the specified room type code.
* `ratePlanCode` - _optional_ - Only return offers for the specified room type code.
* `groupCode` - _optional_ - Only return offers for the specified group code.
* `expand` - _optional_ - Expand the rates breakdown if required.
    Possible values: None, Breakdown.

## License

**flow**ground :- Telekom iPaaS / hetras-certification-net-booking-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
