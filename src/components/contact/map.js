import React from 'react'

export default function Map() {
  return (
    <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                        <div className="h-full rounded overflow-hidden">
                            <iframe
                                title="Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13287.966924357468!2d73.0734863!3d33.6314564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20cf6919a7b8f77b%3A0x54a713897aa91ca8!2sFIT%20Computer%20institute%20_%20Graphic%20design%20course%20%2C%20IT%20short%20courses%20%2C%20Web%20development%20course%20in%20Rawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711289635647!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
  )
}
