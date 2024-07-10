const xml2js = require('xml2js');
// const parser = new xml2js.Parser({ explicitArray: false });
const { XMLParser } = require('fast-xml-parser');
// XML data (replace with your actual XML string)
const xmlData = 'xml string here';
//AgreementInfo,CustomerInfo,base_info,LogicalCard,PhysicalCard

async function parseXml(xmlData) {
  try {
    const result = await parser.parseStringPromise(xmlData);
    const dataOutput =
      result['soapenv:Envelope']['soapenv:Body']['tns6:DataOutput'];

    const AgreementInfo = dataOutput.AgreementInfo;
    const CustomerInfo = dataOutput.CustomerInfo;
    const base_info = dataOutput.AccountsListInfo.row.base_info;
    const LogicalCard = dataOutput.CardsListInfo.row.LogicalCard;
    const PhysicalCard = dataOutput.CardsListInfo.row.PhysicalCard;

    console.log('AgreementInfo:', AgreementInfo);
    console.log('CustomerInfo:', CustomerInfo);
    console.log('base_info:', base_info);
    console.log('LogicalCard:', LogicalCard);
    console.log('PhysicalCard:', PhysicalCard);
  } catch (err) {
    console.error(err);
  }
}

parseXml(xmlData);

// Configuration options for XMLParser
// const parserOptions = {
//   attributeNamePrefix: "",
//   ignoreAttributes: false,
//   tagValueProcessor: (tag) => (tag.startsWith("0") && !isNaN(tag)) ? tag.toString() : tag,
// };

// // Create a new XMLParser instance with options
// const parser = new XMLParser(parserOptions);

// // Parse XML data into a JavaScript object
// const jsonObj = parser.parse(xmlData);

// // Print the parsed JSON object for verification
// console.log(JSON.stringify(jsonObj, null, 2));
