const Owner = () => {
    return (
        <div className="about-owner">
  <h2>The Founder</h2>
  <div className="owner-profile">
    <figure className="owner-figure">
      <img
        src={require('../../media/images/mr_mrs_smith.webp')}
        alt="Mr. and Mrs. Smith"
        className="owner-image"
      />
      <figcaption>
        <h3 className="owner-image-title">Todd Smith</h3>
        <p className="owner-caption">(Mr. and Mrs. Smith)</p>
      </figcaption>
    </figure>

    <div className="owner-text">
      <p>
        Todd has been a proud part of the construction industry for over 30 years. For him, swinging a hammer came as naturally as walking. He got his start operating an exterior specialist company called Fast Trac, where his craftsmanship quickly earned the trust of clients who were eager to see what else he could do.
      </p>
      <p>
        After completing several home renovations for friends and family, Todd launched a new venture: RTS Solutions. What began as a passion turned into a full-time mission—helping homeowners transform their spaces with care, skill, and a personal touch.
      </p>
      <p>
        Now, over a decade and countless projects later, Todd brings a wealth of renovation knowledge to every job. He’s built more than just homes—he’s built relationships in the community. Whether it’s helping a neighbour with a kitchen update or taking on a full-home remodel, Todd’s commitment remains the same: quality work, honest service, and spaces that feel like home.
      </p>
      <p>
        At RTS Solutions, we treat every project like it's for family—because more often than not, it is.
      </p>
    </div>
  </div>
</div>
    )
}

export default Owner;