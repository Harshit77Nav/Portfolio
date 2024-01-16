import {createClient} from '@sanity/client'
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: '1u9aucx1',
    dataset: 'production',
    apiVersion: '2024-01-08',
    token: 'skI7fOf7m2GovFPFEdSXi77vFynBE5LKk9Ez6HD3fSl50K07IYJR8NZzPatyBs01j3Drk7iuiE4ktveDxzG7bqMFAFBmX0AQdA9QaGB8lS122wOiW94MKrkn2n0q31ztawuDBYIRQotu8Ys3iB87y9wd12UiirpTcrtluM1IQNRD3FO5jlMk',
    useCdn: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}
